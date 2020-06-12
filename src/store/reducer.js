import { combineReducers } from 'redux-immutable';

//类似vuex的模块化管理
import { reducer as headerModule} from '../common/header/store/index';


//合并模块
export default combineReducers({
    header:headerModule
})