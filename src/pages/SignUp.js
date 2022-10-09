// import React from 'react';
// import { useState } from 'react';
// import './signup.css';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
  
// const SignUp = () => {
//     const navigate = useNavigate();
//     const[username,setUserName] = useState("")
//     const[email,setEmail] = useState("");
//     const[phone,setPhone] = useState("");
//     const [password,setPassword] = useState("");
//     const [confirmpassword,setConfirmPassword] = useState("");

//     const onInputChangeUserName = event => {
//         setUserName(event.target.value);
//       };

//     const onInputChangePhone = event => {
//         setPhone(event.target.value);
//         };
//     const onInputChangeEmail = event => {
//         setEmail(event.target.value);
//       };
//     const onInputChangePassword = event => {
//     setPassword(event.target.value);
//     };
//     const onInputChangeConfirmPassword = event => {
//         setConfirmPassword(event.target.value);
//         };

//     const data = {"username":username,"email":email,"phone":phone,"password":password,"confirmpassword":confirmpassword};
//     const FormHandle = e => {
//         e.preventDefault();
//         addDataToServer(data)
//     }
//     console.log(data);
//     const addDataToServer = (cred) => {
//         console.log(cred);
//         axios.post("http://localhost:8080/api/auth/signup", cred).then(
//             (response) => {
                
//                 console.log(response);
//                 alert("Registered Successfully");
//                 if (response.status==200) {
//                     console.log("navigating");
//                     navigate('/sign-in');
//                 }
//             }, (error) => {
//                 console.log(error);
//                 alert("Operation failed");
//             }
//         );
//     }

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Center',
//         alignItems: 'Center',
//         height: '100vh'
//       }}
//     >
      
//       <div className='signup'>
//             <form onSubmit={e => FormHandle(e)} class="check-credentials-formsp">
                
//             <div id="usernamesp" class="username">
//                 <p id="hint"><strong>Enter username</strong></p>
//                     <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} required />
//                 </div>
              
//                 <div id="phonesp" class="phone">
//                 <p id="hint"><strong>Enter phone number</strong></p>
//                     <input type="number" class="form-control" name="phone"  placeholder="Enter phone" value={phone} onChange={(e) => onInputChangePhone(e)} required maxLength={10}/>
//                 </div>
//                 <div id="emailsp" class="email">
//                 <p id="hint"><strong>Enter email</strong></p>
//                     <input type="email" class="form-control" name="email"  placeholder="Enter email" value={email} onChange={(e) => onInputChangeEmail(e)} required/>
//                 </div>
//                 <div id="passwordsp" class="password">
//                 <p id="hint"><strong>Enter password</strong></p>
//                     <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)}required maxLength={8} />
//                 </div>
//                 <div id="confirmpasswordsp" class="confirmpassword">
//                 <p id="hint"><strong>Re-Enter password</strong></p>
//                     <input type="password" class="form-control" name="confirmpassword"  placeholder="Re Enter password" value={confirmpassword} onChange={(e) => onInputChangeConfirmPassword(e)}required maxLength={8}/>
//                 </div><br></br>
//                 <div className="btnsignup">
//                     <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   );
// };

// export default SignUp;

import React from 'react';
import { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
  
const SignUp = () => {
    const navigate = useNavigate();
    const[username,setUserName] = useState("")
    const [errorMessages, setErrorMessages] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {
        pass: "invalid password",
        noerr: ""
      };
    const Validate = (values) => {
        const error = {};
        if (!values.username) {
          error.username = "Username is required!";
        
        }
        if (!email) {
          error.email = "Email is required!";
        } else if (!regex.test(email)) {
          error.email = "This is not a valid email format!";
        }
        if (!values.password) {
          error.password = "Password is required";
        } else if (values.password.length < 4) {
          error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          error.password = "Password cannot exceed more than 10 characters";
        }
        return error;
      };

    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };

    const onInputChangePhone = event => {
        setPhone(event.target.value);
        };
    const onInputChangeEmail = event => {
        setEmail(event.target.value);
      };
    const onInputChangePassword = event => {
    setPassword(event.target.value);
    };
    const onInputChangeConfirmPassword = event => {
        let value=event.target.value;
        setConfirmPassword(value);
      
        if(value!=password){
          
           setErrorMessages({ name: "pass", message: errors.pass });
        }
        
        else{
          setErrorMessages({name: "noerr",message: errors.noerr})
        }
        };

    const data = {"username":username,"email":email,"phone":phone,"password":password,"confirmpassword":confirmpassword};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }
    console.log(data);
    const addDataToServer = (cred) => {
       
        if(  cred.password.length> 10||cred.password.length < 4 ||!regex.test(cred.email)){ 
    setFormErrors(Validate(cred));}
    else{
        console.log(cred);

        axios.post("http://localhost:8080/api/auth/signup", cred).then(
            (response) => {
                
                console.log(response);
                alert("Registered Successfully");
                if (response.status==200) {
                    console.log("navigating");
                    navigate('/sign-in');
                }
            }, (error) => {
                console.log(error);
                alert("User already exists");
            }
        );
    }
    }
    const renderErrorMessage = (name) =>

    name!=password && (

      <div className="error">{errorMessages.message}</div>

    ) ;
   

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      
      <div className='signup'>
            <form onSubmit={e => FormHandle(e)} class="check-credentials-formsp">
                
            <div id="usernamesp" class="username">
                <p id="hint"><strong> Username</strong></p>
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} required />
                </div>
                

              
                <div id="phonesp" class="phone">
                <p id="hint"><strong> Phone Number</strong></p>
                    <input type="number" class="form-control" name="phone"  placeholder="Enter phone" value={phone} onChange={(e) => onInputChangePhone(e)}required  />
                </div>
                <div id="emailsp" class="email">
                <p id="hint"><strong> Email</strong></p>
                    <input type="text" class="form-control" name="email"  placeholder="Enter email" value={email} onChange={(e) => onInputChangeEmail(e)}required  />
                </div>
                <p className='error'>{formErrors.email}</p>

                <div id="passwordsp" class="password">
                <p id="hint"><strong> Password</strong></p>
                    <input type="text" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} required />
                </div>
                <p className='error'>{formErrors.password}</p>
                <div id="confirmpasswordsp" class="confirmpassword">
                <p id="hint"><strong>Re-enter password</strong></p>
                    <input type="text" class="form-control" name="confirmpassword"  placeholder="Re Enter password" value={confirmpassword} onChange={(e) => onInputChangeConfirmPassword(e)}required  />
                </div>
                {renderErrorMessage("confirmpassword")}
                <br></br>
                <div className="btnsignup">
                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignUp;