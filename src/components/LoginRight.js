import React from 'react'
import { Password } from '../Icons/Password'
export const LoginRight = () => {
    return (
        <div className='login_details'>
            <main>
                <form>
                    <div className='login'>Login</div>
                    <div className='login_group'>
                        <lable for="Loginid" id="input_field">Login ID</lable>
                        <input type="text" id="Loginid_text" placeholder='Enter Login ID'></input>
                        <lable for="Loginid" id="input_field">Password</lable>
                        <div id="Loginid_text">
                            <input type="password" placeholder='Enter Password'></input><Password /></div>
                    </div>
                    <div className='checkbox-1'>
                        <div>
                            <input type="checkbox" id="checkbox"></input>
                            <label for="checkbox" id="alert">Remember Me</label>
                        </div>
                        <div className='pass_change'>Change Password</div>
                    </div>
                    <div className='checkbox-2'>
                        <input type="checkbox" id="checkbox"></input>
                        <label for="checkbox" id="alert">Agree  <span>Terms& conditions</span> </label>
                    </div>
                    <div className='login_bottom'>
                    <div className='log_in'>Login</div></div>
                    <div className='account'>Don’t have an account? <span className='register'>Register Here</span></div>
                </form>
            </main>
        </div>
    )
}
