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
}