class Api {
   constructor({ address, token }) {
      this._address = address;
      this._token = token;
   }
   _handleResponse = (response) => {
      if (response.ok) {
         return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`);
   };

   signUp(password, email, name) {
      return fetch(`${this._address}/signup`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ name, password, email }),
      }).then(this._handleResponse);
   }

   signIn(password, email) {
      return fetch(`${this._address}/signin`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ password, email }),
      }).then(this._handleResponse);
   }

   getContent = () => {
      return fetch(`${this._address}/users/me`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this._token}`,
         },
      }).then(this._handleResponse);
   };

   addUserInfo(name, email) {
      return fetch(`${this._address}/users/me`, {
         method: "PATCH",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
         body: JSON.stringify({ name, email }),
      }).then(this._handleResponse);
   }

   getSavedMovies() {
      return fetch(`${this._address}/movies`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }

   addSavedMovies(data) {
      return fetch(`${this._address}/movies`, {
         method: "POST",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co/${data.image.url}`,
            trailerLink:
               data.trailerLink ||
               "https://www.youtube.com/watch?v=C5WTGOdOek0&ab_channel=%D0%9B%D1%8E%D0%B4%D0%BC%D0%B8%D0%BB%D0%B0%D0%9D%D0%B0%D1%80%D1%8B%D0%B6%D0%BD%D0%B0%D1%8F",
            thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN || 'Отсутствует',
         }),
      }).then(this._handleResponse);
   }

   deleteMovie(movieId) {
      return fetch(`${this._address}/movies/${movieId}`, {
         method: "DELETE",
         headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
         },
      }).then(this._handleResponse);
   }
}

export const api = new Api({
   address: "https://api.movie.diploma.nomoredomains.xyz",
   token: localStorage.getItem("jwt"),
});
