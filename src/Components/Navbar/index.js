// import React from 'react';
// import go from './go.png';
// import { Navigate } from "react-router-dom";

// import {NavLink as ReactLink, useNavigate} from "react-router-dom";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
// const Navbar = () => {
//   const navigate=useNavigate();

 



//   const user= JSON.parse(localStorage.getItem('user-info'))

 

//   console.warn(user)

//   function logout()



// {



//   localStorage.clear();



//   navigate('/')



// }
//   return (
//     <>
//       <Nav>
//         <Bars />
//         <NavLink to='/' activeStyle>
//         <img src={go} width="80" height="70"></img>
//         </NavLink>
//         <NavMenu>
//           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/contact' activeStyle>
//             Contact
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           <NavLink to='/sign-in' activeStyle>
//             Sign In
//           </NavLink>
//           {/* <NavLink to='/Product' activeStyle>
//             product
//           </NavLink> */}
//           { <NavLink to='/' activeStyle>

//             Logout

//           </NavLink> }
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         {/* <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn> */}
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;
import React from 'react';
import go from './go.png';

import { Navigate } from "react-router-dom";
import {NavLink as ReactLink, useNavigate} from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  const navigate=useNavigate();
  const getCookie = (cname) => {

    let name = cname + "=";

    let decodedCookie = decodeURIComponent(document.cookie);

    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {

        let c = ca[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);

        }

        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }

    }

    return "";

}




const signoutHandler = () => {

    console.log("logout")
    localStorage.clear();


    console.log(window.location);

    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = '/';

}
  

  const user= JSON.parse(localStorage.getItem('user-info'))
  
  console.warn(user)
  function logout()

{

  localStorage.clear();

  navigate('/')

}
  return (
    <>
    {getCookie("accessToken") &&
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={go} width="80" height="70"></img>
        </NavLink>
        
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink> */}
          
          { <NavLink to='/' onClick={signoutHandler} activeStyle>
            Log out
          </NavLink> }
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
}
{!(getCookie("accessToken")) &&
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={go} width="80" height="70"></img>
        </NavLink>
        
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink>
          
         
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
}
    </>
  );
  
};


  
export default Navbar;