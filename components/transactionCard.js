import React from 'react';
import Image from 'next/image';
import mainphoto from '../assets/mainphoto.png';

export default function TransactionCard(props) {
  return (
    <div className="transaction-container">
      <Image src={mainphoto} alt="userphoto" height="50px" width="50px" />
      <div className="transaction-names">
        <div>{props?.payerName}</div>
        <div>{props?.payerUsername}</div>
      </div>
    </div>
  );
}
