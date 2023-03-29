import Carrousel from "../components/Carrousel/carrousel"
import Tag from "../components/Tag/tag"
import logementData from "../datas/logements.json"
import { useParams } from "react-router-dom"

function Fiche () {
    const id= useParams();
    const ficheLogement = logementData.filter(data => data.id === id.id)
    
    return (
        <div className="ficheLogement">
            <Carrousel pictures={ficheLogement.pictures}/>
            <Tag tags={ficheLogement.tags}/>
        </div>
    )
}

export default Fiche