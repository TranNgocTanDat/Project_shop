import React, { useState } from 'react';
import { authenticateUser } from './authService';

const Login: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthenticated = authenticateUser(userName, password);
        if (isAuthenticated) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setIsLoggedIn(false);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <h2>Welcome, {userName}!</h2>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;