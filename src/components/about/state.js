let authenticationToken;

export let setAuthenticationToken = (token) => {
  authenticationToken = token;
  console.log('setAuthenticationToken: token', token);
};

export let getAuthenticationToken = () => {
  return authenticationToken;
};
