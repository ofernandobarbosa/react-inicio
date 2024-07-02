import './styles.css'

export const PostCard = ({ cover, title, id, body }) => (
        <div className='post'>
            <img src={cover} alt={title} />
            <div key={id} className='post-content'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
