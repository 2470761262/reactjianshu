import style from 'styled-components';
import logoPic from '../../statics/jianshuLogo.png';

export const HeaderWrapper = style.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = style.a`
    position:absolute;
    display:block;
    width:100px;
    height:100%;
    top:0;
    left:0;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = style.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = style.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`

export const NavSearch = style.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    padding:0 20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter,&.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit-active {
        width:160px;
    }
`

export const Addition = style.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button =  style.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    border:1px solid #ec6149;
    line-height:38px;
    padding:0 20px;
    border-radius:19px;
    font-size:14px;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
`
export const NavSearchWarper = style.div`
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#999;
            border-radius:50%;
        }
    }
`;


export const SearchUl = style.div`
    position: absolute;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    padding: 10px;
    width: 240px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 2px;
    bottom: -5px;
    transform: translateY(100%);
`

export const SearchUlHeader = style.div`
    display:flex;
    justify-content: space-between;
`

export const SearchUlTitle = style.div`
    font-size:15px;
`
export const SearchUlHotSwitch = style.div`
    font-size:13px;
`

export const SearchLi = style.div`
    border:1px solid #ddd;
    border-radius: 3px;
    font-size:13px;
    padding:2px;
    display: inline-block;
    margin:10px 5px 0;
`

export const uuu  = style.ul`
    width:50px;
    height:50px;
    background:red;
`

export const uuuli  = style.li`
    width:50px;
    height:50px;
    background:red;
`