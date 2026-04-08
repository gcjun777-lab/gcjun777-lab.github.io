const STORAGE_CFG = "cfg_v8";
const STORAGE_POSTS = "posts_v8";
const STORAGE_WORKS = "works_v8";
const STORAGE_THEME = "theme_v8";
const STORAGE_LANG = "lang_v8";
const STORAGE_ADMIN = "admin_session_v1";
const STORAGE_SYNC = "github_sync_v1";
const ADMIN_PASSWORD_SHA256 = "6b00066e4e4c00ba34c7eee0d7c857563ec3a40e630d9270ba06b9ee1ee45deb";
const SITE_DATA_FILE = "site-data.json";

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
  {
    id: "proj-li-zhi-badge-maker",
    title: "项目复盘：离职厂牌制作助手（li-zhi-badge-maker）",
    excerpt: "一个基于 Python + PySide6 + Pillow 的桌面 GUI 工具，支持批量导入人物图并自动生成离职厂牌。",
    tags: ["project", "python", "gui", "automation"],
    date: "2026-04-08",
    cover: "https://opengraph.githubassets.com/1/gcjun777-lab/li-zhi-badge-maker",
    markdown:
      "# 项目复盘：离职厂牌制作助手\n\n这个项目的目标很明确：把“离职厂牌”这种重复性很高的设计任务，做成可批量处理的工具流程。\n\n## 我做了什么\n\n- 用 **Python + PySide6 + Pillow** 搭建桌面 GUI\n- 支持批量导入透明人物图片，自动生成记录列表\n- 在界面里逐条编辑姓名、天数、主文案和副文案\n- 自动合成图层：背景 -> 人物 -> 覆盖层 -> 文字\n- 提供人物微调参数（缩放、X 偏移、Y 偏移）\n- 支持工程文件 JSON 的保存和加载\n- 支持命令行读取工程批量导出\n\n## 工程化能力\n\n除了本地 GUI，我还做了完整发布链路：\n\n- GitHub Actions 的 Windows 打包工作流\n- 通过标签触发 Release 发布\n- 自动产出 GUI EXE 包\n\n这让项目从“本地脚本”变成了可交付、可复用的小产品。\n\n## 经验总结\n\n1. 把“高频重复动作”产品化，价值会非常直观。\n2. GUI 不是终点，完整的打包发布流程同样重要。\n3. 结构化工程文件（JSON）是可维护性的关键。\n\n项目地址：\n\n- [li-zhi-badge-maker](https://github.com/gcjun777-lab/li-zhi-badge-maker)",
  },
  {
    id: "proj-monthly-star-helper",
    title: "项目复盘：月度之星海报生成器（monthly-star-helper）",
    excerpt: "面向运营场景的海报批处理工具：自动抠图合成、文件名规范驱动、并支持 Actions 自动构建 EXE 与安装包。",
    tags: ["project", "python", "poster", "github-actions"],
    date: "2026-04-08",
    cover: "https://opengraph.githubassets.com/1/gcjun777-lab/monthly-star-helper",
    markdown:
      "# 项目复盘：月度之星海报生成器\n\n这个项目聚焦一个真实需求：每月要批量制作“月度之星”个人海报，手工处理成本高、易出错。\n\n## 关键能力\n\n- 双击启动 GUI，不弹命令行窗口\n- 自动抠图并合成海报\n- 默认使用程序同目录下的输入/输出目录\n- 支持自定义输入目录、输出目录、模板和字体\n\n## 规范化输入\n\n为了稳定批处理，我设计了文件名规则：\n\n- `部门-姓名-YYYYMM`\n- 例如：`制造部-张三-202603.jpg`\n\n通过这条规则，流程可以自动识别并减少人工校对成本。\n\n## 发布与交付\n\n项目不仅能本地运行，还接入了自动化发布：\n\n- GitHub Actions 在 Windows Runner 自动构建\n- 自动下载模型、打包 GUI EXE\n- 使用 Inno Setup 生成安装包\n- 自动创建 Release 并上传产物\n\n## 经验总结\n\n1. 对运营类工具而言，“输入规范”比“功能堆叠”更重要。\n2. 自动化打包与发布，是让工具持续可用的核心。\n3. 做成 EXE 和安装包后，团队落地效率明显提升。\n\n项目地址：\n\n- [monthly-star-helper](https://github.com/gcjun777-lab/monthly-star-helper)",
  },
];

const projectSeedPosts = defaultPosts.filter((p) => p.id.startsWith("proj-"));

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
    { id: "about-contact", label: "联系" },
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
let adminEntryVisible = false;
let configAutosaveTimer = null;
let postAutosaveTimer = null;
let workAutosaveTimer = null;
let remoteSyncTimer = null;
let langToggleBurst = { count: 0, timer: null };

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

function getDefaultSyncConfig() {
  const host = window.location.hostname || "";
  const owner = host.endsWith(".github.io") ? host.replace(".github.io", "") : "gcjun777-lab";
  return {
    owner,
    repo: `${owner}.github.io`,
    branch: "main",
    path: SITE_DATA_FILE,
    token: "",
  };
}

function getSyncConfig() {
  const saved = load(STORAGE_SYNC, getDefaultSyncConfig());
  return { ...getDefaultSyncConfig(), ...saved };
}

function saveSyncConfig(cfgValue) {
  localStorage.setItem(STORAGE_SYNC, JSON.stringify(cfgValue));
}

function buildSiteData() {
  return { cfg, posts, works };
}

async function loadSiteDataFromFile() {
  try {
    const res = await fetch(`./${SITE_DATA_FILE}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return;
    const remote = await res.json();
    if (remote?.cfg) {
      cfg = { ...defaults, ...remote.cfg };
      saveCfg();
    }
    if (Array.isArray(remote?.posts)) {
      posts = remote.posts;
      savePosts();
    }
    if (Array.isArray(remote?.works)) {
      works = remote.works;
      saveWorks();
    }
  } catch {}
}

async function syncSiteDataToGitHub(message = "Update site data") {
  const syncCfg = getSyncConfig();
  if (!syncCfg.token) return { ok: false, reason: "missing_token" };

  const apiUrl = `https://api.github.com/repos/${syncCfg.owner}/${syncCfg.repo}/contents/${syncCfg.path}`;
  const headers = {
    Authorization: `Bearer ${syncCfg.token}`,
    Accept: "application/vnd.github+json",
  };

  let sha = null;
  const current = await fetch(apiUrl, { headers });
  if (current.ok) {
    const body = await current.json();
    sha = body.sha || null;
  }

  const encoder = new TextEncoder();
  const bytes = encoder.encode(JSON.stringify(buildSiteData(), null, 2));
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  const content = btoa(binary);

  const payload = {
    message,
    content,
    branch: syncCfg.branch,
  };
  if (sha) payload.sha = sha;

  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res.ok ? { ok: true } : { ok: false, reason: "request_failed" };
}

function persistAll(message = "Update site data", sync = true) {
  saveCfg();
  savePosts();
  saveWorks();
  if (!sync) return;
  clearTimeout(remoteSyncTimer);
  setAutosaveStatus("已本地保存，准备同步 GitHub...", "pending");
  remoteSyncTimer = setTimeout(async () => {
    const result = await syncSiteDataToGitHub(message);
    const text = result.ok
      ? "已同步到 GitHub"
      : result.reason === "missing_token"
        ? "已本地保存，点击“同步设置”连接 GitHub"
        : "已本地保存，但本次同步 GitHub 失败";
    setAutosaveStatus(text, result.ok ? "success" : result.reason === "missing_token" ? "idle" : "pending");
  }, 1200);
}

async function sha256(text) {
  const data = new TextEncoder().encode(String(text || ""));
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function setAutosaveStatus(text, tone = "idle") {
  const el = $("autosaveStatus");
  if (!el) return;
  el.textContent = text;
  el.dataset.state = tone;
}

function scheduleConfigAutosave() {
  if (!isAdmin || !pageEditing) return;
  clearTimeout(configAutosaveTimer);
  setAutosaveStatus("手动保存模式：点击右下角“立即保存”后再同步 GitHub", "idle");
}

function schedulePostAutosave() {
  if (!isAdmin) return;
  clearTimeout(postAutosaveTimer);
  setAutosaveStatus("手动保存模式：编辑完成后点击“保存文章”", "idle");
}

function scheduleWorkAutosave() {
  if (!isAdmin) return;
  clearTimeout(workAutosaveTimer);
  setAutosaveStatus("手动保存模式：编辑完成后点击“保存作品”", "idle");
}

function applyAdminVisibility() {
  const ids = ["togglePageEdit", "newPostQuick", "newWorkBtn"];
  ids.forEach((id) => $(id)?.classList.toggle("hidden", !isAdmin));
  $("adminActions").classList.toggle("hidden", !adminEntryVisible && !isAdmin);
  $("syncSetupBtn").classList.toggle("hidden", !isAdmin);
  $("adminToggle").classList.toggle("hidden", !adminEntryVisible && !isAdmin);
  $("adminToggle").textContent = isAdmin ? "退出管理" : "管理解锁";
  $("editCurrentPost")?.classList.toggle("hidden", !isAdmin);
  $("editCurrentWork")?.classList.toggle("hidden", !isAdmin);
  $("inlineDeleteBtn")?.classList.toggle("hidden", !isAdmin || $("inlineSaveBtn").dataset.mode === "create");
  $("workInlineDeleteBtn")?.classList.toggle("hidden", !isAdmin || $("workInlineSaveBtn").dataset.mode === "create");
  if (!isAdmin && pageEditing) {
    closePageEditor();
  }
  setAutosaveStatus(isAdmin ? "手动保存模式已开启" : "编辑功能已关闭", isAdmin ? "success" : "idle");
  renderContacts();
}

function revealAdminEntry() {
  adminEntryVisible = true;
  $("adminActions").classList.remove("hidden");
  $("adminToggle").classList.remove("hidden");
  setAutosaveStatus("已显示管理入口", "idle");
}

function bumpAdminRevealCounter() {
  langToggleBurst.count += 1;
  clearTimeout(langToggleBurst.timer);
  langToggleBurst.timer = setTimeout(() => {
    langToggleBurst.count = 0;
  }, 1200);
  if (langToggleBurst.count >= 3) {
    langToggleBurst.count = 0;
    revealAdminEntry();
  }
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

async function configureGitHubSync() {
  if (!isAdmin) return;
  const current = getSyncConfig();
  const owner = (prompt("GitHub 用户名", current.owner) || "").trim();
  if (!owner) return;
  const repo = (prompt("仓库名", current.repo) || "").trim();
  if (!repo) return;
  const branch = (prompt("分支名", current.branch) || "").trim() || "main";
  const path = (prompt("同步文件路径", current.path) || "").trim() || SITE_DATA_FILE;
  const tokenHint = current.token ? "已配置，直接确定可保留" : "";
  const token = prompt(`GitHub PAT（需要仓库 contents 读写权限）${tokenHint}`, current.token || "") || "";
  const next = { owner, repo, branch, path, token: token.trim() };
  saveSyncConfig(next);
  setAutosaveStatus("GitHub 同步设置已保存", "success");
  const result = await syncSiteDataToGitHub("Initialize site data sync");
  setAutosaveStatus(result.ok ? "已同步到 GitHub" : "同步设置已保存，但首次同步失败", result.ok ? "success" : "pending");
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

function ensureProjectPosts() {
  if (!Array.isArray(posts)) posts = [];
  let changed = false;
  projectSeedPosts.forEach((seed) => {
    if (!posts.some((p) => p.id === seed.id)) {
      posts.unshift(seed);
      changed = true;
    }
  });
  if (changed) savePosts();
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
  clearTimeout(configAutosaveTimer);
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
  setAutosaveStatus("手动保存模式：点击右下角“立即保存”后再同步 GitHub", "success");
}

function saveCurrentPageEdit(keepEditing = false) {
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

  persistAll(`Update ${currentTab} page`);
  applyCfg();
  setAutosaveStatus("已自动保存", "success");
  if (!keepEditing) {
    closePageEditor();
  }
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
  if (currentTab === "about") animateCurrentView();
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
  if (!isAdmin) {
    alert("请先通过管理解锁后再编辑文章");
    return;
  }
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

  $("inlineDeleteBtn").classList.toggle("hidden", isNew || !isAdmin);
  $("inlineSaveBtn").dataset.mode = isNew ? "create" : "edit";

  $("detailContent").classList.add("hidden");
  $("detailCover").classList.add("hidden");
  $("detailTags").classList.add("hidden");
  $("inlineEditor").classList.remove("hidden");
}

function openInlineWorkEditor(isNew = false) {
  if (!isAdmin) {
    alert("请先通过管理解锁后再编辑作品");
    return;
  }
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

  $("workInlineDeleteBtn").classList.toggle("hidden", isNew || !isAdmin);
  $("workInlineSaveBtn").dataset.mode = isNew ? "create" : "edit";

  $("workDetailContent").classList.add("hidden");
  $("workDetailCover").classList.add("hidden");
  $("workDetailTags").classList.add("hidden");
  $("workInlineEditor").classList.remove("hidden");
}

function saveInlinePostEditor(keepEditing = false) {
  if (!isAdmin) {
    alert("请先通过管理解锁后再保存文章");
    return;
  }
  const title = $("inlinePostTitle").value.trim();
  const markdown = $("inlinePostMarkdown").value.trim();
  if (!title || !markdown) {
    if (!keepEditing) alert("标题和正文不能为空");
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
    $("inlineSaveBtn").dataset.mode = "edit";
    $("inlineDeleteBtn").classList.toggle("hidden", !isAdmin);
    $("inlineEditorTitle").textContent = "编辑文章（当前页）";
  } else {
    const idx = posts.findIndex((x) => x.id === currentPostId);
    if (idx < 0) return;
    posts[idx] = { ...posts[idx], ...payload };
  }

  persistAll(isCreate ? "Create post" : `Update post ${currentPostId}`);
  renderTagFilter("blogTagFilter", posts);
  renderPosts();
  renderHomeSections();
  setAutosaveStatus("文章已自动保存", "success");
  if (keepEditing) return;
  openPostDetail(currentPostId);
}

function saveInlineWorkEditor(keepEditing = false) {
  if (!isAdmin) {
    alert("请先通过管理解锁后再保存作品");
    return;
  }
  const title = $("workInlineTitle").value.trim();
  const markdown = $("workInlineMarkdown").value.trim();
  if (!title || !markdown) {
    if (!keepEditing) alert("标题和正文不能为空");
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
    $("workInlineSaveBtn").dataset.mode = "edit";
    $("workInlineDeleteBtn").classList.toggle("hidden", !isAdmin);
    $("workInlineEditorTitle").textContent = "编辑作品（当前页）";
  } else {
    const idx = works.findIndex((x) => x.id === currentWorkId);
    if (idx < 0) return;
    works[idx] = { ...works[idx], ...payload };
  }

  persistAll(isCreate ? "Create work" : `Update work ${currentWorkId}`);
  renderTagFilter("workTagFilter", works);
  renderWorks();
  renderHomeSections();
  setAutosaveStatus("作品已自动保存", "success");
  if (keepEditing) return;
  openWorkDetail(currentWorkId);
}

function deleteCurrentPost() {
  if (!isAdmin) {
    alert("请先通过管理解锁后再删除文章");
    return;
  }
  if (!currentPostId) return;
  if (!confirm("确认删除这篇文章？")) return;
  posts = posts.filter((x) => x.id !== currentPostId);
  persistAll(`Delete post ${currentPostId}`);
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
  if (!isAdmin) {
    alert("请先通过管理解锁后再删除作品");
    return;
  }
  if (!currentWorkId) return;
  if (!confirm("确认删除这个作品？")) return;
  works = works.filter((x) => x.id !== currentWorkId);
  persistAll(`Delete work ${currentWorkId}`);
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
  $("syncSetupBtn").addEventListener("click", () => {
    configureGitHubSync();
  });

  $("themeToggle").addEventListener("click", () => {
    const dark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !dark);
    localStorage.setItem(STORAGE_THEME, !dark ? "dark" : "light");
  });

  $("langToggle").addEventListener("click", () => {
    bumpAdminRevealCounter();
    const cur = localStorage.getItem(STORAGE_LANG) || "zh";
    const next = cur === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE_LANG, next);
    $("langToggle").textContent = next === "zh" ? "中 / EN" : "EN / 中";
  });

  $("togglePageEdit").addEventListener("click", openPageEditor);
  $("savePageEdit").addEventListener("click", () => saveCurrentPageEdit(true));
  $("cancelPageEdit").addEventListener("click", () => {
    applyCfg();
    closePageEditor();
    setAutosaveStatus("已取消未保存修改", "idle");
  });

  $("avatarFileInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      cfg.avatar = fr.result;
      $("homeAvatar").src = cfg.avatar;
      persistAll("Update avatar");
      setAutosaveStatus("头像已自动保存", "success");
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
    persistAll("Create contact");
    renderContacts();
    setAutosaveStatus("联系方式已自动保存", "success");
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
      persistAll("Edit contact");
      renderContacts();
      setAutosaveStatus("联系方式已自动保存", "success");
      return;
    }
    if (action === "delete") {
      if (!confirm("确认删除这个联系方式？")) return;
      cfg.contacts.splice(idx, 1);
      persistAll("Delete contact");
      renderContacts();
      setAutosaveStatus("联系方式已自动保存", "success");
    }
  });

  $("blogSearch").addEventListener("input", renderPosts);
  $("blogTagFilter").addEventListener("change", renderPosts);
  $("workSearch").addEventListener("input", renderWorks);
  $("workTagFilter").addEventListener("change", renderWorks);
  document.addEventListener("input", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (!pageEditing) return;
    const ids = editableMap[currentTab] || [];
    if (ids.includes(target.id)) {
      scheduleConfigAutosave();
    }
  });

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
    if (!isAdmin) {
      alert("请先通过管理解锁后再写文章");
      return;
    }
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
  $("inlinePostMarkdown").addEventListener("input", () => {
    $("inlineMarkdownPreview").innerHTML = renderMarkdown($("inlinePostMarkdown").value);
    schedulePostAutosave();
  });
  ["inlinePostTitle", "inlinePostExcerpt", "inlinePostTags"].forEach((id) => {
    $(id).addEventListener("input", schedulePostAutosave);
  });
  $("inlinePostCoverInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      $("inlineCoverPreview").src = fr.result;
      $("inlineCoverPreview").dataset.value = fr.result;
      $("inlineCoverPreviewWrap").classList.remove("hidden");
      schedulePostAutosave();
    };
    fr.readAsDataURL(file);
  });
  $("inlineInsertImageBtn").addEventListener("click", () => $("inlineEditorImageInput").click());
  $("inlineEditorImageInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      insertImageAtCursor($("inlinePostMarkdown"), fr.result, $("inlineMarkdownPreview"));
      schedulePostAutosave();
    };
    fr.readAsDataURL(file);
  });

  $("inlineCancelBtn").addEventListener("click", () => {
    clearTimeout(postAutosaveTimer);
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
    if (!isAdmin) {
      alert("请先通过管理解锁后再新建作品");
      return;
    }
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
    scheduleWorkAutosave();
  });
  ["workInlineTitle", "workInlineExcerpt", "workInlineTags"].forEach((id) => {
    $(id).addEventListener("input", scheduleWorkAutosave);
  });
  $("workInlineCoverInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      $("workInlineCoverPreview").src = fr.result;
      $("workInlineCoverPreview").dataset.value = fr.result;
      $("workInlineCoverPreviewWrap").classList.remove("hidden");
      scheduleWorkAutosave();
    };
    fr.readAsDataURL(file);
  });
  $("workInsertImageBtn").addEventListener("click", () => $("workInlineImageInput").click());
  $("workInlineImageInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      insertImageAtCursor($("workInlineMarkdown"), fr.result, $("workInlineMarkdownPreview"));
      scheduleWorkAutosave();
    };
    fr.readAsDataURL(file);
  });

  $("workInlineCancelBtn").addEventListener("click", () => {
    clearTimeout(workAutosaveTimer);
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
    if (currentTab === "dashboard" || currentTab === "about") {
      syncSideProgress();
    }
  });
}

async function init() {
  const theme = localStorage.getItem(STORAGE_THEME) || "dark";
  document.documentElement.classList.toggle("dark", theme === "dark");

  const lang = localStorage.getItem(STORAGE_LANG) || "zh";
  $("langToggle").textContent = lang === "zh" ? "中 / EN" : "EN / 中";
  isAdmin = sessionStorage.getItem(STORAGE_ADMIN) === "1";

  ensureContacts();
  ensureProjectPosts();
  await loadSiteDataFromFile();
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
