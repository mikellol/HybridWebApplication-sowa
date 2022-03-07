import React from "react";
import Character from "../../components/character/character";
import './home.css'
import Http from "../../lib/request";


class Home extends React.Component{
    state={
        title:"Disney Characters",
        characters:[]
    };

    componentDidMount=()=>{
        this.get_data(URL)
    };

    get_data = async (api_url) =>{
        const response= await Http.instance.get_characters()
        this.setState({characters: response})
    };

    render(){
        //const character = this.state.character
       return (
        <React.Fragment>
            <div className="backcolor">
            <h1 className="title">{this.state.title}</h1>
               {this.state.characters.map((character)=>{ 
                return <Character character={character}/>;
               })}
            </div>
        </React.Fragment>
       );
    }
}

export default Home;