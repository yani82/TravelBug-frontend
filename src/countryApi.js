class CountryApi {

    // static getTravelbugs() {
    //     fetch(`${this.travelbugs}/comments/countries`)
    //     .catch(err => alert(err)) 
    // }

    static getCountries() {
        return fetch(`${BASE_URL}/v1/countries`)
            .then(res => res.json())
    }

    static getCountry(id) {
        return fetch(`${BASE_URL}/v1/countries/${id}`)
            .then(res => res.json())
    }

}