import React from "react";
import TuitStats from "./TuitStats.js";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <table>
                <tbody>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle"
                             src={tuit['logo']} style={{height: "40px"}} alt="logo"/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        {<i className="ms-1 bi bi-check-circle-fill text-primary"></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>
                        <div>
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