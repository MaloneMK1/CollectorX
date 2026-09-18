import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <a className="app__skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
