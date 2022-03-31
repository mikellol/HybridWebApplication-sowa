import React from "react";
import { Link } from "react-router-dom";
import './character.css'

const Character = (props) =>{
    const{character} = props
    return(
        <React.Fragment>
            
        <div className="Character__container">
            <img className="Character__image"
                src={character.image}
                alt={character.name}/>
            <div className="Character__data">
           


            <h3 className="Character__name">{props.character.name}</h3>
            <h3 className="Character__name">{props.character.gender}</h3> 


            </div>
        </div> 
        </React.Fragment>
    )
}

export default Character
