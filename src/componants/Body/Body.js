import React, { useEffect, useState } from 'react';
import Invitation from '../Invitation/Invitation';
import Scholar from '../Scholar/Scholar';
import './Body.css'

const Body = () => {
    const [scholars, setScholars] = useState([]);
    const [invite, setInvite] = useState([]);

    useEffect(() => {
        fetch('./scholar.json')
            .then(res => res.json())
            .then(data => setScholars(data));
    }, [])

    const handleAddtoInvite = (scholar) => {
        const newInvite = [...invite, scholar];
        setInvite(newInvite);
    }

    return (
        <div className="sites-body">
            <div className="scolars-container">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.id}
                        scholar={scholar}
                        handleAddtoInvite={handleAddtoInvite}
                    ></Scholar>)
                }
            </div>
            <div className="invitation-container">
                <Invitation key={invite.id} invite={invite}></Invitation>
            </div>
        </div>
    );
};

export default Body;