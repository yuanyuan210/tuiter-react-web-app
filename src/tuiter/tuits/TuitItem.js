import React from "react";
import TuitStats from "./TuitStats.js";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div>
                <div className="row p-1 d-flex justify-content-between">
                <div className="col-1">
                    <img className="rounded-circle"
                         src={`/images/${tuit.image}`} style={{height: "40px"}} alt="avatar"/>
                </div>
                    <div className="col-10 ps-md-0">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-9 col-10">
                                <span className="fw-bold">{tuit.userName}</span>
                                {<i className="ms-1 bi bi-check-circle-fill text-primary"></i>}
                                <span className="ms-1 text-secondary">{tuit.handle}· {tuit.time}</span>

                            </div>
                            <div className="col-1 fw-bolder text-dark">
                                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </div>
                        </div>
                        <div className="mt-1">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                        </div>
                    </div>
                </div>

        </li>
    );
};

export default TuitListItem;