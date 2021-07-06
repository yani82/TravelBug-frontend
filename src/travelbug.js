class Travelbug {
    static allTravelbugs = [] 
    constructor( {body, id, country_id}) {
        this.body = body;
        this.id = id;
        this.country_id = country_id;
        // debugger; 
        Travelbug.allTravelbugs.push(this) 
    }

    render() {
        document.querySelector(".travelbug-list").innerHTML = ` 
        <article id="travelbug-${this.id}" class="flex flex-col shadow my-4">
        <div class="bg-white flex flex-col justify-start p-6">
            <p class="text-sm pb-3">
                ${this.body} 
            </p>
        </div>
    </article>
    `
    }
}