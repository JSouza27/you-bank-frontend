import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user"
        element={(
          <div>
            <h1>User</h1>
            <Outlet />
          </div>
)}
      >
        <Route path="login" element={<div>login</div>} />
        <Route path="register" element={<div>register uai</div>} />
      </Route>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AllRoutes;
