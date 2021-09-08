import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Context } from "./context";
import {
  Edit,
  MonetizationOn,
  Notifications,
  Security,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./settings.css";

const Settings = () => {
  React.useEffect(() => {
    // window.addEventListener("scroll", (e) => {
    console.log(Context);
    // });
  });
  return (
    <div className="dashboard-settings">
      <div className="settings-header">
        <Typography variant="h5">My Profile</Typography>
      </div>
      <div className="settings-area">
        <div className="settings-nav">
          <List>
            {[
              {
                name: "Edit Profile",
                iconLeft: <Edit style={{ color: "#8A94A7" }} />,
                // iconRight:
              },
              // {
              //   name: "Notifications",
              //   iconLeft: <Notifications style={{ color: "#8A94A7" }} />,
              //   // iconRight:
              // },
              {
                name: "Choose Plan",
                iconLeft: <MonetizationOn style={{ color: "#8A94A7" }} />,
                // iconRight:
              },
              {
                name: "Password & Security",
                iconLeft: <Security style={{ color: "#8A94A7" }} />,
                // iconRight:
              },
            ].map((button, ndx) => {
              return (
                <ListItem button key={ndx}>
                  <ListItemIcon>{button.iconLeft}</ListItemIcon>
                  <ListItemText>{button.name}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="settings-display">
          <Typography variant="h4">Edit Profile</Typography>
          <div
            className="avatar"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "5vmin",
            }}
          >
            <Avatar style={{ width: "15vmin", height: "15vmin" }}>R</Avatar>
          </div>
          <div
            className="settings-names"
            style={{
              marginBottom: "2vh",
            }}
          >
            <input
              className="button"
              variant="outlined"
              placeholder="First Name"
              style={{ marginRight: "1vw" }}
            />
            <input
              className="button"
              variant="outlined"
              placeholder="Last Name"
            />
          </div>
          <input
            className="button"
            variant="outlined"
            placeholder="Email"
            color="secondary"
            style={{
              marginBottom: "2vh",
            }}
          />
          <input
            className="button"
            variant="outlined"
            placeholder="Phone Number"
            type="tel"
            style={{
              marginBottom: "2vh",
            }}
          />
          <input
            className="button"
            variant="outlined"
            placeholder="Address"
            style={{
              marginBottom: "2vh",
            }}
          />
          <div
            style={{
              marginBottom: "2vh",
            }}
          >
            <input
              className="button"
              variant="outlined"
              placeholder="City"
              style={{ marginRight: "1vw" }}
            />
            <input className="button" variant="outlined" placeholder="State" />
          </div>
          <div style={{ marginBottom: "2vh" }}>
            <input
              className="button"
              variant="outlined"
              placeholder="Pin Code"
              style={{
                marginRight: "1vw",
              }}
            />
            <input
              className="button"
              variant="outlined"
              placeholder="Country"
            />
          </div>
          <input
            className="button"
            variant="outlined"
            placeholder="Password"
            type="password"
            style={{
              marginBottom: "2vh",
            }}
          />
          <button
            className="button button-primary"
            style={{
              alignSelf: "flex-start",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
