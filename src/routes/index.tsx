import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Courses from './Courses';

const Navigation:React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Courses} />
    </BrowserRouter>
  )
}

export default Navigation;