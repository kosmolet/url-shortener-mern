import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import useRoutes from "./useRoutes";
import AuthStore from "./store/AuthStore";

function App() {
  const routes = useRoutes();

  return (
    <AuthStore>
      <Router>
        <div className="container">{routes}</div>
      </Router>
    </AuthStore>
  );
}

export default App;
