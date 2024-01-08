import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Image from 'next/image';
import areyousure from '../../assets/areyousure.png';

import Loading from '../../components/Loading';
import httpClient from '../../api/httpClient';
import { useRouter } from 'next/router';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export default function Payments() {
  const router = useRouter();
  const userId = router.query.id;
  const [user, setUser] = useState([]);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState();
  const [total, setTotal] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await httpClient.get(`/users?id=${router.query.id}`);
        setUser(data[0]);
      } catch (error) {
        console.error('failed to fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) getUser();
  }, [userId]);

  const handleSubmit = async () => {
    const transaction = {
      id: getRandomNumber(7, 9000),
      from: 'mainuser',
      to: user.id,
      amount: total,
      description: descriptionValue,
      date: new Date().toISOString(),
      isPaid: type === 'payment' ? true : false,
      type,
    };
    await httpClient.post('/transactions', transaction);
    router.push('/confirmation');
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <Modal show={modalOpen}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to {type === 'payment' ? 'pay' : 'request'} {user.name} ${total} for {descriptionValue}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={areyousure} alt="rhonda" height="250px" width="500px" style={{ display: 'block', margin: 'auto' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Never mind
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <div id="recipient">
        <p>To: {user.name}</p>
      </div>
      <div id="total">${total}</div>
      <div id="payment-description">
        <Form.Control value={descriptionValue} onChange={(event) => setDescriptionValue(event.target.value)} type="text" placeholder="What's it for?" />
      </div>
      <div id="payment-buttons">
        <button
          disabled={!total}
          onClick={() => {
            setModalOpen(true);
            setType('payment');
          }}
        >
          Pay
        </button>
        <button
          disabled={!total}
          onClick={() => {
            setModalOpen(true);
            setType('request');
          }}
        >
          Request
        </button>
      </div>
      <div id="calculator">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              setTotal((previous) => previous + number);
            }}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => {
            setTotal('');
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
