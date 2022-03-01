import React from "react";
import { Link } from "react-router-dom";
import './character.css'

const Character = (props) =>{
    const{character} = props
    //console.log(props)
    return(
        <React.Fragment>
            
        <div className="Character__container">
            <Link
                className="Character__image"
                to={`/character/${character.id}`}
                >
                    <img
                        className="Character__image"
                        src={character.image}
                        alt={character.name}
                        />
            </Link>
            <div className="Character__data">
            <h2 className="Character__name">{props.character.name}</h2>
            <h3 className="Character__status">{props.character.status}</h3>
            </div>
        </div> 
        </React.Fragment>
    )
}

export default Character