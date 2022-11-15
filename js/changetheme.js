let switchMode = document.getElementById("switchMode");
switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") === "css/blacktheme.min.css") {
        theme.href = "css/lighttheme.min.css";
    } else {
        theme.href = "css/blacktheme.min.css";
    }
}