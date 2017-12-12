var api = {
    getRovers(){
        var url = "https://facebook.github.io/react-native/movies.json";
        return fetch(url).then((res)=>res.json());

    }
}
module.exports = api;