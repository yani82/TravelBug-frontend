class Comment {
    static allComments = [] 
    constructor(comment) {
        this.id = comment.id;
        this.description = comment.description;
        this.username = comment.username;  
        this.country_id = comment.country_id;
        Comment.allComments.push(this) 
    }

    renderComment() {
        // document.querySelector("#postcomment-container").innerHTML = ` 
        return `
        <article id="comment-${this.id}" class="flex flex-col shadow my-4">
        <div class="bg-white flex flex-col justify-start p-6">
            <p class="text-sm pb-3">
                Posted by: ${this.username}
                <br> 
                Comment: ${this.description}
                <br>
                Country: ${this.country_id} 
            </p>
        </div>
    </article>
    `
    }

    static createComment(comment) {
        return CommmentApi.createComment(comment)
    }

}