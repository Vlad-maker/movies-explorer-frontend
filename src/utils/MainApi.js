const MAIN_API_URL = 'https://moviesexplorer.nomoredomains.club/';

function response(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(
            new Error(`Ошибка ${res.status} - ${res.statusText}`)
        );
    }
}

export const register = (name, email, password) => {
    return fetch(`${MAIN_API_URL}/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({name, email, password}),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const login = (email, password) => {
    return fetch(`${MAIN_API_URL}/signin`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};