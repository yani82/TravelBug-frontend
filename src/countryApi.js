// move the logic to fetch the travelbugs to the TravelbugApi
class TravelbugApi {
    travelbugs = []
    comments = [] 

    getTravelbugs() {
        console.log('something')
        fetch(this.travelbugs + '/comments' + '/countries')
        .then(res => console.log(res))
        .then(data => console.log(data))
        .catch(err => allert(err)) 
    }
    
    renderTravelbugs() {
        
    }

    renderComments() {

    }

    renderCountries() {

    }
}