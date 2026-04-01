import { useNavigate } from "react-router-dom";
import chainsaw from "../images/cman.jpg";
import Spider from "../images/Spider.jpg";
import dhuran from "../images/dhurandhar.jpg";
import f1 from "../images/f1.jpg";


const movies = [
  { id: 1, name: "ChainSaw Man", img: chainsaw },
  { id: 2, name: "Spider-Man: Brand New Day", img: Spider },
  { id: 3, name: "F1", img: f1 },
  { id: 4, name: "Dhurandhar: The Revenge", img: dhuran },
  { id: 4, name: "Dhurandhar: The Revenge", img: dhuran },
];

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Now Showing 🎬</h2>

      <div className="movie-grid">
        {movies.map((m) => (
          <div
            key={m.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${m.id}`, { state: m })}
          >
            <img src={m.img} alt={m.name} />
            <div className="overlay">
              <p>{m.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;