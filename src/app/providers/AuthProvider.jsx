import React, { createContext, useState, useEffect, useCallback } from 'react';
import { storage } from '../../utils/storage';
import { authService } from '../../services/api/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(storage.getToken() || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!storage.getToken());
    const [loading, setLoading] = useState(true);

    const restoreSession = useCallback(async () => {
        const currentToken = storage.getToken();
        if (!currentToken) {
            setLoading(false);
            return;
        }

        try {
            const userData = await authService.getProfile();
            setUser(userData);
            setRole(userData.role);
            setIsAuthenticated(true);
        } catch (error) {
            // 401 will be handled by axios interceptor which calls logout
            console.error('Session restore failed', error);
            storage.clearAll();
            setIsAuthenticated(false);
            setUser(null);
            setRole(null);
            setToken(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        restoreSession();
    }, [restoreSession]);

    const login = async (credentials) => {
        const response = await authService.login(credentials);
        const { token, refreshToken, user: userData } = response.data;

        storage.setToken(token);
        storage.setRefreshToken(refreshToken);
        setToken(token);
        setUser(userData);
        setRole(userData.role);
        setIsAuthenticated(true);
    };

    const logout = () => {
        storage.clearAll();
        setToken(null);
        setUser(null);
        setRole(null);
        setIsAuthenticated(false);
        window.location.href = '/login'; // Force clear any strict states and route
    };

    return (
        <AuthContext.Provider value={{ user, role, token, isAuthenticated, loading, login, logout, restoreSession }}>
            {children}
        </AuthContext.Provider>
    );
};
