const rootEl = document.getElementById('root')

// asynchronous process OR promise chain  
fetch("http://localhost:3000/api/v1/travelbugs")
    .then((res) => res.json())  
    // this doesn't execute until the rest of the file executes 
    .then(data => renderTravelbugs(data));

// How can I execute renderTravelbugs in line 5, when I defined it in line 8? HOISTING

// defined this as a function expression 
    const renderTravelbugs = function (travelbugs) {
        console.log(travelbugs);

        travelbugs.forEach((travelbug) => {
            rootEl.innerHTML += `
            <div>  
                <h2>${travelbug.body}</h2>
            </div>    
            `; 
        });
    };
