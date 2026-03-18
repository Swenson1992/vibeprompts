# VibePrompts — Cloudflare Pages Deployment Config

## _headers (for Cloudflare Pages)
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/llms.txt
  Content-Type: text/plain; charset=utf-8

/sitemap.xml
  Content-Type: application/xml; charset=utf-8
```

## _redirects
```
/prompts/saas/* /categories/saas.html 301
/prompts/landing/* /categories/landing-page.html 301
/tools/* /tools/:splat 200
```
