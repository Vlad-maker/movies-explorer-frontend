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

export const getProfileData = () => {
    return fetch(`${MAIN_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response)
      .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
  };

export const getSavedMovies = () => {
    return fetch(`${MAIN_API_URL}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response)
      .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
  };

export const saveMovie = (movie) => {
    return fetch(`${MAIN_API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(movie),
    })
      .then(response)
      .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
  };

export const deleteMovie = (movie) => {
    return fetch(`${MAIN_API_URL}/movies/${movie}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response)
      .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
  };

export const updateProfileData = (names, emails) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: names,
      email: emails,
    }),
  })
    .then(response)
    .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
};

export const authApiToken = (token) => {
    return fetch(`${MAIN_API_URL}/users/me`, {
      method: "GET",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };