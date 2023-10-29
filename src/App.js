
import './App.css';
import {LoginLeft}from './Images/LoginLeft'
import { LoginRight } from './components/LoginRight';

function App() {
  return (
    <div className="login_page">
      <div className='login_left'>
      <LoginLeft/>
      </div>
      <div className='login_right'>
        <LoginRight/>
      </div>
    </div>
  );
}

export default App;
