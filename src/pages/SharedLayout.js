import React from 'react'
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <h1>
      <Outlet />
      Menu bar{" "}
    </h1>
  );
}

export default SharedLayout