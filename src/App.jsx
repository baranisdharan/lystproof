import React from 'react';
import RegisterForm from './Component/RegistrationForm';
import img1 from './images/Screenshot 2023-06-16 201437.png';

function App() {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <img src={img1}/>
      <RegisterForm />
    </div>
  )
}

export default App;
