import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // console.log(tuit)
    const likeClickHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    }
    return (
        <div className="row mt-2">
            <div className="col-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-chat"></i></span>
                <span className="">{tuit.stats?.comments}</span></div>
            <div className="col-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-repeat"></i></span>
                <span className="">{tuit.stats?.retuits}</span>
            </div>
            <div className="col-3 text-secondary text-decoration-none" onClick={() => likeClickHandler(tuit._id)}>
          <span className="me-2"> {
              tuit.stats.liked && <i className="bi bi-heart-fill" style={{color: tuit.stats?.liked ? "red": "white"}}></i>
          }
              {
                  !tuit.stats.liked && <i className="bi bi-heart-fill"></i>
              }</span>
                <span className="">{tuit.stats?.likes}</span>
            </div>
            <div className="col-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-upload"></i></span>
            </div>
            <div className="col">
            </div>
        </div>
    );
}
export default TuitStats;