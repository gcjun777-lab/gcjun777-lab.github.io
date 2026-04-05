const STORAGE_CFG = "cfg_v8";
const STORAGE_POSTS = "posts_v8";
const STORAGE_WORKS = "works_v8";
const STORAGE_THEME = "theme_v8";
const STORAGE_LANG = "lang_v8";
const STORAGE_ADMIN = "admin_session_v1";
const ADMIN_PASSWORD_SHA256 = "8d1351a6affc3da660df58f54220518f13cdb2c58922adab039b1b99664a506e";

const defaults = {
  brand: "YOUR NAME",
  homeKicker: "PERSONAL WEBSITE",
  avatar: "https://picsum.photos/200",
  heroTitle: "作品集 · 博客",
  heroSubtitle: "极简、干净、可扩展。用于展示你的项目、文章和联系方式。",
  heroMeta: "前端开发者 / 创作者 / 上海",
  portfolioSubtitle: "精选项目展示区。",
  blogTitle: "博客",
  blogSubtitle: "支持搜索、标签筛选与 Markdown 阅读。",
  aboutRole: "前端工程师 · 产品设计爱好者",
  aboutName: "你的名字",
  aboutSummary: "专注 Web 前端、交互体验和创意实现，擅长将想法快速落地成可用产品。",
  aboutSkills: "JavaScript, TypeScript, React, Node.js, Motion",
  exp1Title: "前端工程师 @ 某科技公司",
  exp1Time: "2023 - 至今",
  exp1Desc: "负责核心业务系统重构，性能优化 40%+，搭建组件体系和可视化页面编辑方案。",
  exp2Title: "自由创作者",
  exp2Time: "2021 - 2023",
  exp2Desc: "完成多个品牌网站与交互动效项目，聚焦叙事型体验设计。",
  eduInfo: "某大学 · 计算机相关专业",
  focusInfo: "前端架构 / 设计系统 / 动效体验 / 内容型产品",
  email: "you@example.com",
  biliUrl: "https://www.bilibili.com/",
  biliName: "@yourid",
  githubUrl: "https://github.com/",
  githubName: "@yourid",
  contacts: [
    { id: "c1", title: "Email", value: "you@example.com", url: "mailto:you@example.com" },
    { id: "c2", title: "Bilibili", value: "@yourid", url: "https://www.bilibili.com/" },
    { id: "c3", title: "GitHub", value: "@yourid", url: "https://github.com/" },
  ],
  footerLeft: "© 2026 YOUR NAME",
  footerRight: "Design & Code by You",
};

const defaultPosts = [
  {
    id: "p1",
    title: "Weekly Report | 25/12/01~25/12/07",
    excerpt: "本周学习与创作记录，包括前端优化和设计迭代。",
    tags: ["weekly", "notes"],
    date: "2025-12-09",
    cover: "",
    markdown:
      "# Weekly Report\n\n这是一篇周报示例。\n\n- 完成博客页面重构\n- 优化文章卡片交互\n\n![示例图片](https://picsum.photos/900/420)",
  },
];

const defaultWorks = [
  {
    id: "w1",
    title: "Portfolio System",
    excerpt: "可视化编辑的个人站点系统。",
    tags: ["web", "design"],
    date: "2026-01-12",
    cover: "https://picsum.photos/900/500?random=31",
    markdown:
      "# Portfolio System\n\n一个支持多页面编辑、博客写作和作品展示的个人网站模板。\n\n- 当前页直接编辑\n- 文章 Markdown 支持\n- 统一暗色视觉风格",
  },
  {
    id: "w2",
    title: "Motion Landing",
    excerpt: "叙事型动效着陆页。",
    tags: ["motion", "landing"],
    date: "2025-11-02",
    cover: "https://picsum.photos/900/500?random=28",
    markdown: "# Motion Landing\n\n以滚动节奏构建品牌故事，强调视觉冲击与转化效率。",
  },
  {
    id: "w3",
    title: "Data Dashboard",
    excerpt: "企业数据看板与组件体系。",
    tags: ["dashboard", "react"],
    date: "2025-09-18",
    cover: "https://picsum.photos/900/500?random=23",
    markdown: "# Data Dashboard\n\n支持多角色权限和实时指标查询的仪表盘系统。",
  },
];

const editableMap = {
  dashboard: ["brandName", "homeKicker", "heroTitle", "heroSubtitle", "heroMeta", "footerLeft", "footerRight"],
  portfolio: ["portfolioSubtitle", "footerLeft", "footerRight"],
  articles: ["blogTitle", "blogSubtitle", "footerLeft", "footerRight"],
  about: [
    "aboutRole",
    "aboutName",
    "aboutSummary",
    "aboutSkills",
    "exp1Title",
    "exp1Time",
    "exp1Desc",
    "exp2Title",
    "exp2Time",
    "exp2Desc",
    "eduInfo",
    "focusInfo",
    "footerLeft",
    "footerRight",
  ],
  contact: ["footerLeft", "footerRight"],
};

const $ = (id) => document.getElementById(id);
const tabBtns = [...document.querySelectorAll(".tab")];
const views = [...document.querySelectorAll(".view")];
const sideProgressTitle = $("sideProgressTitle");
const sideProgressList = $("sideProgressList");

const tabLabelMap = {
  dashboard: "首页",
  portfolio: "作品",
  articles: "博客",
  about: "关于",
  contact: "联系",
};

const sideSectionMap = {
  dashboard: [
    { id: "dash-feed", label: "动态" },
    { id: "dash-works", label: "最新作品" },
    { id: "dash-posts", label: "最新文章" },
  ],
  portfolio: [
    { id: "workList", label: "作品列表" },
    { id: "workDetail", label: "作品详情" },
  ],
  articles: [
    { id: "blogList", label: "文章列表" },
    { id: "blogDetail", label: "文章详情" },
  ],
  about: [
    { id: "about-profile", label: "个人简介" },
    { id: "about-exp", label: "经历" },
    { id: "about-edu", label: "教育技能" },
  ],
  contact: [
    { id: "contact-toolbar", label: "操作栏" },
    { id: "contactList", label: "联系方式" },
  ],
};

let cfg = load(STORAGE_CFG, defaults);
let posts = load(STORAGE_POSTS, defaultPosts);
let works = load(STORAGE_WORKS, defaultWorks);

let currentTab = "dashboard";
let currentPostId = null;
let currentWorkId = null;
let pageEditing = false;
let isAdmin = false;

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return JSON.parse(JSON.stringify(fallback));
    const parsed = JSON.parse(raw);
    if (Array.isArray(fallback)) return parsed;
    return { ...fallback, ...parsed };
  } catch {
    return JSON.parse(JSON.stringify(fallback));
  }
}

function saveCfg() {
  localStorage.setItem(STORAGE_CFG, JSON.stringify(cfg));
}

function savePosts() {
  localStorage.setItem(STORAGE_POSTS, JSON.stringify(posts));
}

function saveWorks() {
  localStorage.setItem(STORAGE_WORKS, JSON.stringify(works));
}

async function sha256(text) {
  const data = new TextEncoder().encode(String(text || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function applyAdminVisibility() {
  const ids = ["togglePageEdit", "openPostModal", "newPostQuick", "newWorkBtn"];
  ids.forEach((id) => $(id)?.classList.toggle("hidden", !isAdmin));
  $("adminToggle").textContent = isAdmin ? "退出管理" : "管理解锁";
  if (!isAdmin && pageEditing) {
    closePageEditor();
  }
  renderContacts();
}

async function toggleAdminMode() {
  if (isAdmin) {
    isAdmin = false;
    sessionStorage.removeItem(STORAGE_ADMIN);
    applyAdminVisibility();
    return;
  }
  const pwd = prompt("请输入管理员密码");
  if (!pwd) return;
  const hashed = await sha256(pwd);
  if (hashed !== ADMIN_PASSWORD_SHA256) {
    alert("密码错误");
    return;
  }
  isAdmin = true;
  sessionStorage.setItem(STORAGE_ADMIN, "1");
  applyAdminVisibility();
}

function normalizeContactUrl(url, value) {
  const trimmedUrl = String(url || "").trim();
  const trimmedValue = String(value || "").trim();
  if (trimmedUrl) return trimmedUrl;
  if (trimmedValue.includes("@") && !trimmedValue.startsWith("http")) return `mailto:${trimmedValue}`;
  return "https://";
}

function ensureContacts() {
  if (Array.isArray(cfg.contacts) && cfg.contacts.length) return;
  cfg.contacts = [
    { id: "c1", title: "Email", value: cfg.email || "you@example.com", url: `mailto:${cfg.email || "you@example.com"}` },
    { id: "c2", title: "Bilibili", value: cfg.biliName || "@yourid", url: cfg.biliUrl || "https://www.bilibili.com/" },
    { id: "c3", title: "GitHub", value: cfg.githubName || "@yourid", url: cfg.githubUrl || "https://github.com/" },
  ];
}

function applyCfg() {
  $("brandName").textContent = cfg.brand;
  $("homeKicker").textContent = cfg.homeKicker;
  $("homeAvatar").src = cfg.avatar;
  $("heroTitle").textContent = cfg.heroTitle;
  $("heroSubtitle").textContent = cfg.heroSubtitle;
  $("heroMeta").textContent = cfg.heroMeta;
  $("portfolioSubtitle").textContent = cfg.portfolioSubtitle;
  $("blogTitle").textContent = cfg.blogTitle;
  $("blogSubtitle").textContent = cfg.blogSubtitle;

  $("aboutRole").textContent = cfg.aboutRole;
  $("aboutName").textContent = cfg.aboutName;
  $("aboutSummary").textContent = cfg.aboutSummary;
  $("aboutSkills").textContent = cfg.aboutSkills;
  $("exp1Title").textContent = cfg.exp1Title;
  $("exp1Time").textContent = cfg.exp1Time;
  $("exp1Desc").textContent = cfg.exp1Desc;
  $("exp2Title").textContent = cfg.exp2Title;
  $("exp2Time").textContent = cfg.exp2Time;
  $("exp2Desc").textContent = cfg.exp2Desc;
  $("eduInfo").textContent = cfg.eduInfo;
  $("focusInfo").textContent = cfg.focusInfo;

  renderContacts();
  $("footerLeft").textContent = cfg.footerLeft;
  $("footerRight").textContent = cfg.footerRight;
}

function setEditable(ids, enable) {
  ids.forEach((id) => {
    const el = $(id);
    if (!el) return;
    el.contentEditable = enable ? "true" : "false";
    el.classList.toggle("editable-live", enable);
  });
}

function updateEditHints(enable) {
  $("pageEditActions").classList.toggle("hidden", !enable);
  $("avatarUploadLabel").classList.toggle("hidden", !(enable && currentTab === "dashboard"));
}

function closePageEditor() {
  pageEditing = false;
  Object.values(editableMap).forEach((ids) => setEditable(ids, false));
  updateEditHints(false);
}

function openPageEditor() {
  if (!isAdmin) {
    alert("请先点击“管理解锁”");
    return;
  }
  if (pageEditing) {
    applyCfg();
    closePageEditor();
    return;
  }
  pageEditing = true;
  setEditable(editableMap[currentTab] || [], true);
  updateEditHints(true);
}

function saveCurrentPageEdit() {
  if (!isAdmin) return;
  if (!pageEditing) return;

  if (currentTab === "dashboard") {
    cfg.brand = $("brandName").textContent.trim() || cfg.brand;
    cfg.homeKicker = $("homeKicker").textContent.trim() || cfg.homeKicker;
    cfg.heroTitle = $("heroTitle").textContent.trim() || cfg.heroTitle;
    cfg.heroSubtitle = $("heroSubtitle").textContent.trim() || cfg.heroSubtitle;
    cfg.heroMeta = $("heroMeta").textContent.trim() || cfg.heroMeta;
  }
  if (currentTab === "portfolio") {
    cfg.portfolioSubtitle = $("portfolioSubtitle").textContent.trim() || cfg.portfolioSubtitle;
  }
  if (currentTab === "articles") {
    cfg.blogTitle = $("blogTitle").textContent.trim() || cfg.blogTitle;
    cfg.blogSubtitle = $("blogSubtitle").textContent.trim() || cfg.blogSubtitle;
  }
  if (currentTab === "about") {
    cfg.aboutRole = $("aboutRole").textContent.trim() || cfg.aboutRole;
    cfg.aboutName = $("aboutName").textContent.trim() || cfg.aboutName;
    cfg.aboutSummary = $("aboutSummary").textContent.trim() || cfg.aboutSummary;
    cfg.aboutSkills = $("aboutSkills").textContent.trim() || cfg.aboutSkills;
    cfg.exp1Title = $("exp1Title").textContent.trim() || cfg.exp1Title;
    cfg.exp1Time = $("exp1Time").textContent.trim() || cfg.exp1Time;
    cfg.exp1Desc = $("exp1Desc").textContent.trim() || cfg.exp1Desc;
    cfg.exp2Title = $("exp2Title").textContent.trim() || cfg.exp2Title;
    cfg.exp2Time = $("exp2Time").textContent.trim() || cfg.exp2Time;
    cfg.exp2Desc = $("exp2Desc").textContent.trim() || cfg.exp2Desc;
    cfg.eduInfo = $("eduInfo").textContent.trim() || cfg.eduInfo;
    cfg.focusInfo = $("focusInfo").textContent.trim() || cfg.focusInfo;
  }
  cfg.footerLeft = $("footerLeft").textContent.trim() || cfg.footerLeft;
  cfg.footerRight = $("footerRight").textContent.trim() || cfg.footerRight;

  saveCfg();
  applyCfg();
  closePageEditor();
}

function markSideProgressActive(anchorId) {
  [...sideProgressList.querySelectorAll(".progress-item")].forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.anchor === anchorId);
  });
}

function renderSideProgress(tab) {
  const sections = sideSectionMap[tab] || [];
  sideProgressTitle.textContent = "";
  sideProgressList.innerHTML = sections
    .map((s, i) => `<button class="progress-item ${i === 0 ? "is-active" : ""}" data-anchor="${s.id}" type="button">${s.label}</button>`)
    .join("");

  [...sideProgressList.querySelectorAll(".progress-item")].forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = $(btn.dataset.anchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      markSideProgressActive(btn.dataset.anchor);
    });
  });
}

function syncSideProgress() {
  if (currentTab === "articles") {
    if (!$("blogDetail").classList.contains("hidden")) {
      markSideProgressActive("blogDetail");
      return;
    }
    markSideProgressActive("blogList");
    return;
  }
  if (currentTab === "portfolio") {
    if (!$("workDetail").classList.contains("hidden")) {
      markSideProgressActive("workDetail");
      return;
    }
    markSideProgressActive("workList");
    return;
  }

  const sections = sideSectionMap[currentTab] || [];
  if (!sections.length) return;
  let nearest = sections[0].id;
  let min = Number.POSITIVE_INFINITY;
  sections.forEach((s) => {
    const el = $(s.id);
    if (!el) return;
    const delta = Math.abs(el.getBoundingClientRect().top - 130);
    if (delta < min) {
      min = delta;
      nearest = s.id;
    }
  });
  markSideProgressActive(nearest);
}

function animateCurrentView() {
  const view = $(`view-${currentTab}`);
  if (!view) return;
  const selector = [
    ".home-intro",
    ".home-block",
    ".view-title",
    ".view-sub",
    ".blog-toolbar",
    "#blogList > .card",
    "#workList > .card",
    ".blog-detail",
    ".resume-card",
    ".contact-card",
    ".timeline-item",
    ".detail-nav",
    ".inline-edit",
  ].join(",");
  const targets = [...new Set([...view.querySelectorAll(selector)])].filter(
    (el) => !el.classList.contains("hidden") && el.offsetParent !== null
  );
  targets.forEach((el, i) => {
    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = `fadeUp 420ms ease ${i * 50}ms both`;
  });
}

function switchTab(tab) {
  currentTab = tab;
  tabBtns.forEach((btn) => btn.classList.toggle("is-active", btn.dataset.tab === tab));
  views.forEach((view) => view.classList.toggle("is-show", view.id === `view-${tab}`));
  renderSideProgress(tab);

  if (tab !== "articles") {
    $("blogList").classList.remove("hidden");
    $("blogDetail").classList.add("hidden");
    $("articles-toolbar").classList.remove("hidden");
  }
  if (tab !== "portfolio") {
    $("workList").classList.remove("hidden");
    $("workDetail").classList.add("hidden");
    $("portfolio-toolbar").classList.remove("hidden");
  }

  if (pageEditing) {
    Object.values(editableMap).forEach((ids) => setEditable(ids, false));
    setEditable(editableMap[currentTab] || [], true);
    updateEditHints(true);
  }

  animateCurrentView();
  syncSideProgress();
}

function firstImage(md) {
  const m = /!\[[^\]]*]\(([^)]+)\)/.exec(md || "");
  return m ? m[1] : "";
}

function readMinutes(md) {
  return Math.max(1, Math.round((md || "").length / 350));
}

function renderMarkdown(md) {
  let html = String(md || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />');
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  const lines = html.split("\n");
  let inList = false;
  const out = [];
  for (const line of lines) {
    if (line.startsWith("- ")) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${line.slice(2)}</li>`);
    } else {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push(line);
    }
  }
  if (inList) out.push("</ul>");

  return out
    .join("\n")
    .split(/\n{2,}/)
    .map((block) => (/<h\d|<ul>|<img/.test(block) ? block : `<p>${block.replace(/\n/g, "<br/>")}</p>`))
    .join("");
}

function getFilteredPosts() {
  const q = $("blogSearch").value.trim().toLowerCase();
  const tag = $("blogTagFilter").value;
  return posts.filter((post) => {
    const hay = `${post.title} ${post.excerpt} ${post.markdown}`.toLowerCase();
    return hay.includes(q) && (tag === "all" || (post.tags || []).includes(tag));
  });
}

function getFilteredWorks() {
  const q = $("workSearch").value.trim().toLowerCase();
  const tag = $("workTagFilter").value;
  return works.filter((work) => {
    const hay = `${work.title} ${work.excerpt} ${work.markdown}`.toLowerCase();
    return hay.includes(q) && (tag === "all" || (work.tags || []).includes(tag));
  });
}

function renderTagFilter(selectId, list) {
  const el = $(selectId);
  const prev = el.value || "all";
  const tags = new Set();
  list.forEach((item) => (item.tags || []).forEach((tag) => tags.add(tag)));

  el.innerHTML = '<option value="all">全部标签</option>';
  [...tags].sort().forEach((tag) => {
    const opt = document.createElement("option");
    opt.value = tag;
    opt.textContent = tag;
    el.appendChild(opt);
  });

  el.value = ["all", ...tags].includes(prev) ? prev : "all";
}

function renderPosts() {
  const list = getFilteredPosts();
  $("blogList").innerHTML = list
    .map((post) => {
      const cover = post.cover || firstImage(post.markdown);
      return `<article class="card post-card" data-id="${post.id}">
        ${cover ? `<img class="detail-cover" src="${cover}" alt="cover" />` : ""}
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <p class="post-meta">${post.date} · ${readMinutes(post.markdown)} 分钟阅读</p>
        <div class="post-tags">${(post.tags || []).map((t) => `<span class="post-tag">${t}</span>`).join("")}</div>
      </article>`;
    })
    .join("");

  [...document.querySelectorAll(".post-card")].forEach((el) => {
    el.addEventListener("click", () => openPostDetail(el.dataset.id));
  });
  if (currentTab === "articles") animateCurrentView();
}

function renderWorks() {
  const list = getFilteredWorks();
  $("workList").innerHTML = list
    .map((work) => {
      const cover = work.cover || firstImage(work.markdown);
      return `<article class="card post-card" data-work-id="${work.id}">
        ${cover ? `<img class="detail-cover" src="${cover}" alt="work cover" />` : ""}
        <h3>${work.title}</h3>
        <p>${work.excerpt}</p>
        <p class="post-meta">${work.date}</p>
        <div class="post-tags">${(work.tags || []).map((t) => `<span class="post-tag">${t}</span>`).join("")}</div>
      </article>`;
    })
    .join("");

  [...document.querySelectorAll("[data-work-id]")].forEach((el) => {
    el.addEventListener("click", () => openWorkDetail(el.dataset.workId));
  });
  if (currentTab === "portfolio") animateCurrentView();
}

function renderHomeSections() {
  $("latestPosts").innerHTML = posts
    .slice(0, 2)
    .map((post) => `<article class="card post-card" data-id="${post.id}"><h3>${post.title}</h3><p>${post.excerpt}</p></article>`)
    .join("");

  $("latestWorks").innerHTML = works
    .slice(0, 2)
    .map((work) => `<article class="card post-card" data-home-work-id="${work.id}"><h3>${work.title}</h3><p>${work.excerpt}</p></article>`)
    .join("");

  const feed = [
    ...posts.slice(0, 3).map((p) => ({ type: "文章", title: p.title, date: p.date, id: p.id })),
    ...works.slice(0, 3).map((w) => ({ type: "作品", title: w.title, date: w.date, id: w.id })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  $("homeTimeline").innerHTML = feed
    .slice(0, 5)
    .map((item) => `<button class="timeline-item" data-kind="${item.type}" data-target-id="${item.id}"><span>${item.type}</span><strong>${item.title}</strong><em>${item.date}</em></button>`)
    .join("");

  [...document.querySelectorAll("#latestPosts .post-card")].forEach((el) => {
    el.addEventListener("click", () => {
      switchTab("articles");
      openPostDetail(el.dataset.id);
    });
  });
  [...document.querySelectorAll("[data-home-work-id]")].forEach((el) => {
    el.addEventListener("click", () => {
      switchTab("portfolio");
      openWorkDetail(el.dataset.homeWorkId);
    });
  });
  [...document.querySelectorAll(".timeline-item")].forEach((el) => {
    el.addEventListener("click", () => {
      const kind = el.dataset.kind;
      if (kind === "文章") {
        switchTab("articles");
        openPostDetail(el.dataset.targetId);
      } else {
        switchTab("portfolio");
        openWorkDetail(el.dataset.targetId);
      }
    });
  });
  if (currentTab === "dashboard") animateCurrentView();
}

function renderContacts() {
  const list = Array.isArray(cfg.contacts) ? cfg.contacts : [];
  const manageHidden = isAdmin ? "" : "hidden";
  $("contactList").innerHTML = list
    .map(
      (item) => `<article class="contact-card contact-dynamic" data-contact-id="${item.id}">
        <h3>${item.title}</h3>
        <p>${item.value}</p>
        <div class="contact-actions">
          <button class="mini-btn" data-contact-action="open" type="button">打开</button>
          <button class="mini-btn ${manageHidden}" data-contact-action="edit" type="button">编辑</button>
          <button class="mini-btn ${manageHidden}" data-contact-action="delete" type="button">删除</button>
        </div>
      </article>`
    )
    .join("");
  $("newContactBtn").classList.toggle("hidden", !isAdmin);
  if (currentTab === "contact") animateCurrentView();
}

function openPostDetail(id) {
  const post = posts.find((x) => x.id === id);
  if (!post) return;

  currentPostId = id;
  $("blogList").classList.add("hidden");
  $("blogDetail").classList.remove("hidden");
  $("articles-toolbar").classList.add("hidden");
  $("inlineEditor").classList.add("hidden");

  $("detailTitle").textContent = post.title;
  $("detailMeta").textContent = `${post.date} · ${readMinutes(post.markdown)} 分钟阅读`;
  $("detailTags").innerHTML = (post.tags || []).map((t) => `<span class="post-tag">${t}</span>`).join("");

  const cover = post.cover || firstImage(post.markdown);
  if (cover) {
    $("detailCover").src = cover;
    $("detailCover").classList.remove("hidden");
  } else {
    $("detailCover").classList.add("hidden");
  }

  $("detailContent").classList.remove("hidden");
  $("detailTags").classList.remove("hidden");
  $("detailContent").innerHTML = renderMarkdown(post.markdown);
  animateCurrentView();
  syncSideProgress();
}

function openWorkDetail(id) {
  const work = works.find((x) => x.id === id);
  if (!work) return;

  currentWorkId = id;
  $("workList").classList.add("hidden");
  $("workDetail").classList.remove("hidden");
  $("portfolio-toolbar").classList.add("hidden");
  $("workInlineEditor").classList.add("hidden");

  $("workDetailTitle").textContent = work.title;
  $("workDetailMeta").textContent = `${work.date}`;
  $("workDetailTags").innerHTML = (work.tags || []).map((t) => `<span class="post-tag">${t}</span>`).join("");

  const cover = work.cover || firstImage(work.markdown);
  if (cover) {
    $("workDetailCover").src = cover;
    $("workDetailCover").classList.remove("hidden");
  } else {
    $("workDetailCover").classList.add("hidden");
  }

  $("workDetailContent").classList.remove("hidden");
  $("workDetailTags").classList.remove("hidden");
  $("workDetailContent").innerHTML = renderMarkdown(work.markdown);
  animateCurrentView();
  syncSideProgress();
}

function insertImageAtCursor(textarea, dataUrl, previewEl) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = `\n![image](${dataUrl})\n`;
  textarea.value = textarea.value.slice(0, start) + text + textarea.value.slice(end);
  previewEl.innerHTML = renderMarkdown(textarea.value);
}

function openInlinePostEditor(isNew = false) {
  const post = isNew
    ? { title: "", excerpt: "", tags: [], markdown: "", cover: "" }
    : posts.find((x) => x.id === currentPostId);

  if (!post) return;
  $("inlineEditorTitle").textContent = isNew ? "新建文章（当前页）" : "编辑文章（当前页）";
  $("inlinePostTitle").value = post.title;
  $("inlinePostExcerpt").value = post.excerpt;
  $("inlinePostTags").value = (post.tags || []).join(", ");
  $("inlinePostMarkdown").value = post.markdown;
  $("inlineMarkdownPreview").innerHTML = renderMarkdown(post.markdown);

  $("inlineCoverPreview").dataset.value = post.cover || "";
  if (post.cover) {
    $("inlineCoverPreview").src = post.cover;
    $("inlineCoverPreviewWrap").classList.remove("hidden");
  } else {
    $("inlineCoverPreviewWrap").classList.add("hidden");
  }

  $("inlineDeleteBtn").classList.toggle("hidden", isNew);
  $("inlineSaveBtn").dataset.mode = isNew ? "create" : "edit";

  $("detailContent").classList.add("hidden");
  $("detailCover").classList.add("hidden");
  $("detailTags").classList.add("hidden");
  $("inlineEditor").classList.remove("hidden");
}

function openInlineWorkEditor(isNew = false) {
  const work = isNew
    ? { title: "", excerpt: "", tags: [], markdown: "", cover: "" }
    : works.find((x) => x.id === currentWorkId);

  if (!work) return;
  $("workInlineEditorTitle").textContent = isNew ? "新建作品（当前页）" : "编辑作品（当前页）";
  $("workInlineTitle").value = work.title;
  $("workInlineExcerpt").value = work.excerpt;
  $("workInlineTags").value = (work.tags || []).join(", ");
  $("workInlineMarkdown").value = work.markdown;
  $("workInlineMarkdownPreview").innerHTML = renderMarkdown(work.markdown);

  $("workInlineCoverPreview").dataset.value = work.cover || "";
  if (work.cover) {
    $("workInlineCoverPreview").src = work.cover;
    $("workInlineCoverPreviewWrap").classList.remove("hidden");
  } else {
    $("workInlineCoverPreviewWrap").classList.add("hidden");
  }

  $("workInlineDeleteBtn").classList.toggle("hidden", isNew);
  $("workInlineSaveBtn").dataset.mode = isNew ? "create" : "edit";

  $("workDetailContent").classList.add("hidden");
  $("workDetailCover").classList.add("hidden");
  $("workDetailTags").classList.add("hidden");
  $("workInlineEditor").classList.remove("hidden");
}

function saveInlinePostEditor() {
  const title = $("inlinePostTitle").value.trim();
  const markdown = $("inlinePostMarkdown").value.trim();
  if (!title || !markdown) {
    alert("标题和正文不能为空");
    return;
  }

  const payload = {
    title,
    excerpt: $("inlinePostExcerpt").value.trim() || markdown.slice(0, 70),
    tags: $("inlinePostTags").value.split(",").map((s) => s.trim()).filter(Boolean),
    markdown,
    cover: $("inlineCoverPreview").dataset.value || "",
  };

  const isCreate = $("inlineSaveBtn").dataset.mode === "create";
  if (isCreate) {
    const newPost = { id: `p${Date.now()}`, date: new Date().toISOString().slice(0, 10), ...payload };
    posts.unshift(newPost);
    currentPostId = newPost.id;
  } else {
    const idx = posts.findIndex((x) => x.id === currentPostId);
    if (idx < 0) return;
    posts[idx] = { ...posts[idx], ...payload };
  }

  savePosts();
  renderTagFilter("blogTagFilter", posts);
  renderPosts();
  renderHomeSections();
  openPostDetail(currentPostId);
}

function saveInlineWorkEditor() {
  const title = $("workInlineTitle").value.trim();
  const markdown = $("workInlineMarkdown").value.trim();
  if (!title || !markdown) {
    alert("标题和正文不能为空");
    return;
  }

  const payload = {
    title,
    excerpt: $("workInlineExcerpt").value.trim() || markdown.slice(0, 70),
    tags: $("workInlineTags").value.split(",").map((s) => s.trim()).filter(Boolean),
    markdown,
    cover: $("workInlineCoverPreview").dataset.value || "",
  };

  const isCreate = $("workInlineSaveBtn").dataset.mode === "create";
  if (isCreate) {
    const newWork = { id: `w${Date.now()}`, date: new Date().toISOString().slice(0, 10), ...payload };
    works.unshift(newWork);
    currentWorkId = newWork.id;
  } else {
    const idx = works.findIndex((x) => x.id === currentWorkId);
    if (idx < 0) return;
    works[idx] = { ...works[idx], ...payload };
  }

  saveWorks();
  renderTagFilter("workTagFilter", works);
  renderWorks();
  renderHomeSections();
  openWorkDetail(currentWorkId);
}

function deleteCurrentPost() {
  if (!currentPostId) return;
  if (!confirm("确认删除这篇文章？")) return;
  posts = posts.filter((x) => x.id !== currentPostId);
  savePosts();
  renderTagFilter("blogTagFilter", posts);
  renderPosts();
  renderHomeSections();
  currentPostId = null;
  $("blogDetail").classList.add("hidden");
  $("blogList").classList.remove("hidden");
  $("articles-toolbar").classList.remove("hidden");
  syncSideProgress();
}

function deleteCurrentWork() {
  if (!currentWorkId) return;
  if (!confirm("确认删除这个作品？")) return;
  works = works.filter((x) => x.id !== currentWorkId);
  saveWorks();
  renderTagFilter("workTagFilter", works);
  renderWorks();
  renderHomeSections();
  currentWorkId = null;
  $("workDetail").classList.add("hidden");
  $("workList").classList.remove("hidden");
  $("portfolio-toolbar").classList.remove("hidden");
  syncSideProgress();
}

function bind() {
  tabBtns.forEach((btn) => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));
  $("adminToggle").addEventListener("click", () => {
    toggleAdminMode();
  });

  $("themeToggle").addEventListener("click", () => {
    const dark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !dark);
    localStorage.setItem(STORAGE_THEME, !dark ? "dark" : "light");
  });

  $("langToggle").addEventListener("click", () => {
    const cur = localStorage.getItem(STORAGE_LANG) || "zh";
    const next = cur === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE_LANG, next);
    $("langToggle").textContent = next === "zh" ? "中 / EN" : "EN / 中";
  });

  $("togglePageEdit").addEventListener("click", openPageEditor);
  $("savePageEdit").addEventListener("click", saveCurrentPageEdit);
  $("cancelPageEdit").addEventListener("click", () => {
    applyCfg();
    closePageEditor();
  });

  $("avatarFileInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      cfg.avatar = fr.result;
      $("homeAvatar").src = cfg.avatar;
    };
    fr.readAsDataURL(file);
  });

  $("newContactBtn").addEventListener("click", () => {
    if (!isAdmin) return;
    const title = (prompt("联系渠道名称（例如：小红书）", "新渠道") || "").trim();
    if (!title) return;
    const value = (prompt("显示内容（例如：@yourid 或 邮箱）", "") || "").trim();
    if (!value) return;
    const url = normalizeContactUrl(prompt("链接地址（可留空自动识别）", ""), value);
    cfg.contacts.unshift({ id: `c${Date.now()}`, title, value, url });
    saveCfg();
    renderContacts();
  });

  $("contactList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-contact-action]");
    if (!btn) return;
    const card = e.target.closest("[data-contact-id]");
    if (!card) return;
    const id = card.dataset.contactId;
    const idx = (cfg.contacts || []).findIndex((x) => x.id === id);
    if (idx < 0) return;

    const action = btn.dataset.contactAction;
    if (action === "open") {
      const url = cfg.contacts[idx].url || "";
      if (url) window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    if (!isAdmin) return;
    if (action === "edit") {
      const cur = cfg.contacts[idx];
      const title = (prompt("联系渠道名称", cur.title) || "").trim();
      if (!title) return;
      const value = (prompt("显示内容", cur.value) || "").trim();
      if (!value) return;
      const url = normalizeContactUrl(prompt("链接地址", cur.url), value);
      cfg.contacts[idx] = { ...cur, title, value, url };
      saveCfg();
      renderContacts();
      return;
    }
    if (action === "delete") {
      if (!confirm("确认删除这个联系方式？")) return;
      cfg.contacts.splice(idx, 1);
      saveCfg();
      renderContacts();
    }
  });

  $("blogSearch").addEventListener("input", renderPosts);
  $("blogTagFilter").addEventListener("change", renderPosts);
  $("workSearch").addEventListener("input", renderWorks);
  $("workTagFilter").addEventListener("change", renderWorks);

  $("backToList").addEventListener("click", () => {
    $("blogDetail").classList.add("hidden");
    $("blogList").classList.remove("hidden");
    $("articles-toolbar").classList.remove("hidden");
    syncSideProgress();
  });
  $("backToWorks").addEventListener("click", () => {
    $("workDetail").classList.add("hidden");
    $("workList").classList.remove("hidden");
    $("portfolio-toolbar").classList.remove("hidden");
    syncSideProgress();
  });

  $("editCurrentPost").addEventListener("click", () => openInlinePostEditor(false));
  $("newPostQuick").addEventListener("click", () => {
    switchTab("articles");
    $("articles-toolbar").classList.add("hidden");
    $("blogList").classList.add("hidden");
    $("blogDetail").classList.remove("hidden");
    $("detailTitle").textContent = "新文章";
    $("detailMeta").textContent = "未发布";
    $("detailTags").innerHTML = "";
    $("detailCover").classList.add("hidden");
    openInlinePostEditor(true);
  });
  $("openPostModal").addEventListener("click", () => $("newPostQuick").click());

  $("inlinePostMarkdown").addEventListener("input", () => {
    $("inlineMarkdownPreview").innerHTML = renderMarkdown($("inlinePostMarkdown").value);
  });
  $("inlinePostCoverInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      $("inlineCoverPreview").src = fr.result;
      $("inlineCoverPreview").dataset.value = fr.result;
      $("inlineCoverPreviewWrap").classList.remove("hidden");
    };
    fr.readAsDataURL(file);
  });
  $("inlineInsertImageBtn").addEventListener("click", () => $("inlineEditorImageInput").click());
  $("inlineEditorImageInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => insertImageAtCursor($("inlinePostMarkdown"), fr.result, $("inlineMarkdownPreview"));
    fr.readAsDataURL(file);
  });

  $("inlineCancelBtn").addEventListener("click", () => {
    $("inlineEditor").classList.add("hidden");
    $("detailContent").classList.remove("hidden");
    $("detailTags").classList.remove("hidden");
    if ($("detailCover").src) $("detailCover").classList.remove("hidden");
    syncSideProgress();
  });

  $("inlineSaveBtn").addEventListener("click", saveInlinePostEditor);
  $("inlineDeleteBtn").addEventListener("click", deleteCurrentPost);

  $("editCurrentWork").addEventListener("click", () => openInlineWorkEditor(false));
  $("newWorkBtn").addEventListener("click", () => {
    switchTab("portfolio");
    $("portfolio-toolbar").classList.add("hidden");
    $("workList").classList.add("hidden");
    $("workDetail").classList.remove("hidden");
    $("workDetailTitle").textContent = "新作品";
    $("workDetailMeta").textContent = "未发布";
    $("workDetailTags").innerHTML = "";
    $("workDetailCover").classList.add("hidden");
    openInlineWorkEditor(true);
  });

  $("workInlineMarkdown").addEventListener("input", () => {
    $("workInlineMarkdownPreview").innerHTML = renderMarkdown($("workInlineMarkdown").value);
  });
  $("workInlineCoverInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      $("workInlineCoverPreview").src = fr.result;
      $("workInlineCoverPreview").dataset.value = fr.result;
      $("workInlineCoverPreviewWrap").classList.remove("hidden");
    };
    fr.readAsDataURL(file);
  });
  $("workInsertImageBtn").addEventListener("click", () => $("workInlineImageInput").click());
  $("workInlineImageInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => insertImageAtCursor($("workInlineMarkdown"), fr.result, $("workInlineMarkdownPreview"));
    fr.readAsDataURL(file);
  });

  $("workInlineCancelBtn").addEventListener("click", () => {
    $("workInlineEditor").classList.add("hidden");
    $("workDetailContent").classList.remove("hidden");
    $("workDetailTags").classList.remove("hidden");
    if ($("workDetailCover").src) $("workDetailCover").classList.remove("hidden");
    syncSideProgress();
  });

  $("workInlineSaveBtn").addEventListener("click", saveInlineWorkEditor);
  $("workInlineDeleteBtn").addEventListener("click", deleteCurrentWork);

  $("prevPost").addEventListener("click", () => {
    const list = getFilteredPosts();
    const idx = list.findIndex((p) => p.id === currentPostId);
    if (idx > 0) openPostDetail(list[idx - 1].id);
  });
  $("nextPost").addEventListener("click", () => {
    const list = getFilteredPosts();
    const idx = list.findIndex((p) => p.id === currentPostId);
    if (idx >= 0 && idx < list.length - 1) openPostDetail(list[idx + 1].id);
  });

  window.addEventListener("scroll", () => {
    if (currentTab === "dashboard" || currentTab === "about" || currentTab === "contact") {
      syncSideProgress();
    }
  });
}

function init() {
  const theme = localStorage.getItem(STORAGE_THEME) || "dark";
  document.documentElement.classList.toggle("dark", theme === "dark");

  const lang = localStorage.getItem(STORAGE_LANG) || "zh";
  $("langToggle").textContent = lang === "zh" ? "中 / EN" : "EN / 中";
  isAdmin = sessionStorage.getItem(STORAGE_ADMIN) === "1";

  ensureContacts();
  applyCfg();
  renderTagFilter("blogTagFilter", posts);
  renderTagFilter("workTagFilter", works);
  renderPosts();
  renderWorks();
  renderHomeSections();
  switchTab("dashboard");
  bind();
  applyAdminVisibility();
}

init();
