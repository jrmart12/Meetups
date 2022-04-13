import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
// import Layout from "./components/layout/Layout";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "../src/components/ForgotPassword";
import { useEffect } from "react";
import PrivateWrapper from "./components/PrivateRoute";
import UpdateProfile from "../src/components/UpdateProfile";

function App() {
  // localhost : 3000/favorites
  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      // navigate("/");
    }
  }, []);
  return (
    <BrowserRouter>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100hv" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Container>

      <Routes>
        <Route
          path="/"
          element={
            <PrivateWrapper>
              <AllMeetupsPage />
            </PrivateWrapper>
          }
        />
        <Route
          path="/new-meetups"
          element={
            <PrivateWrapper>
              <NewMeetupsPage />
            </PrivateWrapper>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateWrapper>
              <FavoritesPage />
            </PrivateWrapper>
          }
        />
        <Route
          path="/update-profile"
          element={
            <PrivateWrapper>
              <UpdateProfile />
            </PrivateWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
// <Container
//   className="d-flex align-items-center justify-content-center"
//   style={{ minHeight: "100vh" }}
// >
//       {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route
//                 path="/"
//                 element={
//                   <PrivateWrapper>
//                     <Dashboard />
//                   </PrivateWrapper>
//                 }
//               />
//             <Route
//               path="/"
//               element={
//                 <PrivateWrapper>
//                   <AllMeetupsPage />
//                 </PrivateWrapper>
//               }
//             />

//             <Route
//               path="/"
//               element={
//                 <PrivateWrapper>
//                   <NewMeetupsPage />
//                 </PrivateWrapper>
//               }
//             />

//             <Route
//               path="/"
//               element={
//                 <PrivateWrapper>
//                   <UpdateProfile />
//                 </PrivateWrapper>
//               }
//             />

//             <Route
//               path="/"
//               element={
//                 <PrivateWrapper>
//                   <FavoritesPage />
//                 </PrivateWrapper>
//               }
//             />

//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//       {/* </div> */}
//     </Container>
//   );
// }
