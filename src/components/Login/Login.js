import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({auth, setAuth}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate('/recommendNovel');
  }

  return (
    <div id='loginContainer'>
      <div className='login-form-container'>
        <h3 className='login-title'>LOGIN</h3>
        <form id='loginForm' onSubmit={e => handleSubmit(e)}>
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
        <FontAwesomeIcon icon={faXmark} className='login-x-icon' onClick={()=>{navigate('/recommendNovel')}} />
      </div>
    </div>
  );
};

export default Login;