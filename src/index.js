import * as home from './home';
import * as contact from './contact';
import * as menu from './menu';

const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', () => home.display());

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () => menu.display());

const contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', () => contact.display());

home.display();