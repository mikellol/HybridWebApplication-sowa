import React from "react";
import Character from "../../components/character/character";
import Quote from "../../components/character/quote";
import './home.css'
import Http from "../../lib/request";


class Home extends React.Component{
    state={
        titleQuote:"Simpsons random quote",
        titleChar:"Simpsons characters",
        characters:[],
        
        quotes:[]
    };
    

    componentDidMount=()=>{
        this.get_data(URL)
        this.get_quote(URL)
    };

    get_data = async () =>{
        const response= await Http.instance.get_characters()
        this.setState({characters: response})
    };
    get_quote = async () =>{
        const response2= await Http.instance.get_quote()
    this.setState({quotes: response2})
    };
    
    
    render(){
        //const character = this.state.character
       return (
        <React.Fragment>
            
            <div className="backcolor">
            <h1 className="title">{this.state.titleQuote}</h1>
               {this.state.quotes.map((quote)=>{ 
                return <Quote character={quote}/>;
               })}
            </div>
            <div className="backcolor">
            <h1 className="title">{this.state.titleChar}</h1>
               {this.state.characters.map((character)=>{ 
                return <Character character={character}/>;
               })}
            </div>
        </React.Fragment>
        
       );
    }
}

export default Home;