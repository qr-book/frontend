import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEdit } from "../service/validator";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../redux/actions/user";

import defaultAvatarPng from "../assets/img/default_avatar.png";

function ProfileEdit() {
  const { lastEmail, password, name, avatar } = useSelector(({ user }) => {
    return {
      lastEmail: user.email,
      password: user.password,
      name: user.name,
      avatar: user.avatar,
    };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(userEdit),
  });
  const dispatch = useDispatch();
  const onSubmit = async ({ email, name, avatar }) => {
    dispatch(editUser(email, name, avatar, lastEmail, password));
  };

  return (
    <div className="main">
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="profile-form"
        >
          <div className="form-avatar">
            <img
              src={
                avatar !== null
                  ? `https://localhost/image?hash=${avatar}`
                  : defaultAvatarPng
              }
              alt=""
            />
            <label htmlFor="avatar">
              <div className="button link">New</div>
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/*"
                {...register("avatar")}
              />
            </label>
          </div>
          <div className="form-info">
            <p className="error-msg">
              {errors.email?.message || errors.name?.message}
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
