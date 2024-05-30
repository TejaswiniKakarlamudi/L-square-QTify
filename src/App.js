
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Card/Card';

function App() {
  const data = {
    songs: ['ureka', 'sakai', 'mikai', ],
    image: 'https://i.ytimg.com/vi/puHlyuVXLSc/maxresdefault.jpg',
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
