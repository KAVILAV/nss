/* import React,{useState} from 'react'
import axios from 'axios';

function Volunteer() {
    const [volid ,setvolid]= useState('');
   const [date,setdate] = useState('');
   const [hours,sethours] = useState('');
   const [location,setlocation] = useState('');
   const [activity,setactivity] = useState('');
   const [slotava,setslotava] = useState('');
   const [desc,setdesc] = useState('');
   
const handleSubmit = (e)=> {
    e.preventDefault();
   const article={
    vol_id: volid,
    date:date,
    hours:hours,
    location:location,
    activity:activity,
    slots_available:slotava,
    description:desc,
   }
   axios.post("http://localhost:27000/admin/volunteer",article)
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
    <form onSubmit={handleSubmit}>
        Volunter id: <input type="text" value={volid } onChange={(e)=>setvolid(e.target.value)}/> <br />
        Date: <input type="text" value={date } onChange={(e)=>setdate(e.target.value)}/> <br />
        Hours: <input type="text" value={hours } onChange={(e)=>sethours(e.target.value)}/> <br />
        Location: <input type="text" value={location} onChange={(e)=>setlocation(e.target.value)}/> <br />
        Activity: <input type="text" value={activity} onChange={(e)=>setactivity(e.target.value)}/> <br />
        Slots Available: <input type="text" value={slotava} onChange={(e)=>setslotava(e.target.value)}/> <br />
        Description: <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
        <input type="submit" value="Submit" />

    </form>
   
  )
}

export default Volunteer */

/* import React, { useState } from 'react';
import axios from 'axios';
import '../css/vol.css'

function Volunteer() {
  const [volid, setvolid] = useState('');
  const [date, setdate] = useState('');
  const [hours, sethours] = useState('');
  const [location, setlocation] = useState('');
  const [activity, setactivity] = useState('');
  const [slotava, setslotava] = useState('');
  const [desc, setdesc] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!volid || !date || !hours || !location || !activity || !slotava){
        alert('Please fill in all fields.');
        return; 
    }
    
    const article = {
      vol_id: volid,
      date: date,
      hours: hours,
      location: location,
      activity: activity,
      slot_available: slotava,
      description: desc,
    };

    axios
      .post('http://localhost:27000/admin/volunteer', article)
      .then(function (response) {
        alert('Registered successfully');
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else if (error.message) {
          setError(error.message);
        } else {
          setError('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      Volunteer id: <input type="text" value={volid} onChange={(e) => setvolid(e.target.value)} /> <br />
      Date:  <input type="text" value={date} onChange={(e) => setdate(e.target.value)} placeholder='yyy-mm-dd'/> <br /> 
       Hours: <input type="text" value={hours} onChange={(e) => sethours(e.target.value)} /> <br />
      Location: <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} /> <br />
      Activity: <input type="text" value={activity} onChange={(e) => setactivity(e.target.value)} /> <br />
      Slots Available: <input type="text" value={slotava} onChange={(e) => setslotava(e.target.value)} /> <br />
      Description: <textarea rows='5' value={desc} onChange={(e) => setdesc(e.target.value)} /> <br />
     <input type="submit" value="Submit" />
    </form>
  );
}

export default Volunteer; */
import React, { useState } from 'react';
import axios from 'axios';
import '../css/userregister.css';

function Volunteer() {
  const [volid, setvolid] = useState('');
  const [date, setdate] = useState('');
  const [hours, sethours] = useState('');
  const [location, setlocation] = useState('');
  const [activity, setactivity] = useState('');
  const [slotava, setslotava] = useState('');
  const [desc, setdesc] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!volid || !date || !hours || !location || !activity || !slotava) {
      setError('Please fill in all fields.');
      return;
    }

    const article = {
      vol_id: volid,
      date: date,
      hours: hours,
      location: location,
      activity: activity,
      slot_available: slotava,
      description: desc,
    };

    axios
      .post('http://localhost:27000/admin/volunteer', article)
      .then(function (response) {
        alert('Registered successfully');
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else if (error.message) {
          setError(error.message);
        } else {
          setError('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="suggestion">
      {error && <div className="error">{error}</div>}
      <label>
        Volunteer id:
        <input type="text" value={volid} onChange={(e) => setvolid(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setdate(e.target.value)} placeholder="yyy-mm-dd" />
      </label>
      <br />
      <label>
        Hours:
        <input type="text" value={hours} onChange={(e) => sethours(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} />
      </label>
      <br />
      <label>
        Activity:
        <input type="text" value={activity} onChange={(e) => setactivity(e.target.value)} />
      </label>
      <br />
      <label>
        Slots Available:
        <input type="text" value={slotava} onChange={(e) => setslotava(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea rows="5" value={desc} onChange={(e) => setdesc(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Volunteer; 
/* import React, { useState } from 'react';
import axios from 'axios';
import '../css/userregister.css'; 
function Volunteer() {
  const [volid, setvolid] = useState('');
  const [date, setdate] = useState('');
  const [hours, sethours] = useState('');
  const [location, setlocation] = useState('');
  const [activity, setactivity] = useState('');
  const [slotava, setslotava] = useState('');
  const [desc, setdesc] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!volid || !date || !hours || !location || !activity || !slotava) {
      alert('Please fill in all fields.');
      return;
    }

    const article = {
      vol_id: volid,
      date: date,
      hours: hours,
      location: location,
      activity: activity,
      slot_available: slotava,
      description: desc,
    };

    axios
      .post('http://localhost:27000/admin/volunteer', article)
      .then(function (response) {
        alert('Registered successfully');
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else if (error.message) {
          setError(error.message);
        } else {
          setError('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="volid" className="form-label">
          Volunteer ID:
          <input
            type="text"
            className="form-control"
            id="volid"
            value={volid}
            onChange={(e) => setvolid(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date:
          <input
            type="text"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
            placeholder="yyyy-mm-dd"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="hours" className="form-label">
          Hours:
          <input
            type="text"
            className="form-control"
            id="hours"
            value={hours}
            onChange={(e) => sethours(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location:
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="activity" className="form-label">
          Activity:
          <input
            type="text"
            className="form-control"
            id="activity"
            value={activity}
            onChange={(e) => setactivity(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="slotava" className="form-label">
          Slots Available:
          <input
            type="text"
            className="form-control"
            id="slotava"
            value={slotava}
            onChange={(e) => setslotava(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description:
          <textarea
            className="form-control"
            id="desc"
            rows="5"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          ></textarea>
        </label>
      </div>
      <input type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Volunteer;
 */


