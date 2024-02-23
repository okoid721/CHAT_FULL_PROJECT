import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useLogin from "../../hook/useLogin";


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-0 border border-gray-100 ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-blue-500">Easy Text</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label p-2">
              <span className=" text-white text-base label-text">Username</span>
            </label>
            <input
              type="text"
               value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-300  input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="Username" className=" label">
              <span className=" text-base  text-white label-text">Password</span>
            </label>
            <input type="password"
             value={password}
              placeholder="Type here" className=" w-full bg-zinc-300  input input-bordered h-10" 
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <Link
            to="/signup"
            className=" text-gray-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
           {" Don't"} have and account?
          </Link>
          
          <div>
          <button className="btn btn-block"> {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Login"
                  )}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


//STARTER CODE FOR THIS FILE

// /* eslint-disable no-unused-vars */
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className=" text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className=" text-blue-500">Easy Story</span>
//         </h1>
//         <form>
//           <div>
//             <label className=" label p-2">
//               <span className=" text-white text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//             //   value={username}
//               placeholder="Enter username"
//             //   onChange={(e) => setUsername(e.target.value)}
//               className="w-full bg-zinc-300  input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="Username" className=" label">
//               <span className=" text-base  text-white label-text">Password</span>
//             </label>
//             <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//           </div>
//           {/* <Link
//             to="/signup"
//             className=" text-gray-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Don't have and account?
//           </Link> */}
//              <a href= "#" className= ' text-gray-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} Have an account</a>
//           <div>
//           <button className="btn btn-block">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

