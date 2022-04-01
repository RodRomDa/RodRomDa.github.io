export default function Vote(props) {
    return <div className="vote">
                <i className="far fa-thumbs-up"></i>
                <div className="count">{props.likes}</div>
           </div>
}