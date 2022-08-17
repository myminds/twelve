import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, SignIN } from "./Pages";
import { PrivateRoute, ProtectRoute } from "./Components";
import "./assets/style.css";
import { isLogin } from "./Components/utils";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <SignIN />
            }
          />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
