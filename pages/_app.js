/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
