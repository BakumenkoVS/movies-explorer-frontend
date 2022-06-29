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
      debugger
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
}

export const api = new Api({
   address: "https://api.movie.diploma.nomoredomains.xyz",
   token: localStorage.getItem("jwt"),
});
