import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-9 col-xl-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="row">
                        <div className="fw-bold">{post.userName}
                            <span className="fw-light text-secondary">- {post.time}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="fw-bold">
                            {post.title}
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
                <div className="col-md-3 col-xl-2">
                    <img className="img-fluid rounded-3"
                         src={`/images/${post.image}`}
                         alt={"..."}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;