import React from "react";
import './index.scss'
import data from "../../Data/index.json"

export default function Testimonials(){
    return(
        <div className="testimonials">
            <h1>Customer reviews and testimonials</h1>
            <div className="testimonial--container">
                <div className="testimonial--content">
                    {data?.testimonials?.map((item, index)=>(
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <div>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}