import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
// import Snackbar from '@material-ui/core/Snackbar';

export const AuthProvider = (type, params) => {
    console.log(type);

    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    console.log(response);
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ access_token }) => {
                localStorage.setItem('token', access_token);
            });
    }

    if (type === AUTH_LOGOUT) {
        const token = localStorage.getItem('token');
        localStorage.removeItem('token');
        const request = new Request('/api/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        return fetch(request)
            .then(response => {
                return Promise.resolve();
            });
    }

    if (type === AUTH_ERROR) {
        const status = params.status;
        if (status === 401 || status === 403 || status === 500) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    if (type === AUTH_CHECK) {
        const token = localStorage.getItem('token');
        const request = new Request('/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    return localStorage.removeItem('token');
                }
            }).then(() => {
                return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
            });

    }

    return Promise.resolve();
}