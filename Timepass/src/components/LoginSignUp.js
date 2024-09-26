import React, { useState } from 'react';
import axios from 'axios';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle between login and sign-up
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/register';

    try {
      const { data } = await axios.post(url, formData);
      console.log(data); // Use this data (e.g., token) as needed
      // Redirect or do something after successful login/signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Show username field only in sign-up */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
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