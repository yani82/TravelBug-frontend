class Travelbug {
    static allTravelbugs = [] 
    constructor( {body, id, country_id}) {
        this.body = body;
        this.id = id;
        this.country_id = country_id;
        // this.createTravelbug = this.createTravelbug.bind(this);
        // debugger; 
        Travelbug.allTravelbugs.push(this) 
    }

    // attachEventListeners() {
    //     document.querySelector("create-travelbug-form").addEventListener('submit', this.createFormHandler);    
    // }

    // createTravelbug(travelbugs) {
    //     // debugger
    //     travelbugs.data.forEach(travelbug => {
    //       new Travelbug(travelbug.id, travelbug.attributes);
    //     });
    //     this.addTravelbugs();
    //   }

    //   addTravelbugs() {
    //     document.querySelector('#travelbug-container').innerHTML = '';
    //     Travelbug.all.forEach(
    //       travelbug => (document.querySelector('#travelbug-container').innerHTML += travelbug.renderTravelbug())
    //     );
    //   }

    render() {
        document.querySelector("#travelbug-container").innerHTML = ` 
        <article id="travelbug-${this.id}" class="flex flex-col shadow my-4">
        <div class="bg-white flex flex-col justify-start p-6">
            <p class="text-sm pb-3">
                ${this.body} 
            </p>
        </div>
    </article>
    `
    }

//     createFormHandler(e) {
//         e.preventDefault();
//         const title = document.querySelector("#input-title").value;
//         const description = document.querySelector("#input-description").value;
//         const username = document.querySelector("#input-username").value;
//         this.postFetch(title, description, username);
//       }
    
//       postFetch(title, description, username){
//         let bodyData = {title, description, username}
        
//         fetch("http://localhost:3000/api/v1/countries", {
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(bodyData),     
//         })
//         .then(response => response.json())
//         .then(travelbug => {
//           const travelbugData = travelbug.data
//           const newTravelbug = new Travelbug(travelbugData.id, travelbugData.attributes);
//           document.querySelector(
//             "#travelbug-container"
//           ).innerHTML += newTravelbug.renderTravelbug();
    
//          document.querySelector("#create-travelbug-form").reset()
//         }) 
//       }
}