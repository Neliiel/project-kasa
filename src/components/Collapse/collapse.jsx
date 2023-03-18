import { useState } from "react";
import arrowUp from "../../assets/ArrowUp.png";
import arrowDown from "../../assets/ArrowDown.png";


function Collapse({aboutTitle, aboutText}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
            <div className="collapse-item">
                <div className="container-collapse-title" onClick={() => setIsOpen(!isOpen)}>
                    <p className="collapse-title">{aboutTitle}</p>
                    <img src={isOpen? arrowUp : arrowDown} alt="arrow"/>
                </div>
                {isOpen && <div className="container-collapse-text">
                   <p className="collapse-text">{aboutText}</p>
                </div>
                }
            </div>
    )
}

export default Collapse