import React from "react";

import defaultAvatar from "../assets/img/default_avatar.png";
import fillStar from "../assets/img/rating-star-fill.svg";
import emptyStar from "../assets/img/rating-star-empty.svg";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function CommentBlock({ data, onClickDelete }) {
  return (
    <div className="comment">
      <div className="comment-top">
        <div className="user">
          <img src={defaultAvatar} alt=""></img>
          <span>Jane Cooper</span>
        </div>
        <div class="mark-rating-stars">
          {Array(data.mark)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="star">
                  <img src={fillStar} alt="" />
              </div>
            ))}
            {Array(5 - data.mark)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="star">
                  <img src={emptyStar} alt="" />
              </div>
            ))}
        </div>
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
