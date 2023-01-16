// ombd länk:  https://www.omdbapi.com/?i=tt3896198&
// api key: 783f6de2

const apiKey = '&apikey=783f6de2'
let result = document.getElementById('display-info')

async function movieData(){
    try{

        var searchBox = document.getElementById('search-box').value
    
        const url = "https://www.omdbapi.com/?t=" + searchBox + apiKey
    
        const response  = await fetch (url)
        const data = await response.json()
        console.log(data)

    if (data.Response == "True") {
        result.innerHTML = `
        <div class="display">
         <h1>  ${data.Title} <br> ${data.Year} </h1>
         <img src=${data.Poster}>

         <div class="info">
         <h3>Plot</h3><p>  ${data.Plot}</p>
         <h3>Country</h3><p> ${data.Country}</p>
         <h3>Runtime</h3><p> ${data.Runtime}</p>
         </div>
        </div>`
    }

    if(searchBox.lenght <= 0) {
        result.innerHTML = `<p> please enter a movie title </p>`
    }}
    catch(error){
        console.log(error)
    }
}

movieData()


