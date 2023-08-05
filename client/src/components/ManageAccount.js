import React, { useState } from 'react';

function ManageAccount() {
  const [accountData, setAccountData] = useState({email: '', phoneNumber: '', password: ''});

  const handleChange = (e) => {
    setAccountData({...accountData, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>Manage Your Account</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" value={accountData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={accountData.phoneNumber} onChange={handleChange} required />

        <label>New Password</label>
        <input type="password" name="password" value={accountData.password} onChange={handleChange} required />

        <button type="submit">Update Account</button>
      </form>
    </div>
  );
}

export default ManageAccount;
