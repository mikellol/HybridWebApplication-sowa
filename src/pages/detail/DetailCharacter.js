import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Http from "../../lib/request";
import './Detail.css'

const DetailCharacter = () =>{
    const {_id} = useParams();
    const [character,setCharacter] = useState({});


    useEffect(()=>{
        const fetchCharacter = async()=>{
            const character = await Http.instance.get_character(_id);
            setCharacter(character);
        }
        fetchCharacter();
    })

    return(
        <React.Fragment>
            <body>
            <div className="Detail__container">
                    <div className="Details_img">
                        <img src={character.imageUrl} alt={character.name} />
                    </div>
                    <div className="Details__data">
                        <h1>{character.name}</h1>
                    <div className="Data__row">
                            <h3>Show:</h3>
                            <p>{character.tvShows || "NA"}</p>
                    </div>
                    <div className="Data__row">
                        <h3>Film:</h3>
                        <p>{character.films || "NA"}</p>
                    </div>
                       
                        
                    </div>
                </div>
            </body>
        </React.Fragment>
    )
}

export default DetailCharacter;
