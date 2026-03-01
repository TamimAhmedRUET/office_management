import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RoleGuard = ({ allowedRoles = [], children, fallback = null, type = 'route' }) => {
    const { role, loading, isAuthenticated } = useAuth();

    if (loading) return null; // Let ProtectedRoute handle full-page loaders

    const hasAccess = isAuthenticated && allowedRoles.includes(role);

    if (!hasAccess) {
        if (type === 'route') {
            // For routing, redirect to dashboard by default if unauthorized
            return fallback || <Navigate to="/dashboard" replace />;
        }
        // For UI components, render fallback or nothing
        return fallback;
    }

    return children;
};

export default RoleGuard;
