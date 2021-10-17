import React from 'react';
import './Invitation.css'

const Invitation = (props) => {
    const { invite } = props;
    let invitedScholar = [];
    let total = 0;
    for (const scholar of invite) {
        total = total + scholar.salary;
        invitedScholar = [...invitedScholar, <p key={scholar.id}>{scholar.name}</p>];
    }
    return (
        <div className="invitation">
            <h2>Invitaion</h2>
            <hr />
            <h4>Invited Scholars : {invite.length}</h4>
            <h4>Total Cost : {total}/-</h4>
            <br />
            <h2>Scholars</h2>
            <hr />
            <h4>{invitedScholar}</h4>
        </div>
    );
};

export default Invitation;