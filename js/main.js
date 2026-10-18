(() => {
  const d = window.PORTFOLIO, $ = (s) => document.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.title = `${d.name} | ${d.role}`;
  $("#brand").textContent = d.name;
  $("#footer-brand").textContent = d.name;
  $("#hero-tagline").textContent = d.tagline;
  $("#cv-link").href = d.resume;
  $("#about-text").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#facts").innerHTML = d.facts.map(([k, v]) => `<li><strong>${esc(k)}</strong><span>${esc(v)}</span></li>`).join("");
  $("#contact-text").textContent = d.contactText;
  $("#contact-links").innerHTML = [
    `<a class="btn primary" href="mailto:${esc(d.email)}">Get in touch ↗</a>`
  ].join("");
  $("#footer-contact").href = `mailto:${esc(d.email)}`;
  $("#footer-text").textContent = `© ${new Date().getFullYear()} ${d.name}`;
  const socialIcon = (label) => label === "LinkedIn"
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.5H2.4V21h2.8V8.5ZM3.8 2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.6 13.8c0-3.8-2-5.6-4.6-5.6a4 4 0 0 0-3.6 2V8.5h-2.8V21h2.8v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h2.9l1-7.2Z"/></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.6 2.2-1-.2-.2-.3-.6-.3-1.1-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.6 0C15 3.6 16 4 16 4c.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.4.7.9.7 1.8V22c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z"/></svg>`;
  $("#socials").innerHTML = d.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${socialIcon(s.label)}</a>`).join("");

  $("#skills-grid").append(...d.skills.map((g) =>
    el("div", "skill", `<h3>${esc(g.group)}</h3><ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`)));

  const tags = ["All", ...new Set(d.projects.flatMap((p) => p.tags))];
  const grid = $("#project-grid"), bar = $("#filters");
  const overlay = $("#project-overlay"), dialog = overlay.querySelector(".project-dialog");
  const closeProject = () => { overlay.hidden = true; document.body.classList.remove("project-open"); };
  $("#project-dialog-close").onclick = closeProject;
  overlay.onclick = (e) => { if (e.target === overlay) closeProject(); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) closeProject(); });
  $("#projects-prev").onclick = () => grid.scrollBy({ left: -grid.clientWidth * 0.8, behavior: "smooth" });
  $("#projects-next").onclick = () => grid.scrollBy({ left: grid.clientWidth * 0.8, behavior: "smooth" });
  const draw = (tag) => {
    grid.replaceChildren(...d.projects.filter((p) => tag === "All" || p.tags.includes(tag)).map((p) => {
      const card = el("article", "project",
        (p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : "") +
        `<span class="ver">${esc(p.version)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>` +
        `<ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` +
        (p.link && p.link !== "#" ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">View project</a>` : ""));
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-haspopup", "dialog");
      const openProject = () => {
        $("#project-dialog-version").textContent = p.version;
        $("#project-dialog-title").textContent = p.title;
        $("#project-dialog-text").textContent = p.text;
        const details = $("#project-dialog-details");
        details.innerHTML = [
          p.overview ? `<section><h3>Project overview</h3><p>${esc(p.overview)}</p></section>` : "",
          p.contributions ? `<section><h3>Key contributions</h3><ul>${p.contributions.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></section>` : "",
          p.features ? `<section><h3>Key features</h3><ul>${p.features.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></section>` : "",
          p.implementation ? `<section><h3>Technical implementation</h3><ul>${p.implementation.map(([heading, detail]) => `<li><strong>${esc(heading)}:</strong> ${esc(detail)}</li>`).join("")}</ul></section>` : ""
        ].join("");
        $("#project-dialog-stack").innerHTML = p.stack.map((s) => `<li>${esc(s)}</li>`).join("");
        overlay.hidden = false;
        document.body.classList.add("project-open");
        $("#project-dialog-close").focus();
      };
      card.addEventListener("click", (e) => { if (!e.target.closest("a")) openProject(); });
      card.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target === card) { e.preventDefault(); openProject(); } });
      return card;
    }));
    bar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.textContent === tag));
  };
  tags.forEach((t) => { const b = el("button", "filter", esc(t)); b.type = "button"; b.onclick = () => draw(t); bar.append(b); });
  draw("All");

  $("#timeline").append(...d.experience.map((x) =>
    el("li", "", `<h3>${esc(x.role)}, ${esc(x.org)}</h3><p class="period">${esc(x.period)}</p><ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`)));
  $("#education").innerHTML = d.education.map((e) => `<li>${esc(e)}</li>`).join("");

  const t = $(".nav-toggle"), nav = $("#nav-links");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    t.setAttribute("aria-expanded", open);
    t.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  t.onclick = () => setMenu(!nav.classList.contains("open"));
  nav.addEventListener("click", () => setMenu(false));
  document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width:901px)").addEventListener("change", () => setMenu(false));
})();
