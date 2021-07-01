const BASE_URL = "http://localhost:3000"; 
const rootEl = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
    getCountries() 
    document.getElementById("country-list").addEventListener("change", displayCountry)
});

function displayCountry(e) {
    debugger;       
}

const getCountriesbugs = () => {
// asynchronous process OR promise chain  
fetch("http://localhost:3000/api/v1/countries")
    .then((res) => res.json()) 
    // this doesn't execute until the rest of the file executes \
    .then((data) => {
        debugger
        createTravelbugs(data) 
    })
}

// defined this as a function expression 
    function createTravelbugs(travelbugs) {
        travelbugs.forEach((travelbug) => {
            const tb = new Travelbug(travelbug); 
            tb.render()
            // if you have to put anything on the page, you could do it inside the forEach
        })
    }; 