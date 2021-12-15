import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEdit } from "../service/validator";
import api from "../service/api";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setName, logoutUser } from "../redux/actions/user";

import defaultAvatarPng from "../assets/img/default_avatar.png";

function ProfileEdit() {
  const { lastEmail, password, name } = useSelector(({ user }) => {
    return {
      lastEmail: user.email,
      password: user.password,
      name: user.name,
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(userEdit),
  });

  const dispatch = useDispatch();
  const onSubmit = async ({ email, name }) => {
    try {
      await api.user.edit(email, name, lastEmail, password);
      dispatch(setName(name));
      dispatch(setEmail(email));
      window.location.replace("/profile");
    } catch (e) {
      if (e.response.status === 401) {
        setError("data", {
          type: "manual",
          message: e.response.data.data,
        });
        dispatch(logoutUser());
      }
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
          <div className="form-avatar">
            <img src={defaultAvatarPng} alt="" />
            <label htmlFor="avatar">
              <div className="button link">New</div>
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/jpeg,image/png"
              />
            </label>
          </div>
          <div className="form-info">
            <p className="error-msg">
              {errors.email?.message ||
                errors.name?.message ||
                (errors.data ? errors.data.message : null)}
            </p>
            <input
              type="text"
              name="nickname"
              defaultValue={name}
              placeholder="nickname"
              {...register("name", {
                required: true,
                onChange: () => {
                  clearErrors("data");
                },
              })}
            />
            <input
              type="text"
              name="email"
              defaultValue={lastEmail}
              placeholder="example@qr.com"
              {...register("email", {
                onChange: () => {
                  clearErrors("data");
                },
              })}
            />
          </div>
          <button type="submit" className="link submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
