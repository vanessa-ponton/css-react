import "./App.css";
import './style.scss';
import image from "./assets/2168.jpg";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>Bio</li>
          <li>Programme</li>
          <li>Vidéo</li>
        </ul>
      </nav>
    <h1>NessaGaming</h1>
    <img style={{ width: 100, height: 100 }}className="Image" src= {image} alt="image"/>
    </div>
  )
}

export default App;
git