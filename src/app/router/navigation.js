export const NAVIGATION = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        roles: ['Super Admin', 'Admin', 'HR', 'Team Lead', 'Project Manager', 'Employee'],
        icon: 'home',
    },
    {
        title: 'Projects',
        path: '/projects',
        roles: ['Super Admin', 'Admin', 'Team Lead', 'Project Manager'],
        icon: 'folder',
    },
    {
        title: 'Tasks',
        path: '/tasks',
        roles: ['Super Admin', 'Admin', 'Team Lead', 'Project Manager', 'Employee'],
        icon: 'check-square',
    },
    {
        title: 'Employees',
        path: '/employees',
        roles: ['Super Admin', 'Admin', 'HR'],
        icon: 'users',
    },
    {
        title: 'Admin Hub',
        path: '/admin',
        roles: ['Super Admin', 'Admin'],
        icon: 'settings',
    }
];
