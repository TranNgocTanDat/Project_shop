import React, { useState, useEffect } from "react"
import './User.css'
import { check, checkID, getBalance } from "./checkLogin";
import Infor from "./Infor";
import { DataUser } from "./dataUser";


const User: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<DataUser | null>(null);
    const [balance, setBalance] = useState<number | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    // kiểm tra xem user có tồn tại trong local ko
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser(user);
            const userBalance = getBalance(user);
            setBalance(userBalance);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthenticated = check(userName, password);
        if (isAuthenticated) {
            setUser(isAuthenticated);
            const userBalance = getBalance(isAuthenticated);
            setBalance(userBalance);
            localStorage.setItem('user', JSON.stringify(isAuthenticated));
            setError('');
        } else {
            setUser(null);
            setBalance(null);
            setError('Invalid username or password');
        }
    };

    // đăng xuất

    const handleLogout = () => {
        setUser(null);
        setBalance(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
        setError('');
    };

    return (
        <div>
            {user ? (
                <>
                    <Infor user={user} balance={balance} />
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </>

            ) : (
                <div className="user">
                    <label className="user__Tlogin">Login</label>
                    <label className="user__title">Email or USerName</label>
                    <input
                        type='text'
                        placeholder='Email or USerName...'
                        value={userName}
                        className="user__input"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label className="user__title user__title--pass">PassWord</label>
                    <input type='password'
                        placeholder=''
                        value={password}
                        className="user__input"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <button onClick={handleLogin} className="user__login">Login</button>
                    {error && <div className="user__error">{error}</div>}
                </div>
            )}
        </div>

    );
}


export default User;