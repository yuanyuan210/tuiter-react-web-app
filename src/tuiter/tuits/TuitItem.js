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
            <table>
                <tbody>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle"
                             src={`/images/${tuit.image}`} style={{height: "40px"}} alt="avatar"/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        {<i className="ms-1 bi bi-check-circle-fill text-primary"></i>}
                        <span className="ms-1 text-secondary">{tuit.handle}</span>
                        <div className="mt-2">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TuitListItem;