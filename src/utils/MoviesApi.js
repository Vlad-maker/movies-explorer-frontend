const MoviesApi = 'https://api.nomoreparties.co/beatfilm-movies';

export const getMovies = () => {
    return fetch(`${MoviesApi}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                new Error(`Ошибка ${res.status} - ${res.statusText}`)
            );
        }
    });
};