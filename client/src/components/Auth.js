import decode from 'jwt-decode';

// create a new class to instantiate for a user

  // get user data
  const getProfile = () => {
    return decode(this.getToken());
  }

  // check if user's logged in
  const loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem('id_token')
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  const isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  const getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  const login = (idToken) => {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }

export {getProfile, loggedIn, isTokenExpired, getToken, login, logout};