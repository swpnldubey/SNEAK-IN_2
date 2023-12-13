import {Home} from './pages'
import { Login, Profile, Register} from './pages';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { navigate, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './index.css';
import Navbar from './pages/Navbar'
import Slider from './pages/Slider'
import {Platform} from './pages';

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
             <Route path='/profile/:id?' element={<Profile />} />
           {/* </Route> */}
           <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
      </Routes>

       </div>

  );
}


export default App;
