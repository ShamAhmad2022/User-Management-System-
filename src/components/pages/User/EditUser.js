import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditUser() {

    const {userId} = useParams();//get whatever we passing in the url from the Routes in the app components to the element sepcified in that tag. 
    debugger;
    const initialState = {name:"", username:"", email:"", phone:"", website:""};
    const [user, setUser] = useState(initialState);

    const {name, username, email, phone, website} = user; //Object restructuring (instead )

    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);
    

    const fetchUser = async () =>{
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        setUser(response.data);
    }


    const onChangeinput = (event) => {

        setUser({...user, [event.target.name]: event.target.value });

    }

    const onFormSubmit = async (event) => {

        event.preventDefault();//prevent refreshing the page when submiting 

        if(!user.name){
            alert(`Name can not be empty !`);
            return;//so it want gonna alert all of them at once (once this gets excuted the others won't)
        }

        if(!user.username){
            alert(`Username can not be empty !`);
            return;
        }
        if(!user.email){
            alert(`Email can not be empty !`);
            return;
        }
        if(!user.phone){
            alert(`Phone can not be empty !`);
            return;
        }
    
        await axios.put(`http://localhost:4000/users/${userId}`, user);
        navigate({pathname:'/'});
    
    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto p-5'>
                <h2 className='text-center mb-4'>Edit user</h2>
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <div className='Form-group mb-3'>
                        <input type="text" className="form-control form-control-lg" placeholder="name" name="name" value={name} onChange={(event) => onChangeinput(event)} />
                    </div>
                    <div className='Form-group mb-3'>
                        <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={username} onChange={(event) => onChangeinput(event)} />
                    </div>
                    <div className='Form-group mb-3'>
                        <input type="email" className="form-control form-control-lg" placeholder="email" name="email" value={email} onChange={(event) => onChangeinput(event)} />
                    </div>
                    <div className='Form-group mb-3'>
                        <input type="text" className="form-control form-control-lg" placeholder="Phone number" name="phone" value={phone} onChange={(event) => onChangeinput(event)} />
                    </div>
                    <div className='Form-group mb-5'>
                        <input type="url" className="form-control form-control-lg" placeholder="website" name="website" value={website} onChange={(event) => onChangeinput(event)} /> 
                    </div>

                    <button type='submit' className='btn btn-primary col-12'>Edit user</button>

                </form>
            </div>
            <Link to="/" className='btn btn-dark m-4'>Back</Link>
        </div>
    )
}

export default EditUser