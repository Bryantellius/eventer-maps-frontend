import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      {films.map(({ title }) => {
        return (
          <div className="card">
            <h2>{title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
