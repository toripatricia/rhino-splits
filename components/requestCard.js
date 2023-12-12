import React from 'react';
import Image from 'next/image';
import userphoto from '../assets/userphoto.png';

export default function RequestCard(props) {
  return (
    <div id="request-container">
      <Image src={userphoto} alt="userphoto" height="45px" width="50px" />
      <div id="transaction-info">
        <div>{props?.date}</div>
        <div>{props?.to?.id === 'mainuser' ? props?.from?.name : props?.to?.name}</div>
        <div>{props?.description}</div>
      </div>
      <div id="transaction-amount">${props?.amount}</div>
      <button>Nudge</button>
      <button onClick={() => props.handleDelete(props?.id)}>Cancel Request</button>
    </div>
  );
}
