import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState(
    "data:image/png;base64,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"
  );
  const [avatarPreview, setAvatarPreview] = useState(
    "data:image/png;base64,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"
  );
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    console.log("SignUp Form Submit");
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}>
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignup;
