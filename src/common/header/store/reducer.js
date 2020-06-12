import { constants } from "./index";
import { fromJS } from 'immutable';
const defaultSate = fromJS({
    focused: false,
  //  sorry: {name: 1543},
    list: [],
    page:1,
    totalPage:1,
    mouseIn:false,
    limit:7,
    sorry:5
});

export default (state = defaultSate, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
          let zz =  state.merge({
            focused:true,
                sorry: {
                        gogo:1,
                        soso:2,
                        xixi:[
                            {wo:"hha"}
                        ]
                    }
            })
           // state.set("focused", true);
            
            
            return zz;
        case constants.SEARCH_BLUR:
            return state.set("focused", false);
        case constants.CHANGE_LIST:
          //  return state.set("list", action.data).set("totalPage",action.totalPage);
          return state.merge({
            list:action.data,
            totalPage:action.totalPage
          })
        case constants.CHANGE_MOUSEIN:
            return state.set("mouseIn",action.value);
        case constants.CHANGE_PAGE:
            let gg= state.merge({
                    page:action.value,
                    sorry:Object.assign({},state.get("sorry"),{
                        xixi:[
                            {wo:"hha"},
                            {wo2:"hha3"}
                        ]
                    })

                })

            return gg //state.set("page",action.value);
        default:
            return state;
    }
}

// if (action.type === constants.SEARCH_FOCUS) {
    //     //immutable 对象的set，会结合之前的immutable对象的值
    //     //和设置的值,返回一个全新的对象
    //     // console.log(state.get("sorry").get("name"));
    //     return state.set("focused", true);
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     // console.log();
    //     // const result = state.set("sorry").set("name",777);
    //     // return  result.set("focused",false);
    //     return state.set("focused", false);
    // }

    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set("list", action.data);
    // }