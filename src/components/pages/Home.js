import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Table, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  // const getAllUsers = () => {

  //   axios.get("http://localhost:4000/users")
  //   .then(function(response){
  //     console.log(response.data);
  //     console.log(response.data);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });

  //   console.log(`After axios called`);

  // }


  const getAllUsersWithAwait = async () => {
    const result = await axios.get("http://localhost:4000/users");
    console.log(result.data);
    setUsers(result.data.reverse());//reverse the order og the array

    console.log(`After axios called`);
    setLoading(false);
  }

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:4000/users/${userId}`);
    getAllUsersWithAwait();
  }

  useEffect(() => {
    //getAllUsers();
    getAllUsersWithAwait();
  }, []);


  return (
    <div className='container'>
      {loading ? <Spinner animation="border" role="status" className='position-absolute top-50 start-50'/> : //or we can use this conditional statement: {users.length<1 ? 1 : 2}
        <>
          <h2 className='py-3'>User Management System</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Transactions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/users/view/${user.id}`} className="btn btn-primary ms-2">View</Link>
                      <Link to={`/users/edit/${user.id}`} className="btn btn-outline-primary ms-2">Edit</Link>
                      <Button onClick={() => deleteUser(user.id)} variant="danger" className="ms-2">Delete</Button>
                    </td>
                  </tr>
                )))

              }
            </tbody>
          </Table>
        </>}

    </div>
  )
}

export default Home