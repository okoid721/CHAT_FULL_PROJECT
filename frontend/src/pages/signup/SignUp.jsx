
import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hook/useSignUp';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs)
  };
  return (
    <div> 
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
<div className="h-full w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-0 border border-gray-100 p-6">
  <h1 className=" text-3xl font-semibold text-center text-gray-300">
    Sign Up
    <span className=" text-blue-500">Easy Text</span>
  </h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="fullName" className=" label p-2">
        <span className=" text-white text-base label-text">Fullname</span>
      </label>
      <input
        type="text"
        value={inputs.fullName}
        onChange={(e) =>
          setInputs({ ...inputs, fullName: e.target.value })
        }
        placeholder="Enter fullName"
        className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
      />
    </div>
    <div>
      <label htmlFor="username" className=" label p-2">
        <span className=" text-white text-base label-text">Username</span>
      </label>
      <input
        type="text"
        value={inputs.username}
        onChange={(e) =>
          setInputs({ ...inputs, username: e.target.value })
        }
        placeholder="Enter Username"
        className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
      />
    </div>
    <div>
      <label htmlFor="password" className=" label p-2">
        <span className=" text-white text-base label-text">Password</span>
      </label>
      <input
        type="password"
        value={inputs.password}
        onChange={(e) =>
          setInputs({ ...inputs, password: e.target.value })
        }
        placeholder="Enter Password"
        className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
      />
    </div>
    <div>
      <label htmlFor="confirmPassword" className=" label p-2">
        <span className=" text-white text-base label-text">
          Confirm Password
        </span>
      </label>
      <input
        type="password"
        value={inputs.confirmPassword}
        onChange={(e) =>
          setInputs({ ...inputs, confirmPassword: e.target.value })
        }
        placeholder="Enter password again"
        className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
      />
    </div>
 
       

    <Link
      to="/login"
      className=" hover:underline hover:text-blue-600 text-gray-200  text-sm  mt-2 inline-block"
    >
      Already have and an account?
    </Link>
    <GenderCheckBox
     onCheckboxChange = {handleCheckBoxChange} selectedGender ={inputs.gender}
      />
 
    <div>
      <button className="btn btn-block">Sign Up
        {loading ? (
          <span className=" loading loading-spinner"></span>
        ) : (
          "Signup"
        )}
      </button>
    </div>
  </form>
</div>
</div></div>
  )
}

export default SignUp
