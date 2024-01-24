import React, { Fragment, useEffect, useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Loader from "../Layout/Loader/Loader";
import "./ForgetPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, forgetPassword } from "../../actions/userAction";
import MetaData from "../Layout/MetaData";
const ForgetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgetPassword
  );
  const [email, setEmail] = useState("");
  const forgetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgetPassword(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forget Password" />
          <div className="forgetPasswordContainer">
            <div className="forgetPasswordBox">
              <h2 className="forgetPasswordHeading">Forgot Password</h2>
              <form
                className="forgetPasswordForm"
                onSubmit={forgetPasswordSubmit}>
                <div className="loginPassword">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="forgetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgetPassword;
