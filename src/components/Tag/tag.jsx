import './tag.css'

function Tag ({tags}) {
    return (
        <div className="tag-container">
            <p className="tag-name">{tags}</p>
        </div>
    )
}

export default Tag