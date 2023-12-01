import Image from 'next/image';
import Link from 'next/link';
import mainphoto from '../assets/mainphoto.png';
import { Button } from 'react-bootstrap';

function Home() {
  const user = { displayName: 'Tori' };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        padding: '30px',
        maxWidth: '414px',
        margin: '0 auto',
      }}
    >
      <div id="greeting">
        <h1>Hello {user.displayName}! </h1>
      </div>

      <div id="main-photo">
        <Image src={mainphoto} alt="mainphoto" height="250px" width="250px" />
      </div>

      <div id="friends">
        <Link href="/friends">
          <Button id="friend-button">Your Friends</Button>
        </Link>
      </div>
      <div id="transaction-history">
        <Link href="/history">
          <Button id="history-button">Your Transaction History</Button>
        </Link>
      </div>
      <div id="payment-requests">
        <Link href="/requests">
          <Button id="request-button">Your Payment Requests</Button>
        </Link>
      </div>
      <div id="settings">
        <Link href="/settings">
          <Button id="settings-button">Settings</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
