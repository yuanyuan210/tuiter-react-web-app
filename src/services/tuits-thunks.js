import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"
import tuitStats from "../tuiter/tuits/TuitStats";

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>{
        const tuits = await service.findTuits()
        return tuits
    }
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (thunkAPI) =>
        await service.createTuit(thunkAPI)
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )