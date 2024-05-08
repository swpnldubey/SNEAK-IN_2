// import React, { useState } from 'react';

// const RegistrationPopup = ({ eventTitle, onClose, onRegister }) => {
//   const [registration, setRegistration] = useState({
//     name: '',
//     className: '',
//   });

//   const handleRegister = () => {
//     onRegister(registration);
//     onClose();
//   };

//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <h2>{`Register for ${eventTitle}`}</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={registration.name}
//           onChange={(e) => setRegistration({ ...registration, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Class"
//           value={registration.className}
//           onChange={(e) => setRegistration({ ...registration, className: e.target.value })}
//         />
//         <button onClick={handleRegister}>Register</button>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPopup;
