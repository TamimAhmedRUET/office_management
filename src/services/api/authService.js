// This handles mocked auth until actual endpoints are integrated, using axiosClient
import { axiosClient } from './axiosClient';

export const authService = {
    login: async (credentials) => {
        // Replace with real endpoint: return axiosClient.post('/auth/login', credentials);
        // Mocking response
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (credentials.email === 'admin@company.com' && credentials.password === 'password') {
                    resolve({
                        data: {
                            token: 'mock-jwt-token-admin',
                            refreshToken: 'mock-refresh-token',
                            user: { id: 1, name: 'Admin User', email: credentials.email, role: 'Super Admin' }
                        }
                    });
                } else if (credentials.email === 'pm@company.com' && credentials.password === 'password') {
                    resolve({
                        data: {
                            token: 'mock-jwt-token-pm',
                            refreshToken: 'mock-refresh-token',
                            user: { id: 2, name: 'PM User', email: credentials.email, role: 'Project Manager' }
                        }
                    });
                } else if (credentials.email === 'employee@company.com' && credentials.password === 'password') {
                    resolve({
                        data: {
                            token: 'mock-jwt-token-emp',
                            refreshToken: 'mock-refresh-token',
                            user: { id: 3, name: 'Employee User', email: credentials.email, role: 'Employee' }
                        }
                    });
                } else {
                    reject({ response: { data: { message: 'Invalid credentials' } } });
                }
            }, 1000);
        });
    },

    getProfile: async () => {
        // return axiosClient.get('/auth/profile').then(res => res.data);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 1, name: 'Admin User', email: 'admin@company.com', role: 'Super Admin' });
            }, 500);
        });
    }
};
