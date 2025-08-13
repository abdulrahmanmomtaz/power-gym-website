import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import AuthPage from "./component/AuthPage";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/src/component/AuthPage.jsx"; 

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/src/component/AuthPage.jsx" element={<AuthPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
