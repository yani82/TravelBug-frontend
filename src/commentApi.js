class CommmentApi {
    static createComment(comment) {
        return fetch("http://localhost:3000/api/v1/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comment),        
        })
            .then(response => response.json())
    }
    
} 