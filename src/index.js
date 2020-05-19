import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Marco"
    lastName="Elizalde"
    jobTitle="Backend Engineer"
    twitter="marcoETmx"
    avatarUrls="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
  />,
  container
);
