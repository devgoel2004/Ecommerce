import React, { Fragment, useState } from "react";
import "./Header.css";
import { Backdrop } from "@material-ui/core";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
const UserOptions = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const account = () => {
    navigate("/account");
  };
  const dashboard = () => {
    navigate("/dashboard");
  };
  const orders = () => {
    navigate("/orders");
  };
  const logoutUser = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
  };

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        className="speedDial"
        ariaLabel="SpeedDial tooltip example"
        sx={{ "& .MuiFab-primary": { width: 50, height: 50 } }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            style={{ zIndex: "11" }}
          />
        }
        direction="down">
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
