/* ============================================================
   NAGARJUNA REDDY DONDETI — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Loader ---------- */
  function runLoader() {
    const loader = document.getElementById("loader");
    const countEl = document.getElementById("loaderCount");
    if (!loader || !countEl) return;

    if (prefersReduced) {
      loader.classList.add("is-done");
      return;
    }

    let n = 0;
    const tick = setInterval(() => {
      n += Math.floor(Math.random() * 12) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(tick);
        setTimeout(() => loader.classList.add("is-done"), 350);
      }
      countEl.textContent = n;
    }, 90);
  }

  /* ---------- Scroll progress + hide-on-scroll topbar ---------- */
  function scrollUI() {
    const bar = document.querySelector(".scroll-progress");
    const topbar = document.querySelector(".topbar");
    let lastY = window.scrollY;

    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (bar) bar.style.width = (scrolled * 100).toFixed(2) + "%";

      const y = window.scrollY;
      if (topbar) {
        if (y > lastY && y > 400) topbar.classList.add("is-hidden");
        else topbar.classList.remove("is-hidden");
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  function revealOnScroll() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = Math.min(i * 60, 240);
            setTimeout(() => entry.target.classList.add("is-in"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Custom cursor ---------- */
  function customCursor() {
    const ring = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");
    if (!ring || !dot) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;

    window.addEventListener("mousemove", (e) => {
      tx = e.clientX; ty = e.clientY;
      dx = tx; dy = ty;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    });

    function loop() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    const hoverables = "a, button, .project, .skillcard, .intro__photo";
    document.querySelectorAll(hoverables).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  }

  /* ---------- Subtle parallax on cover title ---------- */
  function coverParallax() {
    if (prefersReduced) return;
    const title = document.querySelector(".cover__title");
    const cover = document.querySelector(".cover");
    if (!title || !cover) return;

    cover.addEventListener("mousemove", (e) => {
      const r = cover.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      title.style.transform = `translate(${x * 24}px, ${y * 16}px)`;
    });
    cover.addEventListener("mouseleave", () => {
      title.style.transform = "translate(0,0)";
    });
  }

  /* ---------- Graceful media fallback (video portrait) ---------- */
  function mediaFallback() {
    const media = document.getElementById("profileVideo") || document.getElementById("profileImg");
    if (!media) return;

    function swap() {
      if (!media.isConnected) return;
      const ph = document.createElement("div");
      ph.className = "intro__photo-fallback";
      ph.style.cssText =
        "width:100%;aspect-ratio:3/4;border-radius:4px;background:" +
        "linear-gradient(135deg,#141414,#1e1e1e);display:flex;align-items:center;" +
        "justify-content:center;color:#5c5a55;font-family:'Anton',sans-serif;" +
        "font-size:4rem;letter-spacing:.05em;";
      ph.textContent = "NRD";
      media.replaceWith(ph);
    }

    if (media.tagName === "VIDEO") {
      // A <video> fires 'error' on the element when no source can be loaded.
      media.addEventListener("error", swap, true);
      const src = media.querySelector("source");
      if (src) src.addEventListener("error", swap);
      // Best-effort autoplay (muted autoplay is allowed by browsers).
      const tryPlay = () => { const p = media.play(); if (p && p.catch) p.catch(() => {}); };
      media.addEventListener("loadeddata", tryPlay);
      // If nothing has loaded shortly after start, assume the file is missing.
      setTimeout(() => { if (media.isConnected && media.readyState === 0) swap(); }, 1500);
    } else {
      media.addEventListener("error", swap);
      if (media.complete && media.naturalWidth === 0) swap();
    }
  }

  /* ---------- Logo fallback (monogram if a CDN icon fails) ---------- */
  function attachFallback(img, box, monoText, monoClass) {
    if (!img || !box) return;
    function swap() {
      box.classList.add(monoClass);
      box.textContent = monoText || "•";
    }
    img.addEventListener("error", swap);
    if (img.complete && img.naturalWidth === 0) swap();
  }

  function initials(text) {
    return (text || "")
      .replace(/[^A-Za-z ]/g, "")
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function logoFallback() {
    // Skill toolkit logos
    document.querySelectorAll(".tool").forEach((tool) => {
      const img = tool.querySelector(".tool__logo img");
      const name = tool.querySelector(".tool__name");
      if (img && name) attachFallback(img, img.closest(".tool__logo"), initials(name.textContent), "tool__logo--mono");
    });

    // Experience company logos
    document.querySelectorAll(".timeline__logo").forEach((box) => {
      const img = box.querySelector("img");
      if (img) attachFallback(img, box, box.getAttribute("data-mono") || "", "timeline__logo--mono");
    });

    // Project tech logos
    document.querySelectorAll(".plogo").forEach((box) => {
      const img = box.querySelector("img");
      if (img) attachFallback(img, box, box.getAttribute("data-mono") || "", "plogo--mono");
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    runLoader();
    scrollUI();
    revealOnScroll();
    customCursor();
    coverParallax();
    mediaFallback();
    logoFallback();
  });
})();
