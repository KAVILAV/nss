
import React from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function Adminlogin() {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    const url = `http://localhost:27000/admin/signin/${encodeURIComponent(email)}/${encodeURIComponent(pwd)}`;
    axios
      .get(url)
      .then(function (response) {
        alert('successfully');
        navigate('/register');
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
    <>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN FORM</h2>
        <br />
        email:
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        password:
        <input
          type="password"
          value={pwd}
          name="email"
          onChange={(e) => setPwd(e.target.value)}
        />{' '}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Adminlogin;

