import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from '../../components/guards/ProtectedRoute';
import RoleGuard from '../../components/guards/RoleGuard';

// Lazy load modules
const Login = lazy(() => import('../../modules/auth/Login'));
const DashboardLayout = lazy(() => import('../../components/layout/DashboardLayout'));
const TasksModule = lazy(() => import('../../modules/tasks/TasksModule'));

// Fallback skeleton components (we will create a generic one later)
const PageLoader = () => (
    <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
);

// Placeholder modules for routing tests
const DashboardHome = () => <div>Dashboard Overview</div>;
const ProjectsModule = () => <div>Projects Module</div>;
const EmployeesModule = () => <div>Employees Module</div>;
const AdminModule = () => <div>Admin Hub</div>;

export const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <Suspense fallback={<PageLoader />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Suspense fallback={<PageLoader />}>
                    <DashboardLayout />
                </Suspense>
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: 'dashboard',
                element: <DashboardHome />,
            },
            {
                path: 'projects',
                element: (
                    <RoleGuard allowedRoles={['Super Admin', 'Admin', 'Team Lead', 'Project Manager']}>
                        <ProjectsModule />
                    </RoleGuard>
                ),
            },
            {
                path: 'tasks',
                element: (
                    <RoleGuard allowedRoles={['Super Admin', 'Admin', 'Team Lead', 'Project Manager', 'Employee']}>
                        <TasksModule />
                    </RoleGuard>
                ),
            },
            {
                path: 'employees',
                element: (
                    <RoleGuard allowedRoles={['Super Admin', 'Admin', 'HR']}>
                        <EmployeesModule />
                    </RoleGuard>
                ),
            },
            {
                path: 'admin',
                element: (
                    <RoleGuard allowedRoles={['Super Admin', 'Admin']}>
                        <AdminModule />
                    </RoleGuard>
                ),
            },
            {
                path: '*',
                element: <div>404 Not Found</div>,
            }
        ],
    },
]);
