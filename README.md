# Module-3---D2

Start from your previous Spotify Exercise.
The goal of this exercise is to fetch data from the API dynamically and display it appropriately in the page.

Subscribe on rapidapi.com to be able to access the Deezer API from: https://rapidapi.com/it/deezerdevs/api/deezer-1

Generate automatically 3 lists based on the "search API" response

es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem
es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth
Load them during page load, and create the collections based on the API response.
Make the central part of the page scrollable both horizontally and vertically
Add a "List albums" button. When pressed, he should create and display a list of albums on the page
Add a "Count Unique" button. When pressed, he should log the number of unique albums on the page
If the fetching gives you "Quota limit exceeded" too many times you can try the endpoint we created:
https://striveschool-api.herokuapp.com/api/deezer/
