import './card.css';

function Card({id, title, cover}) {
    return (
        <div className="card">
            <div className="card-container" id={id}>
                <img src={cover} className="card-img" alt="logements"/>
                <h3 className="card-title">{title}</h3>
            </div>
        </div>
    )
}

export default Card

