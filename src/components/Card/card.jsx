import './card.css';

function Card({title, cover}) {
    return (
        <div className="card-container">
            <img src={cover} className="card-img"/>
            <h3 className="card-title">{title}</h3>
        </div>
    )
}

export default Card

