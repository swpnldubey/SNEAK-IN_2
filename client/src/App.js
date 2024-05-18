import {Home} from './pages'
<<<<<<< HEAD
import { Login, Register} from './pages';
=======
import { Login, Profile, Register} from './pages';
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { navigate, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './index.css';
import Navbar from './pages/Navbar'
import Slider from './pages/Slider'
import {Platform} from './pages';
<<<<<<< HEAD
import Modal from 'react-modal';
=======
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967

// function Layout(){
  
//   const { user } = useSelector(state => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user?.token && user.token !== "") {
//       navigate('/Platform');
//     } else {
//       navigate('/', { state: { from: location }, replace: true });
//     }
//   }, [user, navigate, location]);
//   return null;
// }

// function Layout(){
//   console.log('Layout component rendered');
//   const navigate = useNavigate();
//   const { user } = useSelector(state => state.user); 
//   const location = useLocation();
//   return user?.token ? (  
//     <navigate to='/platform' />
//   ) : (
//     <navigate to='/' state={{from: location}} replace />
//   );
  
// }

function App() {
      const { token } = useSelector(state => state.user);

  return (
    <div className= "App w-full min-h-[100vh]" > 
            {/* <div className="blur" style={{top: '-18%', right: '0'}}></div>
            <div className="blur" style={{top: '36%', left: '-8rem'}}></div> */}

      <Routes>
           {/* <Route element={<Layout />}> */}
             <Route path='/platform' element={<Platform />} />
<<<<<<< HEAD
                        {/* </Route> */}
=======
             <Route path='/profile/:id?' element={<Profile />} />
           {/* </Route> */}
>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
           <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
      </Routes>

       </div>

  );
}

<<<<<<< HEAD
=======

>>>>>>> 936cb9252e355042c7693e22e6db8bd298c3d967
export default App;
