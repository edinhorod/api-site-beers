export const isAuthenticated = () => {
  const getToken = localStorage.getItem("@mytapp:authToken");
  if (getToken !== null) {
    return true
  }

  return false;
}