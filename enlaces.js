var urlActual = window.location.href;

if (urlActual.includes("/enlaces")) {
    var nuevaURL = urlActual.replace("/enlaces", "https://enlaces-alexxhumilde.pages.dev")
    window.location.href = nuevaURL;
}