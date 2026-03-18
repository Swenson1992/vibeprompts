// ============================================
// VibePrompts — Prompt Data
// ============================================

const PROMPTS = [
  {
    id: "saas-starter-001",
    title: "Full-Stack SaaS Starter with Auth & Billing",
    category: "saas",
    badge: "badge-saas",
    tools: ["Lovable", "Bolt"],
    copies: 2847,
    text: `Build a full-stack SaaS application with the following features:

**Authentication:**
- Email/password signup and login
- Google OAuth integration
- Email verification flow
- Password reset via email

**Dashboard:**
- Clean sidebar navigation with: Dashboard, Projects, Settings, Billing
- Overview page with key metrics (users, revenue, activity)
- Responsive design that works on mobile

**Billing:**
- Stripe integration with 3 pricing tiers: Free ($0), Pro ($29/mo), Enterprise ($99/mo)
- Upgrade/downgrade flow
- Invoice history page

**Tech Stack:** React + TypeScript, Supabase for auth/DB, Stripe for payments, Tailwind CSS
**Design:** Clean, modern SaaS aesthetic. Dark mode support. Use shadcn/ui components.`,
    tags: ["auth", "billing", "stripe", "supabase"],
    description: "The most-copied SaaS starter prompt. Gets you from zero to working auth + billing in one shot."
  },
  {
    id: "landing-hero-001",
    title: "High-Converting SaaS Landing Page",
    category: "landing",
    badge: "badge-landing",
    tools: ["v0", "Bolt", "Lovable"],
    copies: 1923,
    text: `Create a high-converting SaaS landing page with these sections:

**Hero Section:**
- Bold headline with value proposition (max 8 words)
- Subheadline explaining the benefit (1-2 sentences)
- Primary CTA button: "Start Free Trial" + secondary: "See Demo"
- Hero image/screenshot placeholder
- Social proof: "Trusted by 10,000+ teams"

**Features Section:**
- 3-column grid with icons
- Feature 1: [Your main feature]
- Feature 2: [Secondary feature]  
- Feature 3: [Third feature]

**Pricing Section:**
- 3 tiers: Starter / Pro / Enterprise
- Monthly/Annual toggle (20% discount)
- Feature comparison list
- Most popular badge on middle tier

**Testimonials:**
- 3 testimonial cards with avatar, name, company, quote

**FAQ Section:**
- 6 common questions with accordion expand/collapse

**Footer CTA:**
- "Ready to get started?" with email capture

Design: Clean, white background, one accent color. Conversion-optimized layout.`,
    tags: ["landing", "conversion", "pricing", "testimonials"],
    description: "Proven landing page structure used by 100+ successful SaaS launches."
  },
  {
    id: "ai-chatbot-001",
    title: "AI Chatbot Interface with Streaming",
    category: "ai",
    badge: "badge-ai",
    tools: ["Lovable", "Bolt", "Cursor"],
    copies: 3102,
    text: `Build an AI chatbot interface with these specifications:

**Chat Interface:**
- Clean chat UI with message bubbles (user right, AI left)
- Streaming text response (typewriter effect)
- Code block rendering with syntax highlighting
- Markdown support in responses
- Copy button on each message

**Sidebar:**
- Conversation history list
- New chat button
- Search conversations
- Delete conversation option

**Input Area:**
- Multi-line textarea that auto-expands
- Send on Enter (Shift+Enter for newline)
- Character/token counter
- Attach file button (UI only)
- Model selector dropdown

**Features:**
- Loading skeleton while waiting for response
- Error state with retry button
- Empty state with suggested prompts
- Mobile-responsive layout

**API Integration:**
- Connect to OpenAI API (or Anthropic)
- Stream responses using SSE
- Handle rate limits gracefully

Style: Dark theme, similar to ChatGPT but more modern. Use Inter font.`,
    tags: ["ai", "chatbot", "openai", "streaming"],
    description: "Build a production-ready AI chat interface with streaming in one prompt."
  },
  {
    id: "ecom-product-001",
    title: "E-commerce Product Page with Cart",
    category: "ecom",
    badge: "badge-ecom",
    tools: ["Lovable", "Bolt"],
    copies: 1456,
    text: `Create a complete e-commerce product page with:

**Product Display:**
- Image gallery with thumbnail strip (4-6 images)
- Zoom on hover
- Product title, price, and rating stars
- Stock indicator ("Only 3 left!")
- Variant selectors: Size (S/M/L/XL) + Color swatches

**Purchase Section:**
- Quantity selector
- "Add to Cart" primary button
- "Buy Now" secondary button
- Wishlist heart icon
- Free shipping badge (orders over $50)

**Product Info Tabs:**
- Description tab with rich text
- Specifications tab with table
- Reviews tab with rating breakdown + review cards

**Cart Sidebar:**
- Slide-in cart drawer
- Item list with quantity controls
- Subtotal + estimated shipping
- Checkout button
- "Continue Shopping" link

**Related Products:**
- 4-item horizontal scroll on mobile
- 4-column grid on desktop

Tech: React, Zustand for cart state, Tailwind CSS
Design: Clean, minimal. White background. Product photography focused.`,
    tags: ["ecommerce", "cart", "product", "shopping"],
    description: "Complete product page + cart drawer. Ready to connect to Shopify or custom backend."
  },
  {
    id: "dashboard-analytics-001",
    title: "Analytics Dashboard with Charts",
    category: "dashboard",
    badge: "badge-dash",
    tools: ["v0", "Cursor"],
    copies: 2234,
    text: `Build a data analytics dashboard with:

**Layout:**
- Fixed sidebar (240px) with navigation
- Top header with date range picker + export button
- Main content area with responsive grid

**KPI Cards (top row):**
- Total Revenue: $124,592 (+12.5% vs last month)
- Active Users: 8,429 (+3.2%)
- Conversion Rate: 3.24% (-0.8%)
- Avg Session: 4m 32s (+15%)
- Each card: metric, trend arrow, sparkline

**Charts:**
- Revenue over time: Line chart (last 30 days)
- Traffic sources: Donut chart (Organic/Paid/Social/Direct)
- User activity: Bar chart (hourly heatmap)
- Geographic: World map with bubble markers

**Data Table:**
- Top pages by traffic
- Sortable columns
- Pagination
- Row hover highlight
- Export to CSV button

**Filters:**
- Date range: Today / 7D / 30D / 90D / Custom
- Segment: All Users / New / Returning
- Device: All / Desktop / Mobile / Tablet

Use Recharts or Chart.js. Dark theme preferred. Real-time feel with subtle animations.`,
    tags: ["dashboard", "analytics", "charts", "data"],
    description: "Full analytics dashboard with 4 chart types, KPI cards, and data tables."
  },
  {
    id: "booking-calendar-001",
    title: "Appointment Booking System",
    category: "booking",
    badge: "badge-saas",
    tools: ["Lovable", "v0"],
    copies: 987,
    text: `Create an appointment booking system like Calendly:

**Booking Flow:**
1. Service selection page (list of services with duration + price)
2. Calendar view showing available dates (greyed out = unavailable)
3. Time slot picker for selected date (30-min slots, 9am-5pm)
4. Customer info form: Name, Email, Phone, Notes
5. Confirmation page with booking summary + add to calendar links

**Provider Dashboard:**
- Weekly calendar view of all bookings
- Set availability (recurring schedule + exceptions)
- Block off time slots
- View/cancel/reschedule bookings
- Customer list with booking history

**Notifications:**
- Booking confirmation email template
- 24h reminder email template
- Cancellation email template

**Settings:**
- Buffer time between appointments
- Minimum advance booking (e.g., 2 hours)
- Maximum advance booking (e.g., 60 days)
- Timezone handling

Design: Clean, professional. Teal/blue accent. Mobile-first.
Backend: Supabase for data, Resend for emails.`,
    tags: ["booking", "calendar", "scheduling", "appointments"],
    description: "Full Calendly-style booking system. Works for consultants, salons, coaches."
  }
];

// Export for use in other scripts
if (typeof module !== 'undefined') module.exports = { PROMPTS };
