import './App.css'
import Navbar from './components/Navbar';
import RoutesContainer from './components/Container';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <div id="container">
    <h1>Hello React Router!</h1>
    <Navbar />
    <RoutesContainer />
    <Footer />
      </div>
    </>
  )
}

export default App
