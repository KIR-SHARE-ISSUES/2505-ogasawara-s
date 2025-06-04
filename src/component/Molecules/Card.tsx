import  Base  from "../Atoms/Base";

const Card = () => {
    return (
        <>
           <div className="card-container">
                <div className="card-text">Basic card</div>
                <Base size="small" color="primary">LEARN MORE</Base>
           </div>
        </>
    );
};

export default Card;