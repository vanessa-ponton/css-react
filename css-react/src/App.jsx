import "./App.css";
import "./style.scss";
import image from "./assets/2168.jpg";
import style from "styled-components";

function App() {
  const Card = style.div`
  background: rgb(77, 206, 245);
  display: block;
  text-align: center;
  `;
  return (
    <Card>
      <div>
        <h1>NessaGaming</h1>
        <img
          style={{ width: 100, height: 100 }}
          className="Image"
          src={image}
          alt="image"
        />
        <nav>
          <ul>
            <li>Bio</li>
            <li>Programme</li>
            <li>Vidéos</li>
          </ul>
        </nav>
      </div>
    </Card>
  );
}

export default App;
