import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.cardImg} alt="" className="cardImg" />
            <div className="cardContent">
                <p className="cardTitle">
                    {props.cardTitle}
                </p>
                <p className="cardBody">
                    {props.cardContent}
                </p>
            </div>
                <a href={props.btnSource} className="cardBtn">See More</a>

        </div>
    );
}

export default Card;