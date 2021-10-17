import React from 'react';
import './Scholar.css'

const Scholar = (props) => {
    console.log(props.scholar);
    const {name, img, profession, age, country, salary} = props.scholar;
    return (
        <div>
            <div className="single-scholar">
            <img className="image" src={img} alt="" />
            <h4>{name}</h4>
            <p>Proession: {profession}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Salary: {salary}</p>
            <button>Contact</button>
            </div>
        </div>
    );
};

export default Scholar;