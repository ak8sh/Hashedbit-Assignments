import { useNavigate, useLocation } from "react-router-dom";

function MovieDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="details-wrapper">
      <div className="details-card">

        <img
          src={state?.img}
          alt={state?.name}
          className="movie-poster"
        />

        <div className="details-content">
          <h1>{state?.name}</h1>

          <p>⭐ 8.5</p>
          <p>🎭 Action</p>
          <p>🕒 2h 30m</p>

          <button onClick={() => navigate("/book")}>
            Book Seat 🎟️
          </button>
        </div>

      </div>
    </div>
  );
}

export default MovieDetails;