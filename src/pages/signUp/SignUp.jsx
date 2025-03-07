import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import Logo from '../../assets/images/logo.png';
import SignUpBackground from '../../assets/images/signup_background.png';

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    role: 'REGULAR_USER',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const checkPassword = (e) => {
    const confirmPassword = e.target.value;
    setUserData((prev) => ({ ...prev, confirmPassword }));
    setPasswordMatch(userData.password === confirmPassword);
  };

  const isFormValid = () => {
    const { firstName, lastName, username, email, password } = userData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    if (!firstName || !lastName || !username || !email || !password) return 'All fields are required';
    if (!emailRegex.test(email)) return 'Invalid email format';
    if (password.length < 6) return 'Password must be at least 6 characters';
    if (!passwordMatch) return 'Passwords do not match';
    if (!termsAccepted) return 'You must accept the terms & conditions';
    return null;
  };

  useEffect(() => {
    const validationError = isFormValid();
    setError(validationError || '');
    setBtnDisabled(!!validationError);
  }, [userData, termsAccepted, passwordMatch]);

  const submitData = async () => {
    try {
      const { confirmPassword, ...finalUserData } = userData;
      const response = await ApiService.registerUser(finalUserData);
      console.log(response);
      if (response && response.status === 201) {
        console.log('User registered successfully:', response.message);
        setUserData({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          role: 'REGULAR_USER',
        });
        navigate('/login');
      } else {
        setError(response.message || 'User registration failed');
      }
    } catch (error) {
      if (error.status === 409) {
        setError('Username already exists');
      } else {
        setError(error.response?.data?.message || 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen h-full flex flex-col md:flex-row bg-gray-100 register">
      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200">
        <img src={SignUpBackground} alt="Sign Up Background" className="object-cover w-full h-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <div className="w-full p-[20px] max-w-[600px]">
          <h1 className="text-left text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>

          <div className="form">
            <div className="flex gap-4">
              <InputField label="First Name" name="firstName" value={userData.firstName} onChange={handleInputChange} />
              <InputField label="Last Name" name="lastName" value={userData.lastName} onChange={handleInputChange} />
            </div>
            <div className="flex gap-4">
              <InputField label="Username" name="username" value={userData.username} onChange={handleInputChange} />
              <InputField label="Email" name="email" value={userData.email} onChange={handleInputChange} type="email" />
            </div>
            <div className="flex gap-4">
              <InputField label="Password" name="password" value={userData.password} onChange={handleInputChange} type="password" />
              <InputField label="Confirm Password" name="confirmPassword" value={userData.confirmPassword} onChange={checkPassword} type="password" />
            </div>

            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I’ve read and agree to <a href="#" className="text-blue-600 hover:underline">Terms & conditions</a>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              className={`w-full text-white py-2 rounded-md text-center ${btnDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 transition"}`}
              disabled={btnDisabled}
              onClick={submitData}
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// 🔹 Reusable Input Component
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600" htmlFor={name}>{label}</label>
    <div className="flex items-center border rounded-md px-3 py-2">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={`Enter ${label}`}
        className="w-full outline-none text-gray-700"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SignUp;
