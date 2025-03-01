import React, {useEffect,useState}from 'react';
import axios from 'axios';

import Forms from './Form';

function Listuser(){
const[list, setList] = useState([]);
useEffect(() => {
    axios.get('http://localhost:5000/users')
    
    .then((response) => {setList(response.data);})
    .catch((error) => {
    
        console.log(error);});
    ;

},[]);
const handleUserAdded=(newUser)=>{
    setList([...list,newUser]);
}

return(<div className="container mt-4">
    <h2 className="mb-3">User List</h2>

    {/* Bootstrap Table */}
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>

     
  </div>
);
};
export default Listuser;