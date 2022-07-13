import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div id='loginContainer'>
      <div className='login-form-container'>
        <h3 className='login-title'>LOGIN</h3>
        <form id='loginForm'>
          <table>
            <tr>
              <td>
                <label htmlFor='userId'>아이디</label>
              </td>
              <td>
                <input type='text' id='userId' />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='userPw'>비밀번호</label>
              </td>
              <td>
                <input type='password' id='userPw' />
              </td>
            </tr>
          </table>
          <button type='submit' className='submit-btn'>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;