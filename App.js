import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );
}

function Mycomponent() {
  const appName = "MyChatApp";
  const studentname = "Tanmay Wankhede";
  const studentid = "210940520106";

  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const handlemsg = (e) => {
    setmsg(e.target.value);
  };


  const adduser = async () => {
    if(msg === "")
    {
      alert("VALIDATION FAILS");
      return;
    }

    const url = "http://localhost:4000/adduser";

    const data = {
      msg: msg
    };
    
    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newlist);
    setmsg("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/user";
    const result = await fetch(url);
    const list = await result.json();

    const newlist = [...list];
    setlist(newlist);
  };
  useEffect(() => getUser(), []);


 return (
  <div>
    <div className="d-flex align-items-center mb-2 bg-secondary p-2">
      <h1 className="p-2 fs-2 text-light">
        <strong>{appName}</strong>
      </h1>
      <h6 className="text-light">
        <em>
          by {studentname} {studentid}
        </em>
      </h6>
    </div>
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        value={msg}
        placeholder="Lets chat here..."
        onchange={handlemsg}/>

      <input 
        className="btn btn-secondary w-25"
        type="button"
        value="SEND"
      />      
    </div>
  </div>
 );

  
}