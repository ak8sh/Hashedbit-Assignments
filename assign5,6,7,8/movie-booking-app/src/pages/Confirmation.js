import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="container">
      <div className="confirm-card">
        <h2>Booking Confirmed!</h2>

        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {state?.name}</p>
        <p><strong>Email:</strong> {state?.email}</p>
        <p><strong>Mobile:</strong> {state?.mobile}</p>
      </div>
    </div>
  );
}

export default Confirmation;