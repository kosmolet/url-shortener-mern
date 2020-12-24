import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import AuthContext from "./store/AuthContext";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = Routes(isAuthenticated);

  if (!ready) {
    return <h1>Loading..</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
