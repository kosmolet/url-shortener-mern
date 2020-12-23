import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import useRoutes from "./useRoutes";

function App() {
  const routes = useRoutes(false);

  return (
    <Router>
      <div className="container">{routes}</div>
    </Router>
  );
}

export default App;
