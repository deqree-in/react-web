import Documents from "./Documents";
import Transactions from "./Transactions";
import "./index.css";
import { Typography } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <div className="user-box first-box">
        <div
          className="cards-wrapper"
          style={{
            delay: ".6s",
            width: "82%",
            marginLeft: 0,
            display: "flex",
            flexDirection: "row",
            // border: "1px solid cyan",
            marginTop: "5vh",
          }}
        >
          <div
            className="cards card"
            style={{
              height: "100%",
              display: "flex",
              width: "70%",
              flexDirection: "row",
            }}
          >
            <div
              className="dashboard-home-content"
              style={{ width: "80%", padding: "3vmin" }}
            >
              <Typography variant="h5" style={{ marginBottom: "16px" }}>
                Welcome, Admin
              </Typography>
              <Typography variant="body1">
                Steps to upload your credentials: <br /> Note: You need at least
                one credit to execute a single document transaction. <br />{" "}
                <br /> 1. Login into your deqree account. <br /> 2. Click on the
                upload icon. <br /> 3. Select your documents in PDF format.{" "}
                <br /> 4. Click send and wait for confirmation. <br /> <br />{" "}
                <span style={{ color: "white", paddingBottom: "16px" }}>
                  Feature Update:
                </span>
                <br />
                <div style={{ paddingTop: "16px" }}>
                  1. Improved API
                  <br /> 2. Faster hashing of documents <br />
                  3. No limit to the number of documents per transaction <br />
                </div>
              </Typography>
            </div>
          </div>
          <div className="cards card">
            <iframe
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
              src="https://www.youtube.com/embed/97DeUb8G6sQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="account-wrapper" style={{ delay: ".8s" }}>
          <div className="account-profile">
            <img
              src="https://cdn.discordapp.com/attachments/816290918046498856/885244747944456223/163112910126770545.png"
              alt="admin"
              style={{
                transform: "scale(1)",
              }}
            />
            <div className="blob-wrap">
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
            </div>
            <div className="account-name">Admin</div>
            <div className="account-title">Administrator</div>
          </div>
          <div className="account card">
            <div className="account-income">Total Credits Left</div>
            <div className="account-cash"> 340/500</div>
            <div className="account-income">
              Plan:
              <span
                className="credit-money is-active"
                style={{ paddingLeft: "16px" }}
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="user-box second-box">
        <Documents />
        <Transactions />
      </div>
    </>
  );
};
export default Home;
