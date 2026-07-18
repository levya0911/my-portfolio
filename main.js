/* ============================================================
   PIXEL ARCADE PORTFOLIO — script dùng chung cho mọi trang
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Màn hình khởi động (boot / insert coin) ---------- */
  function initBoot() {
    var boot = document.getElementById("boot-screen");
    if (!boot) return;

    // Nếu đã xem intro trong phiên này thì bỏ qua để không làm phiền khi chuyển trang
    var seen = sessionStorage.getItem("arcade_intro_seen");
    var bar = boot.querySelector(".boot-bar > span");
    var loadingText = boot.querySelector(".boot-loading");
    var pressStart = boot.querySelector(".press-start");

    function closeBoot() {
      boot.classList.add("hide");
      sessionStorage.setItem("arcade_intro_seen", "1");
      document.body.style.overflow = "";
    }

    if (seen) {
      boot.classList.add("hide");
      return;
    }

    document.body.style.overflow = "hidden";
    var pct = 0;
    var timer = setInterval(function () {
      pct += Math.random() * 18 + 6;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        if (bar) bar.style.width = "100%";
        if (loadingText) loadingText.textContent = "SẴN SÀNG!";
        if (pressStart) pressStart.style.display = "inline-block";
      } else if (bar) {
        bar.style.width = pct + "%";
      }
    }, 220);

    function proceed() {
      closeBoot();
      window.removeEventListener("keydown", proceed);
      boot.removeEventListener("click", proceed);
    }
    boot.addEventListener("click", function () {
      if (pct >= 100) proceed();
    });
    window.addEventListener("keydown", function () {
      if (pct >= 100) proceed();
    });

    // fallback: tự đóng sau 4.5s dù người dùng không bấm gì (tránh chặn trải nghiệm)
    setTimeout(function () {
      if (!document.getElementById("boot-screen").classList.contains("hide")) {
        // vẫn chờ người dùng bấm nếu thanh đã đầy; chỉ tự đóng nếu bar chưa kịp đầy do lỗi
      }
    }, 6000);
  }

  /* ---------- 2. Con trỏ pixel tuỳ chỉnh ---------- */
  function initCursor() {
    if (window.matchMedia("(hover: none)").matches) return;
    var cur = document.getElementById("pixel-cursor");
    if (!cur) return;
    document.body.classList.add("js-cursor-ready");
    window.addEventListener("mousemove", function (e) {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
    });
    window.addEventListener("mousedown", function () { cur.classList.add("click"); });
    window.addEventListener("mouseup", function () { cur.classList.remove("click"); });

    var hoverables = "a, button, .btn, .project-card, .card, input, textarea, .arcade-nav a";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(hoverables)) cur.classList.add("hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(hoverables)) cur.classList.remove("hover");
    });
  }

  /* ---------- 3. Nền: hạt pixel trôi nổi nhẹ nhàng (canvas) ---------- */
  function initParticles() {
    var canvas = document.getElementById("bg-canvas");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var particles = [];
    var W, H;
    var colors = ["#b026ff", "#05f2e8", "#ff2079", "#ffd400"];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    var count = window.innerWidth < 700 ? 26 : 55;
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        s: Math.random() * 2 + 1,
        vy: Math.random() * 0.25 + 0.05,
        c: colors[i % colors.length],
        a: Math.random() * 0.5 + 0.15
      });
    }

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.fillRect(p.x, p.y, p.s, p.s);
        if (!reduceMotion) {
          p.y -= p.vy;
          if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        }
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    }
    loop();
  }

  /* ---------- 4. Hiệu ứng xuất hiện khi cuộn (scroll reveal) ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 5. Đánh dấu mục nav đang active theo trang hiện tại ---------- */
  function initActiveNav() {
    var links = document.querySelectorAll(".arcade-nav a");
    var path = window.location.pathname.split("/").pop() || "index.html";
    links.forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      var file = href.split("/").pop();
      if (file === path || (path === "" && file === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  /* ---------- 6. Hệ thống Achievement (theo dõi số bài đã xem) ---------- */
  var ACHIEVEMENT_KEY = "arcade_projects_visited";
  var TOTAL_PROJECTS = 6;

  function getVisited() {
    try {
      return JSON.parse(localStorage.getItem(ACHIEVEMENT_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }
  function saveVisited(list) {
    try { localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(list)); } catch (e) {}
  }

  function markProjectVisited(id) {
    var list = getVisited();
    if (list.indexOf(id) === -1) {
      list.push(id);
      saveVisited(list);
    }
    if (list.length === TOTAL_PROJECTS) {
      showAchievement(
        "ACHIEVEMENT UNLOCKED",
        "Portfolio Explorer — đã xem đủ 6 bài tập!"
      );
    }
    return list;
  }

  function showAchievement(title, sub) {
    var el = document.getElementById("achievement");
    if (!el) return;
    el.querySelector(".a-title").textContent = title;
    el.querySelector(".a-sub").textContent = sub;
    el.classList.add("show");
    clearTimeout(el._timer);
    el._timer = setTimeout(function () {
      el.classList.remove("show");
    }, 4200);
  }

  // Đánh dấu các thẻ dự án đã ghé thăm trên trang danh sách dự án
  function paintVisitedBadges() {
    var visited = getVisited();
    document.querySelectorAll(".project-card[data-project-id]").forEach(function (card) {
      var id = card.getAttribute("data-project-id");
      if (visited.indexOf(id) !== -1) card.classList.add("visited");
    });
  }

  window.ArcadePortfolio = {
    markProjectVisited: markProjectVisited,
    showAchievement: showAchievement
  };

  /* ---------- 7. Khởi chạy khi DOM sẵn sàng ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initBoot();
    initCursor();
    initParticles();
    initReveal();
    initActiveNav();
    paintVisitedBadges();

    // Nếu trang hiện tại là trang chi tiết dự án, tự động đánh dấu đã xem
    var body = document.body;
    var pid = body.getAttribute("data-project-id");
    if (pid) {
      setTimeout(function () { markProjectVisited(pid); }, 1200);
    }
  });
})();
