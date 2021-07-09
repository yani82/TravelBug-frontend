const BASE_URL = "http://localhost:3000"; 
const rootEl = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    getTravelbugs() 
    document.getElementById("country-list").addEventListener("change", displayCountry)
});

function displayCountry(e) {     
    const country = Country.findByName(e.target.value)
    if (!!country) {
    const travelbugs = country.findTravelbugs() 
    travelbugs.forEach(travelbug => travelbug.render()) 
    document.querySelector('#travelbug-container').innerHTML += "<p>Comments</p>"
    const comments = country.findComments() 
    comments.forEach(comment => comment.render())
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
        // travelbugs.forEach(travelbug => {
            // debugger;
            // const travelbugMarkup = `
            // <div data-id=${travelbug.country_id}>
            // <h3>${travelbug.body}</h3>
            // <button data-id=${travelbug.id}>edit</button>
            // </div>
            // <br><br>`;

            // document.querySelector('#travelbug-container').innerHTML += travelbugMarkup  
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
    }; 