import React from "react";

const Card = ({digito}) => {

    return(
    <div className="card mb-3 bg-dark m-1 d-flex align-items-center justify-content-center" style={{width:"6rem", height: "5rem"}}>
        <h5 className="card-title text-center text-white fs-1 text">{digito}</h5>
    </div>
    )
};

const SecondsCounter = (props) => {
    return(
        <div className="d-flex justify-content-center" >
           
            <Card digito={Math.floor(props.counter/100000 %10)} />
            <Card digito={Math.floor(props.counter/10000 %10)} />
            <Card digito={Math.floor(props.counter/1000 %10)} />
            <Card digito={Math.floor(props.counter/100 %10)} />
            <Card digito={Math.floor(props.counter/10 %10)} />
            <Card digito={props.counter %10} />
        </div>   
    )
}

export {Card, SecondsCounter};