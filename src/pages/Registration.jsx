import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userReg } from "../service/validator";

import { useDispatch } from "react-redux";
import { regUser } from "../redux/actions/user";

import emailIconSvg from "../assets/img/email-icon.svg";
import passIconSvg from "../assets/img/password-icon.svg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(userReg),
  });

  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }) => {
    dispatch(regUser(email, password)).then(
      (err_data) =>
        err_data &&
        setError("data", {
          type: "manual",
          message: err_data,
        })
    );
  };

  return (
    <div className="main">
      <div className="container">
        <div className="col">
          <div className="auth-title">Sign up</div>
          <div className="reg-panel">
            <div className="google-plus">
              <span>Sign with</span>
              <span className="google+ google-btn">
                <svg
                  width="51"
                  height="31"
                  viewBox="0 0 51 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.8137 23.2455V17.0455H51V12.3974H44.8137V6.19744H40.1778V12.3974H33.994V17.0455H40.1778V23.2455H44.8137ZM15.4581 6.02842C18.352 6.02842 20.3009 7.26791 21.4094 8.32301L25.8078 4.04626C23.131 1.53656 19.6394 7.07993e-07 15.4581 7.07993e-07C6.93214 -0.00256022 0 6.94267 0 15.4987C0 24.0548 6.93214 31 15.4581 31C24.38 31 30.3032 24.7078 30.3032 15.8573C30.3032 14.5691 30.1397 13.6549 29.9124 12.6817H15.4504V18.4592H23.9611C23.5575 20.8946 21.3788 25.0049 15.4581 25.0049C10.342 25.0049 6.16843 20.7409 6.16843 15.5192C6.16843 10.2898 10.342 6.02842 15.4581 6.02842Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <hr />
            <span>Or</span>
            <form onSubmit={handleSubmit(onSubmit)} className="auth-block col">
              {
                <p className="error-msg">
                  {errors.email?.message ||
                    errors.password?.message ||
                    (errors.data ? "Sorry this " + errors.data.message : null)}
                </p>
              }
              <label htmlFor="email">
                <img src={emailIconSvg} alt="" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@qr.com"
                  {...register("email", {
                    required: true,
                    onChange: () => {
                      clearErrors("data");
                    },
                  })}
                />
              </label>
              <label htmlFor="password">
                <img src={passIconSvg} alt="" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••"
                  {...register("password", {
                    required: true,
                    onChange: () => {
                      clearErrors("data");
                    },
                  })}
                />
              </label>
              <button type="submit" className="auth-button link">
                Join
              </button>
            </form>
            <hr />
            <Link to="/login" className="link">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
