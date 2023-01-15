// ombd länk:  https://www.omdbapi.com/?i=tt3896198&
// api key: 783f6de2


var searchMovie = document.getElementById('search-box').value
const title = document.getElementById('title').innerHTML
const plot = document.getElementById('plot').innerHTML
const released = document.getElementById('released').innerHTML
const country = document.getElementById('country').innerHTML
const actors = document.getElementById('actors').innerHTML
const genre = document.getElementById('genre').innerHTML
const runtime = document.getElementById('runtime').innerHTML

const apiKey = '&apikey=783f6de2'


let data=  title +  plot + released + country + actors + genre + runtime 