import { View1 } from 'components/View1';
import { View2 } from 'components/View2';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from 'Sidebar';
import './App.css';

export function CustomRoutes() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/view1" element={<View1 />} />
          <Route path="/view2" element={<View2 />} />
        </Routes>
      </Sidebar>
    </>
  );
}
