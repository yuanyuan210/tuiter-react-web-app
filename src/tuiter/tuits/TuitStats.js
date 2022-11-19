import React from "react";
import {useDispatch} from "react-redux";
//import {likeTuit} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";
//6.4
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // console.log(tuit)
    // const likeClickHandler = (tuit) => {
    //     dispatch(likeTuit(tuit));
    //}
    return (
        <div className="row mt-3 d-flex justify-content-between">
            <div className="col-md-2 col-sm-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-chat"></i></span>
                <span className="">{tuit.stats?.comments}</span></div>
            <div className="col-md-2 col-sm-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-repeat"></i></span>
                <span className="">{tuit.stats?.retuits}</span>
            </div>
            {/*<div className="col-3 text-secondary text-decoration-none" onClick={() => likeClickHandler(tuit._id)}>*/}
            <div className="col-3">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
                   className="bi bi-heart-fill me-2 text-danger"></i>
          <span className="me-2"> {
              tuit.liked && <i className="bi bi-heart-fill" style={{color: tuit.stats?.liked ? "red": "white"}}></i>
          }
              {
                  !tuit.liked && <i className="bi bi-heart-fill"></i>
              }</span>
                <span className="">{tuit.likes}</span>
            </div>
            <div className="col-3">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}
                   className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                <span className="text-secondary"> {tuit.dislikes}</span>
            </div>
            <div className="col-md-2 col-sm-3 text-secondary text-decoration-none" href="#">
                <span className="me-2"><i className="bi bi-upload"></i></span>
            </div>
            <div className="col">
            </div>
        </div>
    );
}
export default TuitStats;