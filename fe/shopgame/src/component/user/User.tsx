import React, {useState} from "react"
import './User.css'
import {DataUser} from "./dataUser";
import {check} from "./checkLogin";
import Infor from "./Infor";



const User: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthenticated = check(userName, password);
        if (isAuthenticated) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setIsLoggedIn(false);
            setError('Invalid username or password');
        }
    };
    return(
        <div>
            {isLoggedIn? (
               <Infor/>
            ): (
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

                </div>
            )
            }

        </div>

    );
}


export default User;