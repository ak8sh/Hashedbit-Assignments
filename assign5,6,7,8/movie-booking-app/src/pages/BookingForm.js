import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate("/confirm", { state: form });
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Book Your Seat 🎟️</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />

        <button onClick={handleSubmit}>Confirm Booking</button>
      </div>
    </div>
  );
}

export default BookingForm;