/* 
import React, { useState } from 'react';
import axios from 'axios';

function Userlogin() {
  const [userdata, setUserData] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:27000/admin/getall')
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {userdata.map((data) => (
        <div key={data.user_rollno}>
          <p>Email: {data.user_mail}</p>
          <p>Name: {data.user_name}</p>
          <p>Mail:{data.user_mail} </p>
          <p>Password:{data.user_password}</p>
          <p>Dept:{data.dept}</p>
          <p>Year:{data.yearofstudy}</p>
          <p>Section:{data.user_section}</p>
          <p>Volunteer Before:{data.isvolBefore}</p>
          </div>
      ))}
    </>
  );
}

export default Userlogin */



import React, { useState } from 'react';
import axios from 'axios';
import '../css/Userlogin.css'; 

function Userget() {
  const [userdata, setUserData] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:27000/admin/getall')
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <table className="user-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Department</th>
            <th>Year</th>
            <th>Section</th>
            <th>Volunteer Before</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((data) => (
            <tr key={data.user_rollno}>
              <td>{data.user_rollno}</td>
              <td>{data.user_name}</td>
              <td>{data.user_mail}</td>
              <td>{data.user_password}</td>
              <td>{data.dept}</td>
              <td>{data.yearofstudy}</td>
              <td>{data.user_section}</td>
              <td>{data.isvolBefore}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Userget;