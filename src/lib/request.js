const URL = "https://simpsons-api-sowa.herokuapp.com/characters/" //Team's api url
const URLq= "https://simpsons-quotes-api.herokuapp.com/quotes?count=1" //Changing the count value will show a certain quantity of quotes

class Http{
    static instance = new Http()

    get_quote = async () =>{
        try {
            const request = await fetch(`${URLq}`);
            const response = await request.json();
             return response
          } catch (err) {
            throw Error(err);
          }
    }

    get_characters = async () =>{
      try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response.results
    } catch (err) {
        throw Error(err);
    }
  }

}

export default Http