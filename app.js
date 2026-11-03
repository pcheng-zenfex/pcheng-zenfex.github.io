(() => {
  "use strict";
  const data = window.HOMEPAGE || {};
  const $ = (id) => document.getElementById(id);
  const element = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  };
  const safeURL = (value, allowLocal = false) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, location.href);
      if (url.protocol === "https:" || url.protocol === "http:") {
        if (!allowLocal && !/^https?:\/\//i.test(value)) return null;
        return url.href;
      }
    } catch { /* Invalid links are omitted. */ }
    return null;
  };
  const link = (label, href, allowLocal = false) => {
    const url = safeURL(href, allowLocal);
    if (!url) return null;
    const a = element("a", "", label);
    a.href = url;
    if (new URL(url).origin !== location.origin) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  };
  const appendParts = (parent, parts) => {
    for (const part of parts) {
      if (typeof part === "string") { parent.append(document.createTextNode(part)); continue; }
      if (!part || typeof part.text !== "string") continue;
      const content = link(part.text, part.url) || document.createTextNode(part.text);
      if (part.strong) {
        const strong = element("strong"); strong.append(content); parent.append(strong);
      } else parent.append(content);
    }
  };
  if (data.name) {
    $("profile-name").textContent = data.name;
    $("footer-name").textContent = data.name;
    document.querySelector(".site-name").replaceChildren(document.createTextNode(data.name), element("span", "name-dot", "."));
    document.querySelector(".site-name").setAttribute("aria-label", `${data.name} homepage`);
    document.title = `${data.name} | ${data.affiliation || "Homepage"}`;
  }
  if (data.affiliation) {
    $("profile-affiliation").replaceChildren();
    if (data.role) $("profile-affiliation").append(document.createTextNode(`${data.role} / `));
    $("profile-affiliation").append(link(data.affiliation, data.affiliationUrl) || document.createTextNode(data.affiliation));
  }
  if (data.tagline) {
    const parts = String(data.tagline).split(/(\*[^*]+\*)/g);
    $("profile-description").replaceChildren(...parts.map(part =>
      /^\*[^*]+\*$/.test(part) ? element("em", "", part.slice(1, -1)) : document.createTextNode(part)
    ));
  }
  if (data.photo && safeURL(data.photo, true)) {
    const photo = $("portrait").querySelector("img");
    photo.src = safeURL(data.photo, true);
    photo.alt = `Portrait of ${data.name || "the author"}`;
    photo.addEventListener("error", () => {
      photo.src = "assets/avatar.svg";
      photo.alt = "Profile photo unavailable";
    }, { once: true });
  }
  // Render linked names and emphasis with DOM nodes; supplied content is never HTML.
  const phrases = [...Object.keys(data.bioLinks || {}), data.name, data.affiliation, "offline reinforcement learning", "model-based offline RL", "sample-efficient learning", "representation learning"].filter(Boolean);
  if (Array.isArray(data.bio) && data.bio.length) {
    $("bio").replaceChildren(...data.bio.map(text => {
      const p = element("p");
      let rest = String(text);
      while (rest.length) {
        const match = phrases.map(phrase => ({phrase, at: rest.indexOf(phrase)})).filter(x => x.at >= 0).sort((a,b) => a.at - b.at || b.phrase.length - a.phrase.length)[0];
        if (!match) { p.append(document.createTextNode(rest)); break; }
        p.append(document.createTextNode(rest.slice(0, match.at)), link(match.phrase, data.bioLinks?.[match.phrase]) || element("strong", "", match.phrase));
        rest = rest.slice(match.at + match.phrase.length);
      }
      return p;
    }));
  }
  if (Array.isArray(data.interests)) $("research-interests").replaceChildren(...data.interests.map(x => element("span", "", x)));

  const iconPaths = {
    email: "M2 4h16v12H2z M2 4l8 6 8-6",
    scholar: "M1 7l9-4 9 4-9 4z M5 9v5c3 3 7 3 10 0V9 M19 7v7",
    github: "M7 17c-4 1-4-2-6-2 M14 19v-4c0-1-.5-2-1-2 3-.4 5-1.5 5-5 0-1-.4-2-1-3 .2-1 .2-2-.2-3-2 0-3 1-3 1-2-.5-4-.5-6 0 0 0-1-1-3-1-.4 1-.4 2-.2 3-.6 1-1 2-1 3 0 3.5 2 4.6 5 5-.5.5-1 1-1 2v4",
    document: "M5 2h7l4 4v12H5z M12 2v5h4 M8 10h5 M8 13h5"
  };
  const icon = (type) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 20 20"); svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(svg.namespaceURI, "path");
    path.setAttribute("d", iconPaths[type] || iconPaths.document);
    svg.append(path); return svg;
  };
  const profileLinks = [];
  if (typeof data.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    const a = element("a", "", data.email); a.href = `mailto:${data.email}`; a.prepend(icon("email")); profileLinks.push(a);
  }
  const labels = { scholar: "Google Scholar", github: "GitHub", orcid: "ORCID", dblp: "DBLP", researchgate: "ResearchGate", cv: "Curriculum Vitae" };
  Object.entries(labels).forEach(([key, label]) => {
    const a = link(label, data.links?.[key], key === "cv");
    if (a) { a.prepend(icon(key)); profileLinks.push(a); }
  });
  $("profile-links").replaceChildren(...profileLinks.map(a => { const li = element("li"); li.append(a); return li; }));
  $("contact-pending").hidden = profileLinks.length > 0;
  const scholar = safeURL(data.links?.scholar);
  if (scholar) { $("scholar-link").href = scholar; $("scholar-link").target = "_blank"; $("scholar-link").rel = "noopener noreferrer"; $("scholar-link").hidden = false; }

  const news = Array.isArray(data.news) ? data.news : [];
  let expanded = false;
  const renderNews = () => {
    $("news-list").replaceChildren(...news.slice(0, expanded ? news.length : 4).map(item => {
      const li = element("li");
      const date = element("time", "news-date", item.date ? `[${item.date}]` : "");
      if (item.date) date.dateTime = item.date.replace(".", "-");
      li.append(date);
      const body = element("span");
      if (item.title) {
        body.append(link(item.title, item.url) || document.createTextNode(item.title), document.createTextNode(item.text || ""));
      } else {
        body.append(document.createTextNode(item.text || ""));
        const resource = link(item.linkLabel || "Read more", item.url);
        if (resource) body.append(document.createTextNode(" "), resource);
      }
      li.append(body); return li;
    }));
    $("news-empty").hidden = news.length > 0;
    $("news-toggle").hidden = news.length <= 4;
    $("news-toggle").setAttribute("aria-expanded", String(expanded));
    $("news-toggle").textContent = expanded ? "Show less ↑" : "Show all ↓";
  };
  $("news-toggle").addEventListener("click", () => { expanded = !expanded; renderNews(); });
  renderNews();

  const papers = Array.isArray(data.publications) ? data.publications : [];
  $("publications-empty").hidden = papers.length > 0;
  $("publication-list").replaceChildren(...papers.map(paper => {
    const article = element("article", "publication");
    const heading = element("h3");
    heading.append(link(paper.title || "Untitled", paper.url) || document.createTextNode(paper.title || "Untitled"));
    article.append(heading);
    const authors = element("p", "publication-authors");
    const list = Array.isArray(paper.authors) ? paper.authors : [paper.authors || ""];
    list.forEach((author, i) => {
      if (i) authors.append(document.createTextNode(", "));
      authors.append(String(author).includes(data.name) ? element("strong", "", author) : document.createTextNode(String(author)));
    });
    const venue = element("p", "publication-venue");
    venue.append(element("em", "", paper.venue || ""));
    if (paper.venueShort) venue.append(document.createTextNode(" ("), element("strong", "", paper.venueShort), document.createTextNode(")."));
    else if (paper.year) venue.append(document.createTextNode(` · ${paper.year}`));
    article.append(authors, venue);
    const resources = element("div", "publication-resources");
    (paper.resources || []).forEach(resource => { const a = link(resource.label, resource.url, true); if (a) resources.append(a); });
    if (resources.children.length) article.append(resources);
    return article;
  }));
  [
    ["experience", "experience-list", "experience-empty"],
    ["services", "service-list", "services-empty"]
  ].forEach(([key, target, empty]) => {
    const items = Array.isArray(data[key]) ? data[key] : [];
    $(empty).hidden = items.length > 0;
    $(target).replaceChildren(...items.map(item => {
      const li = element("li");
      if (typeof item === "string") { li.textContent = item; return li; }
      if (item.date) li.append(element("span", "detail-date", item.date));
      if (Array.isArray(item.parts)) appendParts(li, item.parts);
      else {
        li.append(link(item.text || "", item.url) || document.createTextNode(item.text || ""));
        if (item.detail) li.append(document.createTextNode(` — ${item.detail}`));
      }
      return li;
    }));
  });

  const menu = document.querySelector(".menu-toggle");
  const nav = $("site-nav");
  const closeMenu = () => { nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); };
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open"); menu.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) { closeMenu(); menu.focus(); }
  });
  const navLinks = [...nav.querySelectorAll("a")];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  let scheduled = false;
  const updateActive = () => {
    let current = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= 160) current = section;
    if (window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = sections.at(-1);
    navLinks.forEach(a => {
      const active = a.getAttribute("href") === `#${current.id}`;
      a.classList.toggle("is-active", active);
      if (active) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
    });
    scheduled = false;
  };
  window.addEventListener("scroll", () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateActive); } }, { passive: true });
  window.addEventListener("resize", () => { if (window.innerWidth > 820) closeMenu(); updateActive(); });
  $("copyright-year").textContent = new Date().getFullYear();
  updateActive();
})();
