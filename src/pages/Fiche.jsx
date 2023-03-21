import Carrousel from "../components/Carrousel/carrousel"
import Tag from "../components/Tag/tag"
import logementData from "../datas/logements.json"
import { useParams } from "react-router-dom"

function Fiche () {
    const id= useParams();
    const ficheLogement = logementData.find(logement => logement.id === id.id);
    return (
        <div>
            <div className="carrousel">
                <Carrousel picture={ficheLogement.pictures}/>
            </div>
            <Tag />
        </div>
    )
}

export default Fiche