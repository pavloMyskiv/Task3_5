import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigator/Navigation';

export const Layout = () => {
  return (
    <div className="container">
      <Navigation />
      <Outlet></Outlet>
    </div>
  );
};
