import React from "react";
import TuitListItem from "./TuitItem.js";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits);
    return (
        <ul className="list-group">
            {
                tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    )
}

export default TuitList