import {handleActions} from "redux-actions";
import {GET_LIST} from "../types/list";

export default handleActions(
    {
        [GET_LIST](state,actions){
            return {
                ...state,
                allList:[...actions.payload]
            }
        }
    },
    {
        allList:[]
    }
)