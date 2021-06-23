let userInput = window.prompt("How many albums to generate?")

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then(response => response.json())
.then( data => {
    console.log(data.data);
    const songList = data.data
    let generalUl = document.querySelector("#general-ul")
    generalUl.classList.add("list-group")
        for(let i = 0 ; i < userInput; i++){
            generalUl.innerHTML 
            += `
            <div class="card-album "> 
                <img src=${ songList[i].album.cover_medium}>
                <li class="list-group-item">${ songList[i].title }</li>
            </div>

            `
        }
    


    // generalUl.innerHTML = data
    // let liList = document.createElement("li")

    






})
.catch((error) => console.log(error))