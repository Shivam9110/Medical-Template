import React from "react";

function Card(props) {
    
    return (<>

        <div className="cards">
            <div className="card">
                <img src={props.imgsrc}
                    alt="mypic" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{props.title} </span>
                    <h2 className="card_title"
                        style={{ color: `${props.colorwe}` }}> {props.sname}</h2>
                    <a href={props.link}
                        target="_blank">
                        <button> watch now </button>
                    </a>
                </div>
            </div>
        </div>
    </>

    )
}
export default Card;