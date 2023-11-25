/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div id="app">
      <NavBar />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
