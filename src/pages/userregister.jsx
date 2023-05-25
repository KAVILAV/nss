import React, { useState } from 'react';
import axios from 'axios'; 
import '../css/userregister.css'; 

function UserRegister() {
  const [userRoll, setuserRoll] = useState('');
  const [userName, setuserName] = useState('');
  const [userMail, setuserMail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [userCPassword, setuserCPassword] = useState('');
  const [userDept, setuserDept] = useState('');
  const [userYear, setuserYear] = useState('');
  const [userSection, setuserSection] = useState('');
  const [userVolbe, setuserVolbe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userMail || !userPassword || !userRoll || !userDept || !userYear || !userSection || !userVolbe || !userCPassword) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userMail)) {
      alert('Invalid email format.');
      return;
    }

    // Check if passwords match
    if (userPassword !== userCPassword) {
      alert('Passwords do not match.');
      return;
    }

    const article = {
      user_rollno: userRoll,
      user_name: userName,
      user_mail: userMail,
      user_password: userPassword,
      user_cpassword: userCPassword,
      dept: userDept,
      yearofstudy: userYear,
      user_section: userSection,
      isVolBefore: userVolbe
    };

    axios
      .post('http://localhost:27000/user/signup', article)
      .then(function (response) {
        alert('Registered successfully');
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else if (error.message) {
          alert(error.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="suggestion">
      <label>
        Roll No:
        <input type="text" value={userRoll} onChange={(e) => setuserRoll(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={userMail} onChange={(e) => setuserMail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={userCPassword} onChange={(e) => setuserCPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Department:
        <input type="text" value={userDept} onChange={(e) => setuserDept(e.target.value)} />
      </label>
      <br />
      <label>
        Year:
        <select value={userYear} onChange={(e) => setuserYear(e.target.value)}>
        <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
      </label>
      <br />
      <label>
        Section:
        <select value={userSection} onChange={(e) => setuserSection(e.target.value)}>
        <option value="">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="Nil">Nil</option>
          </select>
      </label>
      <br />
      <label>
        Volunteer Before:
        <select value={userVolbe} onChange={(e) => setuserVolbe(e.target.value)}>
          <option value="">Select</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UserRegister;

