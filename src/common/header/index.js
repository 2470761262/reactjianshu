import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
//连接父组件注入的store数据
import { connect } from 'react-redux';
import { actionCreates } from "./store";

import * as comUi from './style';

class Header extends Component {

    constructor(props){
        super(props);

        this.AngleOriginDom = React.createRef();
    }
    
    switchHotUl () {
        const {
            list,
            focused,
            page,
            mouseIn,
            HeaderMouserEnter,
            HeaderMouseLeave,
            headerPageChange,
            totalPage,
            limit
        } = this.props;

        const newList = list.toJS();//list被转换成了immutable类型,不能直接下标去获取需要用immutable的方砖转成普通数组

        const pageList = [];

        if (newList.length === 0) return null;

        for (let i = (page - 1) * limit; i < page * limit; i++) {
            pageList.push(
                <comUi.SearchLi key={i}>{newList[i]}</comUi.SearchLi>
            );
        }

        if (focused || mouseIn) {
            return (
                <comUi.SearchUl
                    onMouseEnter={HeaderMouserEnter}
                    onMouseLeave={HeaderMouseLeave}
                >
                    <comUi.SearchUlHeader>
                        <comUi.SearchUlTitle>热门搜索</comUi.SearchUlTitle>
                        <comUi.SearchUlHotSwitch
                            onClick={() => { headerPageChange(page, totalPage,this.AngleOriginDom) }}>
                            换一批
                            <i className="iconfont" ref={this.AngleOriginDom}>&#xe6a0;</i>
                        </comUi.SearchUlHotSwitch>
                    </comUi.SearchUlHeader>
                    {pageList}
                </comUi.SearchUl>
            )
        } else {
            return null;
        }
    }

    render (h) {
        return (
            <comUi.HeaderWrapper>
                <comUi.Logo href="/" />
                <comUi.Nav >
                    <comUi.NavItem className="left active">首页</comUi.NavItem>
                    <comUi.NavItem className="left">下载App</comUi.NavItem>
                    <comUi.NavItem className="right">登陆</comUi.NavItem>
                    <comUi.NavItem className="right">
                        <i className="iconfont">&#xe6a0;</i>
                    </comUi.NavItem>
                    <comUi.NavSearchWarper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide">
                            <comUi.NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handerInputFocus}
                                onBlur={this.props.handerInputBlur}
                            />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6a0;</i>
                        {this.switchHotUl()}
                    </comUi.NavSearchWarper>
                </comUi.Nav>
                <comUi.Addition>
                    <comUi.Button className="writting">写文章</comUi.Button>
                    <comUi.Button className="reg">注册</comUi.Button>
                </comUi.Addition>
            </comUi.HeaderWrapper>
        )
    }
}



//mapState 获取 需要的store数据
const mapStateToProps = (state) => {
    //使用了immutableJs将不能在直接点获取需要store属性
    //防止误修改了store数据 需要使用get获取对应的属性值
    return {
        //1. focused: state.header.focused
        focused: state.getIn(["header", "focused"]), // 等同 state.get("header").get("focused")
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        totalPage: state.getIn(["header", "totalPage"]),
        limit: state.getIn(["header", "limit"])
    }
}

//mapDispatch 派发 dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        handerInputFocus () {
            dispatch(actionCreates.searchFocus());
            dispatch(actionCreates.getList());
        },
        handerInputBlur () {
            dispatch(actionCreates.searchBule());
        },
        HeaderMouserEnter () {
            dispatch(actionCreates.changeMouseIn(true));
        },
        HeaderMouseLeave () {
            dispatch(actionCreates.changeMouseIn(false));
        },
        headerPageChange (page, totalPage,angleDom) {
            console.log(angleDom.current.style.transform);
            angleDom.current.style.transform = 'rotate(100deg)';
            if (page < totalPage) {
                dispatch(actionCreates.changePage(page + 1));
            } else {
                dispatch(actionCreates.changePage(1));
            }
        }
    }
}
//连接 store 
export default connect(mapStateToProps, mapDispatchToProps)(Header);