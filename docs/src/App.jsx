import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Header, LeftSidebar, Footer } from "./components/layout";
import SiteRoutes from "./SiteRoutes";
function App() {
  return (
    <Router basename="/">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar />
          </div>
          <div className="col-md-9">
            <SiteRoutes />
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
