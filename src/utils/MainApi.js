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
}

export const api = new Api({
   address: "https://api.movie.diploma.nomoredomains.xyz",
   token: localStorage.getItem("jwt"),
});
