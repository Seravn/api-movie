// ombd länk:  https://www.omdbapi.com/?i=tt3896198&
// api key: 783f6de2



const apiKey = '&apikey=783f6de2'
let result = document.getElementById('display-info')

async function movieData(){
    var searchBox = document.getElementById('search-box').value
    
    const url = "https://www.omdbapi.com/?t=" + searchBox + apiKey

     
        const response  = await fetch (url)
        const data = await response.json()
        console.log(data)

    if (data.Response == "True") {
        result.innerHTML = `
        <div class="display">
        <h4>  ${data.Title} <br> *** ${data.Year} ***</h4>
        <img src=${data.Poster}>
        <div class="info">
        
        <p> Plot: ${data.Plot}</p>
        <p> Country: ${data.Country}</p>
        <p> Runtime: ${data.Runtime}</p>
        </div>

        </div>
        `
    }

    if(searchBox.lenght <= 0) {
        result.innerHTML = `<p> please enter a moviee name</p>`
    }
}

movieData()


