import React, { useState } from 'react';

function ScheduleQuote() {
  const [availableDates, setAvailableDates] = useState([]);
  const [formData, setFormData] = useState({email: '', phoneNumber: '', date: ''});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>Schedule a Quote</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label>Date</label>
        <select name="date" value={formData.date} onChange={handleChange} required>
          {availableDates.map(date => <option key={date}>{date}</option>)}
        </select>

        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default ScheduleQuote;
