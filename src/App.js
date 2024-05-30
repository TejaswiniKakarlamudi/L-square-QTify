
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Card/Card';
import img from './Assets/vibrating-headphone 1.svg';
function App() {
  const data = {
    songs: ['ureka', 'sakai', 'mikai', ],
    img: img,
    follows: 21,
    title:'Welcome'

  }
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Cards type = 'album' data={data}/>
    </div>

  );
}

export default App;
