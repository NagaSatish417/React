//import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Likes from './components/Likes';
import ListRender from './components/ListRender';
import ObjectRender from './components/ObjectRender';

function App() {
  return (
    <div className="App">
      <Movies heroName="jr.ntr" villanName="Asis"/>
      <Movies heroName="Tej" villanName="Vijaysetupathi"/>
      <Movies heroName="Balayya" villanName="Prakashraj">
        <p>Likes:100k</p>
        </Movies>
        <Likes/>
        <ListRender/>
        <ObjectRender/>
    </div>
  );
}

export default App;
