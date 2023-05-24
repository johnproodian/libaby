import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { ADD_USER } from '../utils/mutations';
import { GET_USERS } from '../utils/queries';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', location: '' });

    const [addUser, { error }] = useMutation(ADD_USER);
    const {loading, data } = useQuery(GET_USERS);
  
    const handleChange = (evt) => {
      let { name, value } = evt.target;
      console.log(name);
      if (name.toString() === "location") {
        value = Number(value);
      }
  
      setFormState({
        ...formState,
        [name]: value
      });
    }
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(typeof formState.location)

  
      try {
        const { data } = await addUser({
          variables: { ...formState }
        });
        console.log(data);
  
        // Auth.login(data.addUser.token);
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input name="username" placeholder="username" onChange={handleChange}></input>
                <input name="email" placeholder="email" onChange={handleChange}></input>
                <input name="password" placeholder="password" onChange={handleChange}></input>
                <input name="location" placeholder="zipcode" onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            {loading ? <div> loading... </div> : <div>{data.users[1].username}</div>}
        </>
        
    )
};

export default Signup;

