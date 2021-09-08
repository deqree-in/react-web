import React from "react";
import Home from "./Home";
import Header from "./Header";
import LeftNav from "./LeftNav";
import UploadSection from "./UploadSection";
import Settings from "./Settings";
import Notifications from "./Notifications";
import { Provider, Consumer } from "./context";
import "./index.css";
import Documents from "./Documents";

const switchSections = (active) => {
  switch (active) {
    case "home": {
      return <Home />;
    }
    case "upload": {
      return <UploadSection />;
    }
    case "documents": {
      return <Documents />;
    }
    case "settings": {
      return <Settings />;
    }
    case "notifications": {
      return <Notifications />;
    }
    default:
      return null;
  }
};

const DashboardV2 = () => {
  return (
    <Provider>
      <Consumer>
        {(context) => {
          return (
            <div className="wrapper-dashboard">
              <LeftNav />
              <div className="main-container">
                <Header />
                {switchSections(context.active)}
              </div>
            </div>
          );
        }}
      </Consumer>
    </Provider>
  );
};
export default DashboardV2;
