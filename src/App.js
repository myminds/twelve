import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Albums, AlbumsDetails } from "./Pages";
import { PrivateRoute, ProtectRoute } from "./Components";
import "./assets/style.css";
import { isLogin } from "./Components/utils";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/albums/:id"
            element={
              <Albums />
            }
          />
          <Route
            path="/albums-details/:id"
            element={
              <AlbumsDetails />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
