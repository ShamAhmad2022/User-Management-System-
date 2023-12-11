import React from 'react'
import {Alert} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Notfound.css';

function NotFound() {
  return (
    <div className='hide-nav'>
      <h1 className='text-danger m-4'>Page not found :'(</h1>
      
      <Alert variant={'danger'}>
        Page Not Found!!! 
        <NavLink id='colorRed' to="/"> click here to go back to the Home.</NavLink>
      </Alert>      
    </div>
  )
}

export default NotFound