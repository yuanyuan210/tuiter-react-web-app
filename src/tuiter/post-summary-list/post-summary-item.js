import React from "react";
const PostSummaryItem = (
    {
        post = {
            "_id": 1,
            "topic": "Space",
            "avatar": "avatar.jpg",
            "userName": "SpaceX",
            "handle": "spacex",
            "time": "2h",
            "abstract": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about.",
            "content": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars.",
            "liked": true,
            "comments": "4.2K",
            "retuit": "3.5K",
            "likes": "37.5K"
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