function search() {
    var searchQuery = document.getElementById("searchBox").value;
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
    window.open(googleSearchUrl, "_blank");
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}