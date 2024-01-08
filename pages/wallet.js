import React, { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import Loading from '../components/Loading';
import { Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import areyousure from '../assets/areyousure.png';

export default function Wallet() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await httpClient.get('/transactions');
        const filterTransactions = data.filter((transaction) => transaction.to === 'mainuser' && transaction.isPaid === true);
        setTransactions(filterTransactions);
      } catch (error) {
        console.error('failed to fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getTransactions();
  }, []);

  function calculateTotalPayments(transactions) {
    const totalAmount = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

    return totalAmount.toFixed(2); 
    
  }

  if (isLoading) return <Loading />;

  return (
    <>
      <div id="wallet">
        <h1>Your Wallet</h1>
      </div>
      <div id="wallet-total">${calculateTotalPayments(transactions)}</div>

      <div id="transfer-button">
        <Button id ="transfer" onClick={() => setModalOpen(true)}>Transfer to bank</Button>
      </div>

      <Modal show={modalOpen}>
        <Modal.Header>
          <Modal.Title>Transfer to REGIONS ***1234?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={areyousure} alt="rhonda" height="250px" width="500px" style={{ display: 'block', margin: 'auto' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Never mind
          </Button>
          <Button
            onClick={() => {
              setTransactions([{ amount: 0 }]);
              setModalOpen(false);
            }}
            variant="primary"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
