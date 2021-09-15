import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { userTable } from '../../../types';
import { apiService, TOKEN_KEY } from '../utils/api-service';

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState<userTable['email']>('');
    const [password, setPassword] = useState<userTable['password']>('');

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', {email, password})
            .then(token => {
                localStorage.setItem(TOKEN_KEY, token)
                history.push('/content')
            })
            .catch(() => alert('OOPS'))
    }

    return (
        <main className="container">
            <section className="mt-4 row justify-content-center">
                <div className="col-12 col-md-4">
                    <h3>Login</h3>
                    <form  className="p-4 border rounded shadow form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
                        <div className="d-flex justify-content-end">
                            <button onClick = {handleLogin} className="btn btn-primary mt-2">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;
