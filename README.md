# Nagarjuna Reddy Dondeti — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-nagarjunareddy--portfolio.onrender.com-35e0d0?style=for-the-badge&logo=render&logoColor=0a0a0a)](https://nagarjunareddy-portfolio.onrender.com/)
[![Render](https://img.shields.io/badge/Hosted_on-Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com)
[![Status](https://img.shields.io/badge/Deployment-Active-success?style=for-the-badge)](https://nagarjunareddy-portfolio.onrender.com/)

> **Live Production URL:** [https://nagarjunareddy-portfolio.onrender.com/](https://nagarjunareddy-portfolio.onrender.com/)

The personal engineering portfolio and interactive showcase of **Nagarjuna Reddy Dondeti**, an **AI / ML Engineer** specializing in RAG pipelines, LLM evaluation frameworks, autonomous multi-agent systems, and production computer vision.

---

## 🎨 Visual Identity & Architecture

Built with a high-contrast editorial aesthetic inspired by modern brutalist typography and dynamic micro-interactions:

- **Color System:** Dark obsidian backdrop (`#0a0a0a`), vibrant electric aqua accents (`#35e0d0`), warm terracotta accents (`#ff5c35`), and muted ivory text (`#f2f0ea`).
- **Typography:** Display headlines powered by **Anton**; body, data badges, and technical specs rendered in **Space Grotesk**.
- **Performance:** Zero bloated runtime dependencies — built with pure semantic HTML5, modern CSS3 custom properties, and modular Vanilla ES6+ JavaScript.

---

## ✨ Features

- ⚡ **Interactive Editorial Layout:** Dynamic scroll progress indicator, hide-on-scroll header, smooth reveal animations, and inertial cursor tracking.
- 🖼️ **Social Sharing & Open Graph Card:** High-resolution 1200x630 pixel social preview card (`og-preview.png`) configured with full Open Graph and Twitter Card tags.
- 📩 **Asynchronous Contact Form:** Integrated AJAX form handling with bot honeypot validation, loading states, accessible status alerts, and email fallback.
- 📊 **Privacy-Conscious Analytics:** Lightweight telemetry dispatcher respecting browser `Do-Not-Track` (`DNT`) headers.
- 🔍 **Search Engine Optimization (SEO):** Clean XML sitemap (`sitemap.xml`), crawl rules (`robots.txt`), and canonical link headers for custom domain readiness.
- 🛡️ **Edge Security & Cache Policies:** Production-ready `render.yaml` and `netlify.toml` headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and immutable 1-year asset caching).

---

## 📁 Repository Structure

```text
├── assets/
│   ├── images/
│   │   └── og-preview.png     # 1200x630 Open Graph & Twitter preview card
│   ├── isro.png               # ISRO experience emblem
│   ├── skilldzire.png         # Skill Dzire experience emblem
│   └── profile.mp4            # Interactive loop portrait
├── css/
│   └── styles.css             # Design tokens, responsive grid, animations
├── js/
│   └── main.js                # Form validation, cursor physics, scroll triggers
├── index.html                 # Semantic markup & Open Graph metadata
├── render.yaml                # Render Blueprint infrastructure specification
├── netlify.toml               # Netlify edge headers & redirect definitions
├── robots.txt                 # Search engine crawler policies
├── sitemap.xml                # Canonical XML sitemap
└── README.md                  # Project documentation
```

---

## 🚀 Local Development

To run and preview the portfolio locally, clone the repository and start any static file server:

### 1. Clone the repository
```bash
git clone https://github.com/NagarjunareddyDONDETI/Nagarjuna-Reddy-portfolio.git
cd Nagarjuna-Reddy-portfolio
```

### 2. Start a local server

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (`npx serve`):**
```bash
npx serve . -p 8000
```

**Using VS Code:**
- Install the **Live Server** extension and click **"Go Live"**.

### 3. Open in Browser
Visit `http://localhost:8000` in your web browser.

---

## 🌐 Custom Domain Setup

To link a custom domain (e.g., `nagarjunareddy.com` or `nagarjuna.dev`) to the Render deployment:

1. In the **Render Dashboard**, navigate to the `nagarjunareddy-portfolio` Static Site service.
2. Go to **Settings** ➔ **Custom Domains**.
3. Add your custom domain (e.g. `yourdomain.com` and `www.yourdomain.com`).
4. Update your domain registrar's DNS records:
   - **Apex domain (`@`)**: `ANAME` / `ALIAS` or `A` record pointing to Render's IP addresses.
   - **Subdomain (`www`)**: `CNAME` pointing to `nagarjunareddy-portfolio.onrender.com`.
5. Render will automatically issue and renew a free Let's Encrypt SSL/TLS certificate.
6. Update the canonical URL in `index.html`, `sitemap.xml`, and `robots.txt` to point to your new custom domain.

---

## 📬 Contact & Socials

- **Email:** [nagarjuna.dondeti@sasi.ac.in](mailto:nagarjuna.dondeti@sasi.ac.in)
- **LinkedIn:** [linkedin.com/in/nagarjuna-reddy-dondeti-00508a287](https://www.linkedin.com/in/nagarjuna-reddy-dondeti-00508a287/)
- **GitHub:** [github.com/NagarjunareddyDONDETI](https://github.com/NagarjunareddyDONDETI)
- **Location:** Andhra Pradesh, India
