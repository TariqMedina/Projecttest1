//$("#loader").load();
var accesstoken = "kdAsj5SsBKO4gyYsFfMgrN_gPHZPeKI9Ve4KHG33upRjJQqpciAlh1IF3DmQOW-b";
var usersearch = "Light my fire";
//var queryURL = "https://api.genius.com/search?q=" + songname + "&access_token=" + accesstoken;
// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function (response1) {
//     console.log(response1.response.hits[0].result.path);
//     console.log(response1.response.hits[0].result.full_title);
//     var title = response1.response.hits[0].result.full_title;
//     artist = title.split("by")[1];
//     console.log(artist.trim());
//     wikiurl = "https://en.wikipedia.org/wiki/" + artist;
//     $("#loader").attr("src", wikiurl);
// });

$("#submit").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
    var usersearch = $("#song-name").val().trim();
    console.log($("#song-name").val().trim());
    var queryURL = "https://api.genius.com/search?q=" + usersearch + "&access_token=" + accesstoken;

//     // Empty the region associated with the articles
//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).then(function (response1) {
//         for (i = 0; i < 5; i++) {
//             // console.log(response1.response.hits[0].result.path);
//             // console.log(response1.response.hits[0].result.full_title);
//             var title = response1.response.hits[i].result.full_title;
//             var lyrpath = response1.response.hits[i].result.path;
//             song = title.split("by")[0].trim();
//             artist = title.split("by")[1].trim();
//             console.log(artist + " : " + song);
//             wikiurl = "https://en.wikipedia.org/wiki/" + artist;
//             var btns = $("<button>");
//             btns.addClass("btn btn-block btn-primary");
//             btns.attr("songname",song);
//             btns.attr("artistname",artist);
//             btns.text(artist + ":-" + song)
//             $("#bholder").append(btns);

//             $("#loader").attr("src", wikiurl);
//         }
//     });
// });
})

$.ajax({
    url: "https://genius.com/The-doors-light-my-fire-lyrics",
    methods: "GET"
}).then(function (response){
    console.log(response)
}   
)


    //OR
    //beforeSend: function(xhr) { 
    //  xhr.setRequestHeader("My-First-Header", "first value"); 
    //  xhr.setRequestHeader("My-Second-Header", "second value"); 
//     //}
// }).done(function(data) { 
//     alert(data);
// });


// $.ajax({
//     url: queryURL,
//     method: "GET"
//     headers: {
//         "My-First-Header":"first value",
//         "My-Second-Header":"second value"
//     }
//     //OR
//     //beforeSend: function(xhr) { 
//     //  xhr.setRequestHeader("My-First-Header", "first value"); 
//     //  xhr.setRequestHeader("My-Second-Header", "second value"); 
// //     //}
// // }).done(function(data) { 
// //     alert(data);
// // });
// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//       // XHR for Chrome/Firefox/Opera/Safari.
//       xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//       // XDomainRequest for IE.
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
//     } else {
//       // CORS not supported.
//       xhr = null;
//     }
//     return xhr;
//   }

//   // Helper method to parse the title tag from the response.
//   function getTitle(text) {
//     return text.match('<title>(.*)?</title>')[1];
//   }

//   // Make the actual CORS request.
//   function makeCorsRequest() {
//     // This is a sample server that supports CORS.
//     var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//       alert('CORS not supported');
//       return;
//     }

//     // Response handlers.
//     xhr.onload = function() {
//       var text = xhr.responseText;
//       var title = getTitle(text);
//       alert('Response from CORS request to ' + url + ': ' + title);
//     };

//     xhr.onerror = function() {
//       alert('Woops, there was an error making the request.');
//     };

//     xhr.send();
//   }