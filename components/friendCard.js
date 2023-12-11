import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import userphoto from '../assets/userphoto.png';

export default function FriendCard(props) {
  return (
    <div className="friend-container">
      <Image src={userphoto} alt="userphoto" height="50px" width="50px" />
      <div className="friend-names">
        <div>{props?.name}</div>
        <div>{props?.username}</div>
      </div>
      <div id="pay-button">
        <Link href={`/payments/${props?.id}`}>Pay or Request</Link>
      </div>
    </div>
  );
}
