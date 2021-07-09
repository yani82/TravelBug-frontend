class Comment {
    static allComments = [] 
    constructor( {body, id, user_id, country_id}) {
        this.body = body;
        this.id = id;
        this.user_id = user_id;
        this.country_id = country_id
        // debugger; 
        Comment.allComments.push(this) 
    }

    render() {
        document.querySelector("#travelbug-container").innerHTML = ` 
        <article id="comment-${this.id}" class="flex flex-col shadow my-4">
        <div class="bg-white flex flex-col justify-start p-6">
            <p class="text-sm pb-3">
                ${this.body} 
            </p>
        </div>
    </article>
    `
    }

}