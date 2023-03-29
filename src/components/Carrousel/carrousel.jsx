import {useState} from "react";
import arrowRight from "../../assets/ArrowRight.png"
import arrowLeft from "../../assets/ArrowLeft.png"

function Carrousel ({pictures}) {
    const [index, setIndex] = useState(0);
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carrousel">
            <img onClick = {handlePrevious} src= {arrowLeft} alt="précédente" className="fleche"/>
            <img src= {pictures} className="imageLogement" alt="Logement" key={index}/>
            <img onClick = {handleNext} src= {arrowRight} alt="suivante" className="fleche"/>
        </div>
    )
}

export default Carrousel