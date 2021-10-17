import React, { useEffect, useState } from 'react';
import Scholar from '../Scholar/Scholar';
import './Body.css'

const Body = () => {
    const [scholars, setScholars] = useState([]);

    useEffect(() => {
        fetch('./scholar.json')
            .then(res => res.json())
            .then(data => setScholars(data));
    }, [])

    return (
        <div className="sites-body">
            <div className="scolars-container">
                {
                    scholars.map(scholar => <Scholar scholar={scholar}></Scholar>)
                }
            </div>
            <div className="invitation-container">
                <h2>Invitaion</h2>
                <h4>invited person:</h4>
            </div>
        </div>
    );
};

export default Body;