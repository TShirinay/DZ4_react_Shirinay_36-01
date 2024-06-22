import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


 export const axiosDateUsers = createAsyncThunk(
    'dateUsers/axiosDateUsers',
    async (data) => {
        const response = await axios.post('https://6676a74d145714a1bd72658f.mockapi.io/user',data)
        return response
    }
)