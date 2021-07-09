const BASE_URL = "http://localhost:3000"; 
const rootEl = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    getTravelbugs() 
    document.getElementById("country-list").addEventListener("change", displayCountry)
    document.getElementById("create-comment-form").addEventListener('submit', createFormHandler)  
});

function displayCountry(e) { 
    const country = Country.findByName(e.target.value)
    if (!!country) {
    const travelbugs = country.findTravelbugs() 
    travelbugs.forEach(travelbug => travelbug.render()) 
    document.querySelector('#travelbug-container').innerHTML += "<p>Comments</p>"
    const comments = country.findComments() 
    comments.forEach(comment => {
        document.querySelector(
        "#postcomment-container"
      ).innerHTML += comment.renderComment()
    })
    // debugger; 
    }
}

const getTravelbugs = () => {
// asynchronous process OR promise chain  
fetch("http://localhost:3000/api/v1/countries")
// can I use fetch (BASE_URL/api/v1/countries)? 
    .then(res => res.json()) 
    // this doesn't execute until the rest of the file executes 
    .then(countries => {
        createCountries(countries)
        // debugger
        })
         
        // console.log(data); 
    }

// defined this as a function expression 
    function createCountries(countries) {
        countries.forEach((country) => {
            const c = new Country(country);
            // debugger; 
            country.comments.forEach(comment => {
                new Comment(comment);
            }) 
            country.travelbugs.forEach(travelbug => {
                new Travelbug(travelbug);
            })
            // c.render() 
        })
    }

    function createFormHandler(e) {
        e.preventDefault();
        const country_id = Country.findByName(document.querySelector("#country-list").value).id
        const username = document.querySelector("#input-username").value;
        const description = document.querySelector("#input-description").value;
        postFetch(username, description, country_id);
      }
    
      function postFetch(username, description, country_id) {
        let bodyData = {username, description, country_id}
        fetch("http://localhost:3000/api/v1/comments", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData),     
        })
        .then(response => response.json())
        .then(comment => {
          const newComment = new Comment(comment);
          document.querySelector(
            "#postcomment-container"
          ).innerHTML += newComment.renderComment();
    
         document.querySelector("#create-comment-form").reset()
        }) 
      }