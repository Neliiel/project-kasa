import HomeBanner from "../components/Banner/banner";
import Card from "../components/Card/card"
import logements from "../datas/logements.json"
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="home">
            <HomeBanner />
            <div className="card">
                {logements.map(data => (
                    <Link to={`/logement/${data.id}`} className="link-card">
                        <Card key={`card-${data.id}`} id={data.id} title={data.title} cover={data.cover} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home