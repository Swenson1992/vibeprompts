// ============================================
// VibePrompts — Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedPrompts();
  initSearch();
  initCopyButtons();
});

// ---- Render Featured Prompts ----
function renderFeaturedPrompts() {
  const grid = document.getElementById('promptsGrid');
  if (!grid) return;

  const featured = PROMPTS.slice(0, 6);
  grid.innerHTML = featured.map(p => createPromptCard(p)).join('');
  
  // Attach copy handlers
  grid.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => handleCopy(btn));
  });
}

function createPromptCard(prompt) {
  const toolTags = prompt.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
  const preview = prompt.text.substring(0, 180).replace(/\*\*/g, '').replace(/\n/g, ' ') + '...';
  
  return `
    <div class="prompt-card" data-id="${prompt.id}">
      <div class="prompt-header">
        <h3 class="prompt-title">${prompt.title}</h3>
        <span class="prompt-badge ${prompt.badge}">${prompt.category}</span>
      </div>
      <div class="prompt-preview">${preview}</div>
      <div class="prompt-footer">
        <div class="prompt-tools">${toolTags}</div>
        <button class="copy-btn" data-text="${encodeURIComponent(prompt.text)}" data-id="${prompt.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
    </div>
  `;
}

// ---- Copy Handler ----
async function handleCopy(btn) {
  const text = decodeURIComponent(btn.dataset.text);
  
  try {
    await navigator.clipboard.writeText(text);
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    btn.classList.add('copied');
    
    // Track copy count (localStorage)
    const id = btn.dataset.id;
    const counts = JSON.parse(localStorage.getItem('copyCounts') || '{}');
    counts[id] = (counts[id] || 0) + 1;
    localStorage.setItem('copyCounts', JSON.stringify(counts));
    
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 2000);
  } catch (err) {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  }
}

// ---- Search ----
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput')?.value?.trim();
  if (!query) return;
  window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// ---- Init copy buttons on detail pages ----
function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.copy);
      if (target) {
        navigator.clipboard.writeText(target.textContent).then(() => {
          btn.textContent = '✓ Copied!';
          setTimeout(() => btn.textContent = 'Copy Prompt', 2000);
        });
      }
    });
  });
}

// ---- Scroll animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-card, .prompt-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
