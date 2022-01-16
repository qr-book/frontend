import React from "react";
import { CommentBlock, CommentLoadBlock, ModalComment } from "../components";
import api from "../service/api";

function Comments() {
  const [stats, setStats] = React.useState({ stats: {}, comments: {} });
  const [isLoaded, setLoaded] = React.useState(0);

  let total = Number(stats?.stats?.mean);
  let marks = { data: new Array(6).fill(0), total: 0 };
  console.log(marks);

  const countMarks = () => {
    let stats_ = stats.stats;
    for (let key in stats_) {
      if (stats_[key]?.mark) {
        marks.data[stats_[key].mark] = stats_[key].count;
        marks.total += stats_[key].count;
      }
    }
    if (marks.total)
      for (let mark = 1; mark < 6; ++mark) {
        marks.data[mark] = ((marks.data[mark] * 100) / marks.total).toFixed(1);
      }
  };
  countMarks();

  const onRemoveComment = (id) => {
    api.stats.delete(id);
    setStats(api.stats.get().then(({ data }) => setStats(data.data)));
  };

  React.useEffect(() => {
    setStats(
      api.stats
        .get()
        .then(({ data }) => setStats(data.data))
        .then(() => setLoaded(1))
    );
  }, []);

  return (
    <div className="main feedback">
      <div className="container">
        <div className="rating">
          <div className="col">
            <div className="total">
              <span>
                {total ? total.toFixed(1).toString().replace(".", ",") : "0,0"}
              </span>
            </div>
            <div
              className="rating-stars"
              style={{ "--r": stats?.stats?.mean | 0 }}
            ></div>
            <ModalComment />
          </div>
          <section
            id="marks"
            className="toad-fullscreen"
            style={{
              "--marks01": marks.data[1] + "%",
              "--marks02": marks.data[2] + "%",
              "--marks03": marks.data[3] + "%",
              "--marks04": marks.data[4] + "%",
              "--marks05": marks.data[5] + "%",
            }}
          >
            <article className="marks">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index} className="t-6">
                      <p>
                        {5 - index}
                        <span></span>
                        <span className="marks"></span>
                      </p>
                    </div>
                  );
                })}
            </article>
          </section>
        </div>
        <div className="comments">
          {isLoaded ? (
            stats.comments?.length > 0 ? (
              stats.comments.map((obj) => (
                <CommentBlock
                  key={obj.id}
                  data={obj}
                  onClickDelete={onRemoveComment}
                />
              ))
            ) : (
              <h1>You can be first! Just do it!</h1>
            )
          ) : (
            Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="comment">
                  <CommentLoadBlock />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;
