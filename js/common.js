// ハンバーガーメニューの開閉
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("open");
}

// 背景をタップしたら閉じる（スマホのみ）
document.addEventListener("click", function (event) {

    // PCでは何もしない
    if (window.innerWidth > 768) return;

    const menu = document.getElementById("nav-menu");
    const button = document.querySelector(".menu-button");

    if (!menu || !button) return;

    const clickedMenu = menu.contains(event.target);
    const clickedButton = button.contains(event.target);

    if (menu.classList.contains("open") &&
        !clickedMenu &&
        !clickedButton) {

        menu.classList.remove("open");
    }
});