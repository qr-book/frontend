import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentPublish } from "../service/validator";
import api from "../service/api";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/user";

function ModalComment() {
  const { email, password } = useSelector((state) => state.user);
  const [modalView, setModalView] = React.useState(false);
  const modalRef_ = React.useRef();
  const modalRef = React.useRef();
  const buttonRef = React.useRef();

  const handleVisibleModal = () => {
    setModalView(!modalView);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (
      path.includes(modalRef_.current) &&
      !path.includes(modalRef.current) &&
      !path.includes(buttonRef.current)
    ) {
      setModalView(false);
    }
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(commentPublish),
  });

  const onSubmit = async ({ rating, text }) => {
    try {
      await api.stats.create(rating, text, email, password);
      window.location.replace("/feedback");
    } catch (e) {
      if (e.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div>
      <div
        ref={buttonRef}
        className="comment-button"
        onClick={handleVisibleModal}
      >
        Add comment
      </div>
      {modalView ? (
        <form
          ref={modalRef_}
          className="modal-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div ref={modalRef} className="modal-comment col">
            <span>Mark</span>
            <div className="rating-mark">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                {...register("rating", {
                  required: true,
                  onChange: (e) => {
                    clearErrors("frameText");
                  },
                })}
              />
              <label htmlFor="star5"></label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                {...register("rating", {
                  required: true,
                  onChange: (e) => {
                    clearErrors("frameText");
                  },
                })}
              />
              <label htmlFor="star4"></label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                {...register("rating", {
                  required: true,
                  onChange: (e) => {
                    clearErrors("frameText");
                  },
                })}
              />
              <label htmlFor="star3"></label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                {...register("rating", {
                  required: true,
                  onChange: (e) => {
                    clearErrors("frameText");
                  },
                })}
              />
              <label htmlFor="star2"></label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                {...register("rating", {
                  required: true,
                  onChange: (e) => {
                    clearErrors("frameText");
                  },
                })}
              />
              <label htmlFor="star1"></label>
            </div>
            <span>Add comment</span>
            <textarea
              rows={9}
              placeholder="Write something about our service"
              {...register("text", {
                onChange: (e) => {
                  clearErrors("frameText");
                },
              })}
            ></textarea>
            <p className="error-msg">
              {errors.rating?.message || errors.text?.message}
            </p>
            <button type="submit" className="publish-modal-button">
              Publish
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalComment;
