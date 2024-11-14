import React from "react";
import "./Header.css";
import Netflixlogo from "../../Asset/Images/Netflixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-Top-container">
      <div className="header-container">
        <div className="left-header">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My list</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div className="right-container">
          <ul>
            <li>
              {" "}
              <SearchIcon />{" "}
            </li>
            <li>
              {" "}
              <NotificationsNoneIcon />
            </li>
            <li>
              {" "}
              <AccountBoxIcon />{" "}
            </li>
            <li>
              {" "}
              <ArrowDropDownIcon />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
