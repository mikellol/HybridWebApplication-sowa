const URL = "https://api.disneyapi.dev/characters/"
const URL2 = "https://api.disneyapi.dev/characters/?page=12"

class Http{
    static instance = new Http()

    get_characters = async () =>{
        try {
            const request = await fetch(`${URL2}`);
            const response = await request.json();
             return response.data
          } catch (err) {
            throw Error(err);
          }
    }

    get_character = async(_id) =>{
        try {
            const request = await fetch(`${URL}${_id}`);
            const response = await request.json();
             return response
          } catch (err) {
            throw Error(err);
          }
    }
}

export default Http