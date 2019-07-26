import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import style from './homepage.css';
import Login from '../Login/Login';

const Homepage = () => (
  <div className={style.container}>
    <div style={{ marginLeft: '10px' }}>
      <div>
        <h1 className={style.header}>
            EPIC MAIL
          <FontAwesomeIcon icon="mail-bulk" />
        </h1>
      </div>
      <div className={style.section}>
        <div className={style.col}>
          <h1 className={style.subHeaders}>Send And Receive Emails Easily</h1>
          <Link to="/register">
            <button type="button" className={cx(style.btn, style.btnRegister)}>Get Started For Free</button>
          </Link>
        </div>
        <div className={style.col}>
          <Login />
        </div>
      </div>
      <div className={style.section3}>
        <h1>AN EMAIL APP DESIGNED JUST FOR YOU</h1>
        <p>
         Epic mail is a platform that allows you send and receive messages at ease, create
         groups, share messages to groups and lot more
        </p>
      </div>
    </div>
  </div>
);

export default Homepage;
