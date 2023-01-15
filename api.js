// ombd länk:  https://www.omdbapi.com/?i=tt3896198&
// api key: 783f6de2



const apiKey = '&apikey=783f6de2'

async function movieData(){
    var searchMovie = document.getElementById('search-box').value



    const url = "https://www.omdbapi.com/?t=" + searchMovie + apiKey

     
        const response  = await fetch (url)
        const data = await response.json()
        console.log(data)


     let {
        Title, Plot, Released, Country, Actors, Genre, Runtime, Poster
    } = data
  document.getElementById('Title').innerHTML = Title
  document.getElementById('Plot').innerHTML = Plot
  document.getElementById('Released').innerHTML = Released
  document.getElementById('Country').innerHTML = Country
  document.getElementById('Actors').innerHTML = Actors
  document.getElementById('Genre').innerHTML = Genre
  document.getElementById('Runtime').innerHTML = Runtime
  document.getElementById("Poster").src = Poster;
  
 


}

