import React from "react";
import './quote.css'

const Quote = (props) =>{
    const{character} = props
    return(
        
        <React.Fragment>
            
        <div className="Quote__container">
           
                    <img
                        className="Quote__image"
                        src={character.image}
                        alt={character.character}
                        />
            <div className="Quote__data">
            <h2 className="Quote__name">{props.character.character}</h2>
            <h3 className="Quote__name">{props.character.quote}</h3>
            </div>
        </div> 
        </React.Fragment>
    )
}

export default Quote