import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Scholar.css'

const Scholar = (props) => {
    const { name, img, profession, age, country, salary } = props.scholar;
    return (
        <div>
            <div className="single-scholar">
                <img className="image" src={img} alt="" />
                <h4>{name}</h4>
                <p>Proession: {profession}</p>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}</p>
                <button onClick={() => props.handleAddtoInvite(props.scholar)}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> Contact</button>
            </div>
        </div>
    );
};

export default Scholar;