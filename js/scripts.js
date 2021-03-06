function displayNoResults() {
    var resultsHtml = "";
    resultsHtml += "<li class='list-group-item'>The search returned no results. Try another search query, or check the spelling of the search term/s.</li>";;
    $("#listgroup").append(resultsHtml);
};


function getSearchResults() {
    var bindURL = "";
    var searchText = "";
    
    document.getElementById("basicQuery").focus();
    var searchText = document.getElementById("basicQuery").value;
    console.log("Search string is: " + searchText);    
    $(".list-group-item").remove();
    if (searchText.length > 0) {
        bindURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchText;
        $.ajax({
        url: bindURL,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'freeCodeCamp-Wiki': 'yattish@gmail.com' },
           success: function displayResponse(response) {               
                console.log("Retrieving API data...");
                console.log("Our binding URL is: " + bindURL);                
                console.log("The length is: " + response[1].length);
                if (response[1].length > 0) {
                    for (i = 0; i < response[1].length; i++) {
                        console.log("This: " + response[1][i]);                    
                        var headHtml = "";
                        headHtml += "<a href='" + response[3][i] + "' "+ "class='list-group-item' ";
                        headHtml += "id='list-group-item"  + i +  "> <h2 class='list-group-item-heading'>" + response[1][i] + "</h2>";
                        headHtml += "<p class='list-group-item-text'>" + response[2][i] + "</p></a>";                
                        console.log(headHtml);  
                        $("#listgroup").append(headHtml);
                        headHtml = "";
                    }                      
                }
                else {
                    displayNoResults();
                }                     
           }
        });
        function setHeader(xhr) {
            xhr.setRequestHeader("Origin", "yattish@gmail.com");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
        };        
    };
}