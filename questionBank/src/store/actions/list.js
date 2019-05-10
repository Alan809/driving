import {createAction} from "redux-actions";
import {GET_LIST} from "../types/list";
import Utils from "../../utils/request";

export const getData=createAction(
    GET_LIST,
    (url)=>{
        return Utils.get(url)
    }
)