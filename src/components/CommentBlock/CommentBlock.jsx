import React from "react";

import defaultAvatar from "../../assets/img/default_avatar.png";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function CommentBlock({ data, onClickDelete }) {
  return (
    <div className="comment">
      <div className="comment-top">
        <div className="user">
          <img src={defaultAvatar} alt=""></img>
          <span>Jane Cooper Cooper</span>
        </div>
        <div className="rating-stars" style={{ "--r": data.mark }}></div>
      </div>
      <div className="comment-text">
        <span>{data.text}</span>
      </div>
      <div className="comment-bottom">
        <span>{dayjs.utc(data.date_update).local().format("DD.MM.YY")}</span>
      </div>
    </div>
  );
}

export default CommentBlock;
