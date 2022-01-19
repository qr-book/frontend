import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions/user";
import api from "../service/api";
import { commentPublish } from "../service/validator";

function ModalComment() {
  let navigate = useNavigate();

  const { email, password, name } = useSelector((state) => state.user);
  const [comment, setComment] = React.useState();
  const [modalView, setModalView] = React.useState(false);
  const modalRef_ = React.useRef();
  const modalRef = React.useRef();

  const handleVisibleModal = async () => {
    if (email && password) {
      setModalView(!modalView);
      if (comment) {
        setTimeout(() => {
          document.getElementById(`star${comment.mark}`).checked = true;
        }, 10);
        setValue("text", comment?.text);
        setValue("rating", comment?.mark);
      }
    } else navigate("/login");
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (path.includes(modalRef_.current) && !path.includes(modalRef.current)) {
      setModalView(false);
    }
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentPublish),
  });

  const onSubmit = async ({ rating, text }) => {
    try {
      await api.stats.create(rating, text, email, password);
      window.location.reload();
    } catch (e) {
      if (e.response.status === 401) {
        dispatch(logoutUser());
        navigate("/login");
      }
    }
  };

  const onDelete = async (id) => {
    try {
      await api.stats.delete(id, email, password);
      window.location.reload();
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        dispatch(logoutUser());
        navigate("/login");
      }
    }
  };

  React.useEffect(() => {
    api.stats.getOne(11).then(({ data }) => setComment(data.data));
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div>
      <div className="comment-button" onClick={handleVisibleModal}>
        Add comment
      </div>
      {modalView ? (
        <form
          ref={modalRef_}
          className="modal-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div ref={modalRef} className="modal-comment col">
            <span className="username">{name}</span>
            <div className="rating-mark">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                {...register("rating", {
                  required: true,
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
                })}
              />
              <label htmlFor="star1"></label>
            </div>
            <span>Add comment</span>
            <textarea
              rows={9}
              placeholder="Write something about our service"
              {...register("text", {})}
            ></textarea>
            <p className="error-msg">
              {errors.rating?.message || errors.text?.message}
            </p>
            <div className="modal--buttons">
              <button
                type="button"
                className="modal--button modal--button--delete"
                onClick={() => onDelete(11)}
              >
                Delete
              </button>
              <button
                type="submit"
                className="modal--button modal--button--publish"
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default ModalComment;
