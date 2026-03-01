import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './app/providers/AuthProvider';
import { router } from './app/router';
import ErrorBoundary from './components/common/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
