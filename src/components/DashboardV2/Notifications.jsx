import {
  Avatar,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Context } from "./context";
import { Add } from "@material-ui/icons";
import "./settings.css";

const Settings = () => {
  return (
    <div className="dashboard-settings">
      <div className="settings-area" style={{ padding: 0 }}>
        <div className="settings-nav" style={{ width: "20vw", paddingTop: 0 }}>
          <List style={{ padding: 0 }}>
            <ListItem
              fullWidth
              divider
              style={{
                display: "flex",
                flexDirection: "column",
                // background: "#181b22",
                paddingBottom: "16px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="h6">Messages</Typography>
                <IconButton>
                  <Add />
                </IconButton>
              </span>
              <FormControl fullWidth>
                <InputLabel
                  style={{ paddingLeft: "1vw", color: "#8A94A7" }}
                  id="demo-simple-select-label"
                >
                  All Messages
                </InputLabel>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{
                    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 60%)",
                    color: "white",
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            {[
              {
                title: "title",
                subTitle: "Sub Title",
                time: "1:20pm",
                tags: ["request", "email"],
              },
              {
                title: "title",
                subTitle: "Sub Title",
                time: "1:20pm",
                tags: ["request", "email"],
              },
              {
                title: "title",
                subTitle: "Sub Title",
                time: "1:20pm",
                tags: ["request", "email"],
              },
              {
                title: "title",
                subTitle: "Sub Title",
                time: "1:20pm",
                tags: ["request", "email"],
              },
              {
                title: "title",
                subTitle: "Sub Title",
                time: "1:20pm",
                tags: ["request", "email"],
              },
            ].map((message, ndx) => {
              return (
                <ListItem
                  divider
                  key={ndx}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "80%",
                    }}
                  >
                    <Typography variant="h6" style={{ paddingBottom: "16px" }}>
                      {message.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ paddingBottom: "16px" }}
                    >
                      {message.subTitle}
                    </Typography>
                    <span>
                      {message.tags.map((tag, ndx) => (
                        <Chip
                          style={{
                            marginRight: "16px",
                            color: "#8A94A7",
                            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 60%)",
                          }}
                          variant="outlined"
                          key={ndx}
                          label={tag}
                        />
                      ))}
                    </span>
                  </span>
                  <span>
                    <Typography> {message.time} </Typography>
                  </span>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div
          className="settings-display"
          style={{
            width: "100%",
            marginLeft: "2vw",
            // border: "1px solid cyan",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            paddingRight: " 16px",
          }}
        >
          <input
            type="text"
            className="button"
            placeholder="Search for objects, contacts, documents, etc"
            style={{
              width: "90%",
              borderRadius: "10px",
            }}
          />
          <div
            className="message-body"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "6vh",
            }}
          >
            <Typography variant="h5">Title</Typography>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "3vh",
                paddingBottom: "3vh",
                alignItems: "center",
              }}
            >
              <Avatar
                style={{ width: "40px", height: "40px", marginRight: "16px" }}
              ></Avatar>
              <Typography variant="body1" style={{ marginRight: "16px" }}>
                Name
              </Typography>
              <Typography variant="caption">2:32pm</Typography>
            </span>
            <span>
              <Typography variant="body1">
                Good afternoon, <br />
                <br />
                We have been trying to react you regarding your car's extended
                warranty. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Sed in felis at odio porttitor
                volutpat. Nullam gravida id odio at blandit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vivamus sagittis
                venenatis fringilla. Phasellus imperdiet auctor lorem, id
                blandit quam. Vivamus at lacus turpis. Duis tempus, sem eu
                luctus pellentesque, massa arcu consequat mauris, a venenatis
                turpis massa vel turpis. Fusce laoreet dolor sit amet eros
                malesuada, in lobortis purus facilisis. Sed sed posuere est. Sed
                ut sem justo. Quisque purus enim, sagittis et gravida nec,
                dictum et urna.
                <br /> <br />
                With kind regards <br />
                Name
              </Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
