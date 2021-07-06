const BASE_URL = "http://localhost:3000"; 
const rootEl = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    getTravelbugs() 
    document.getElementById("country-list").addEventListener("change", displayCountry)
});

function displayCountry(e) {
    // debugger;       
}

const getTravelbugs = () => {
// asynchronous process OR promise chain  
fetch("http://localhost:3000/api/v1/countries")
// can I use fetch (BASE_URL/api/v1/travelbugs)? 
    .then(res => res.json()) 
    // this doesn't execute until the rest of the file executes 
    .then(data => {
        // debugger
        createCountries(data) 
        // console.log(data); 
    })
}

// defined this as a function expression 
    function createCountries(countries) {
        countries.forEach((country) => {
            new Country(country);
            // debugger; 
            country.comments.forEach(comment => {
                new Comment(comment);
            }) 
            country.travelbugs.forEach(travelbug => {
                new Travelbug(travelbug);
            })
        })
    }; 