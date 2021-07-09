const BASE_URL = "http://localhost:3000/api"; 
const rootEl = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    getTravelbugs() 
    document.getElementById("country-list").addEventListener("change", displayCountry)
    document.getElementById("create-comment-form").addEventListener('submit', onSubmit)  
});

function displayCountry(event) {
    document.querySelector("#postcomment-container").innerHTML = ""
    const country = Country.findByName(event.target.value)
    if (!!country) {
        const travelbugs = country.findTravelbugs()
        travelbugs.forEach(travelbug => travelbug.render())
        document.querySelector('#travelbug-container').innerHTML += "<p>Comments</p>"
        const comments = country.findComments()
        comments.forEach(comment => {
            document.querySelector("#postcomment-container").innerHTML += comment.renderComment()
        })
    }
}

const getTravelbugs = () => {
// asynchronous process OR promise chain  
    Country.getAllCountries()  
    // this doesn't execute until the rest of the file executes 
        .then(countries => {
            createCountries(countries)
        })
     
    }

// defined this as a function expression 
function createCountries(countries) {
    countries.forEach((country) => {
        country.comments.forEach(comment => {
            new Comment(comment);
        }) 
        country.travelbugs.forEach(travelbug => {
            new Travelbug(travelbug);
        })
    })
}

function onSubmit(event) {
    event.preventDefault();
    const country_id = Country.findByName(document.querySelector("#country-list").value).id
    const username = document.querySelector("#input-username").value;
    const description = document.querySelector("#input-description").value;
    postComment(username, description, country_id);
}

function postComment(username, description, country_id) {
    const comment = {username, description, country_id}
    Comment.createComment(comment).then(comment => {
            const newComment = new Comment(comment);
            document.querySelector(
                "#postcomment-container").innerHTML += newComment.renderComment();
        }) 
}