import './info.css';
import React from 'react';
import MyPhoto from '../../images/my_photo.jpg';
import email from '../../images/svg/email.svg';
import linkedin from '../../images/svg/linkedin.svg';

export default function Info() {
  return (
    <section className='Info'>
      <img
        src = { MyPhoto }
        alt = 'My_logo'
        className='Info--logo'
      />
      <div className='info--wrapper'>
        <h1 className='Info-title'>Andrei Yafimenka</h1>
        <h4 className='info-occupation'>Frontend Developer</h4>
        <a 
        target='blank'
        href='https://github.com/EfimenkoAndrey'
        className='info--link'
        >
        https://github.com/EfimenkoAndrey
        </a>
        <div className='button-box'>
          <a
          target='blank'
          href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
          className='info--btn'
          >
            <img
            src= { email }
            alt='Email'
            className='btn-img'
            />
            Email
          </a>
          <a
          target='blank'
          href='https://www.linkedin.com/in/andrew-efimenko-86936b215/'
          className='info--btn info--btn_bg'
          >
            <img
            src= { linkedin }
            alt='Email'
            className='btn-img'
            />
            Linkedin
          </a>
        </div>
      </div>
    </section>
  )
}