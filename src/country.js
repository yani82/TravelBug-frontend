class Country {
    static allCountries = [] 
    constructor( {name, id}) {
        this.name = name,
        this.id = id;
        // debugger; 
        Country.allCountries.push(this) 
    }
}
