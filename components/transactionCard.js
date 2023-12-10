import React from 'react';
import Image from 'next/image';
import userphoto from '../assets/userphoto.png';

export default function TransactionCard(props) {
  return (
    <div id="transaction-container">
        <Image src={userphoto} alt="userphoto" height="45px" width="50px" />
        <div className="transaction-info">
          <div>{props?.date}</div>
          <div>{props?.to?.id === 'mainuser' ? props?.from?.name : props?.to?.name}</div>
          <div>{props?.description}</div>
        </div>
        <div id="transaction-amount">
          <div className={props.to?.id === 'mainuser' ? 'green' : 'red'}>{props.to?.id === 'mainuser' ? '+' : '-'}{props?.amount}</div>
        </div>
    </div>
  );
}
