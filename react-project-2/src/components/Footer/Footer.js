import './footer.css';
import React from 'react';
import instagram from '../../images/svg/instagram.svg';
import facebook from '../../images/svg/facebook.svg';
import twitter from '../../images/svg/twitter.svg';
import gitHub from '../../images/svg/github.svg';

export default function Footer() {
  return (
    <footer className='Footer'>
      <a
      target='blank'
      href='https://twitter.com/?lang=en'
      >
      <img
      src = { twitter }
      alt='twitter'
      />
      </a>
      <a
      target='blank'
      href='https://twitter.com/?lang=en'
      >
      <img
      src = { facebook }
      alt='facebook'
      />
      </a>
      <a
      target='blank'
      href='https://www.instagram.com/?next=%2F'
      >
      <img
      src = { instagram }
      alt='instagram'
      />
      </a>
      <a
      target='blank'
      href='https://github.com/EfimenkoAndrey'
      >
      <img
      src = { gitHub }
      alt='gitHub'
      />
      </a>
    </footer>
  )
}