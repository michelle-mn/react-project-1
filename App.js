import React from "react"
import Card from "./components/Card"
import Nav from "./components/Nav"
import data from "./data"

export default function App() {  
    const cards = data.map(item => {
        return (
            <Card
                key={item.key}
                location={item.location}
                maps={item.googleMapsUrl}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                img={item.imageUrl}
            />
        )
    })
    
    return (
        <div>
            <Nav/>
            {cards} 
        </div>
    )
}