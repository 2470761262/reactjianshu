import { constants } from "./index";
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
}
export const searchBule = () => {
    return {
        type: constants.SEARCH_BLUR
    }
}

export const changeList = (data) => {
    return {
        type: constants.CHANGE_LIST,
        data: fromJS(data.data),
        totalPage: data.totalPage
    }
}

export const changeMouseIn = (value) => {
    return {
        type: constants.CHANGE_MOUSEIN,
        value: value
    }
}

export const changePage = (value) => {
    return {
        type: constants.CHANGE_PAGE,
        value: value,
        totalPage: value.totalPage
    }
}

export const getList = () => {
    return (dispatch, state, b) => {
        axios.get("mockJson/header.json").then((e) => {
            const data = e.data;
            if (data.success) {
                let list = data.data;
                let totalPage = Math.ceil(list.length / state().getIn(["header", "limit"]));
                dispatch(changeList({ data: list, totalPage }));
            }
        }).catch(() => {

        })
    }
}