// ========================================
// BASIC TEXT CHANGE
// ========================================

const button = document.getElementById("changeButton");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

button.addEventListener("click", function () {

    message.textContent = "Welcome to the future of technology!";
    message.style.color = "gold";

});

resetButton.addEventListener("click", function () {

    message.textContent = "Welcome to TechPulse";
    message.style.color = "black";

});


// ========================================
// SHOW / HIDE MESSAGE
// ========================================

const techMessage = document.getElementById("techMessage");

const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");

showButton.addEventListener("click", function () {

    techMessage.style.display = "block";

});

hideButton.addEventListener("click", function () {

    techMessage.style.display = "none";

});


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

const navLinks = navMenu.querySelectorAll("a");


// ========================================
// OPEN MENU
// ========================================

function openMenu() {

    navMenu.classList.add("show");

    menuButton.textContent = "✕";

    menuButton.setAttribute("aria-expanded", "true");

    menuButton.setAttribute("aria-label", "Close menu");

    navLinks[0].focus();

}


// ========================================
// CLOSE MENU
// ========================================

function closeMenu() {

    navMenu.classList.remove("show");

    menuButton.textContent = "☰";

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Open menu");

    menuButton.focus();

}


// ========================================
// MOBILE MENU BUTTON
// ========================================

menuButton.addEventListener("click", function () {

    if (navMenu.classList.contains("show")) {

        closeMenu();

    } else {

        openMenu();

    }

});


// ========================================
// CLOSE MENU WHEN LINK IS CLICKED
// ========================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        closeMenu();

    });

});


// ========================================
// CLOSE MENU WITH ESCAPE KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        navMenu.classList.contains("show")
    ) {

        closeMenu();

    }

});


// ========================================
// SYSTEM STATUS
// ========================================

const statusMessage = document.getElementById("statusMessage");
const statusButton = document.getElementById("statusButton");

statusButton.addEventListener("click", function () {

    if (
        statusMessage.textContent ===
        "System Status: Waiting..."
    ) {

        statusMessage.textContent =
            "System Status: Online";

    } else {

        statusMessage.textContent =
            "System Status: Waiting...";

    }

});


// ========================================
// DARK MODE
// ========================================

const darkModeButton =
    document.getElementById("darkModeButton");


// Check saved theme when page loads

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    darkModeButton.textContent = "Light Mode";

} else {

    darkModeButton.textContent = "Dark Mode";

}


// ========================================
// DARK MODE TOGGLE
// ========================================

darkModeButton.addEventListener("click", function () {

    if (
        document.body.classList.contains("dark-mode")
    ) {

        document.body.classList.remove("dark-mode");

        darkModeButton.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        document.body.classList.add("dark-mode");

        darkModeButton.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");

    }

});


// ========================================
// RESET THEME
// ========================================

const resetThemeButton =
    document.getElementById("resetThemeButton");

resetThemeButton.addEventListener("click", function () {

    localStorage.removeItem("theme");

    document.body.classList.remove("dark-mode");

    darkModeButton.textContent = "Dark Mode";

});


// ========================================
// THEME STATUS
// ========================================

const themeStatus =
    document.getElementById("themeStatus");


function updateThemeStatus() {

    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeStatus.textContent = "Dark Mode";

    } else if (
        localStorage.getItem("theme") === "light"
    ) {

        themeStatus.textContent = "Light Mode";

    } else {

        themeStatus.textContent = "Default Theme";

    }

}


// Update when page loads

updateThemeStatus();


// ========================================
// WATCH FOR THEME CHANGES
// ========================================

const themeObserver =
    new MutationObserver(function () {

        updateThemeStatus();

    });


themeObserver.observe(document.body, {

    attributes: true,

    attributeFilter: ["class"]

});


// Update after Reset Theme

resetThemeButton.addEventListener("click", function () {

    updateThemeStatus();

});