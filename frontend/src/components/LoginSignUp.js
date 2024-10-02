import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Profile from './component/profile'


const LoginSignUp = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage(''); // Clear message on form switch
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Hardcoded credentials for testing
      const hardcodedUsername = 'admin';
      const hardcodedPassword = 'admin';

      if (formData.username === hardcodedUsername && formData.password === hardcodedPassword) {
        setMessage('Login successful!');
        navigate('/profile')
      } else {
        setMessage('Invalid username or password. Please try again.');
      }
    } else {
      // Handle registration logic here if needed
      setMessage('Registration is currently disabled for testing.');
    }

    // If you still want to call your API for registration
    // const url = 'http://localhost:5000/api/users/register';
    // try {
    //   const { data } = await axios.post(url, formData);
    //   console.log(data);
    //   setMessage('Registration successful!');
    // } catch (error) {
    //   console.error(error);
    //   setMessage('Registration failed.');
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

        {!isLogin && ( 
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
        )}

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button onClick={toggleForm} className="text-blue-500 hover:underline">
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;