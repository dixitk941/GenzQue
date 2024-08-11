// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header removed from here */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
