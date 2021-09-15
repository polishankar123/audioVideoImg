import React from "react";
import AudioFile from '../rain-thunder.mp3'
const Header = () =>{
    return(
        <div>
        <center>
            <audio controls>
             <source src={AudioFile} type="audio/ogg"></source>
            </audio>
        </center>
        </div>
    )
}

export default Header;