import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Header, LeftSidebar, RightSidebar, Footer } from "./components/layout";
import SiteRoutes from "./SiteRoutes";
function App() {
  return (
    <Router basename="/">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-2">
            <LeftSidebar />
          </div>
          <div className="col-md-8">
            <SiteRoutes />
          </div>
          <div className="col-md-2">
            <RightSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
