import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Layout() {
  return (
    <>
      <Navigation/>
      <br />
      <main style={{ padding: '30px'}}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout; 