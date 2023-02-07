import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card--container">
                <img src={props.img}/>
                <div className="card--tekst">
                    <span><p><img className="tag--icon" src="./components/tag.png"></img> {props.location}  <a src="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="map--a">View on Google Maps</a></p></span>
                    <span><h1>{props.title}</h1></span>
                    <span className="date"><p>{props.startDate} - {props.endDate}</p></span>
                    <span><p>{props.description}</p></span>
                </div>
            </div>
            <span className="line"><hr/></span>
        </div>
    )
}