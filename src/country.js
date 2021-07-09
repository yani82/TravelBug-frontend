class Country {
    static allCountries = [] 
    constructor({name, id}) {
        this.name = name,
        this.id = id;
        // debugger; 
        Country.allCountries.push(this) 
    }

    static findByName(countryName) {
        return Country.allCountries.find(country => {
           return country.name === countryName 
        })
    }

    findTravelbugs() {
        return Travelbug.allTravelbugs.filter(travelbug => {
            return travelbug.country_id === this.id 
        }) 
    }

    findComments() {
        // debugger
        // if (!document.querySelector("#postcomment-container").empty()?) {
        //     document.querySelector("#postcomment-container").reset()
        // }
        return Comment.allComments.filter(comment => {
            return comment.country_id === this.id 
        })
    }
}


