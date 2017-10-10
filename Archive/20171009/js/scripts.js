function getSearchResults() {
    var bindURL = "";
    
    var searchText = document.getElementById("basicQuery").value;
    console.log("Search string is: " + searchText);    
    bindURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=bitcoin";
    $.ajax({
        url: bindURL,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'freeCodeCamp-Wiki': 'yattish@gmail.com' },
           success: function displayResponse(response) {               
                console.log("Retrieving API data...");
                console.log("Our binding URL is: " + bindURL);
//                response.forEach(function(val) {
//                    console.log("response: " + val[0]);
//                    var array = val[0].split(',');
//                    console.log("My array is: " + array);
//                });

//                console.log("response 0: " + response[0]);   
//                console.log("response 1: " + response[1][1]);                  
//                console.log("response 2: " + response[2]);
//                console.log("response 3: " + response[3]);
//                console.log("Length is: " + response.length);
                
                for (i = 0; i < response[1].length; i++) {
                    console.log("This: " + response[1][i]);                    
                    var headHtml = "";
                    headHtml += "<a href='#' class='list-group-item' ";
                    headHtml += "id='list-group-item"  + i +  "'>" + response[1][i] + "</a>";
                    console.log(headHtml);  
                    // $("#listitem").html(headHtml);
//                    var d1 = document.getElementById('listitem');
//                    d1.insertAdjacentHTML('afterend', headHtml);
                    $("#listgroup").append(headHtml);
                }

                for (i = 0; i < response[2].length; i++) {
                    console.log("This: " + response[2][i]);                    
                }               
               
                for (i = 0; i < response[3].length; i++) {
                    console.log("This: " + response[3][i]);                    
                }                              
           }
    });
    
    function setHeader(xhr) {
        xhr.setRequestHeader("Origin", "yattish@gmail.com");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Accept", "application/json");
    };
};