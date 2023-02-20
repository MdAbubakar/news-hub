import React from "react";

const NewsItem = (props) => {
  let { title, description, newsUrl, imgUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger">Source: {source}</span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://c.ndtvimg.com/2023-02/9btql87c_chatbot_625x300_17_February_23.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text">{description}...</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-outline-info"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
