import React from 'react';
// import { Link } from 'react-router-dom';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

const carouselData = [
    {
        phrase: 'Welcome to The News DotNet.',
        url: '/',
    },
    {
        phrase: 'Everthing comes around Goes around this is the life we live in nowdays no matter what.',
        url: '/',
    },
]
const navData =[
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Single',
        url: '/article',
    },
    {
        name: 'Categories',
        url: '/categories',
    },
]

const Navbar = () => {
  return (
    <div>
        <Nav1 carouselData={carouselData} />
        <Nav2 navData={navData} />
    </div>
  )
}

export default Navbar
