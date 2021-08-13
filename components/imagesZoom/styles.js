import { CloseOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
// createGlobalStyle 이란 지정한 클래스를 Global에서 추가한 스타일로 덮어 씌워진다. 
//만든 Global은 아무곳이나 넣어줘도된다
export const Global = createGlobalStyle`
.slick-slide {
    display: inline-block;
}
.ant-card-cover{
    transform: none !important;
}
.slick-dots {
    display: flex;
    justify-content: center;
    align-items:center;
    list-style: none;
    & li{
        
    }
    & li button{
        cursor: pointer;
        border: none;
        background: transparent;
        color: white;
    }
}
`;
export const Overlay = styled.div`
position: fixed;
z-index : 5000;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
export const Indicator = styled.div`
text-align:center;
/* text-align : block요소 (현재는 Indicator) 안에 있는 inline만 적용가능 */
& > div {
    display: inline-block;
    width: 75px;
    height: 30px;
    border-radius: 15px;
    background: white;
}
`
export const Header = styled.header`
height: 44px;
background: white;
position: relative;
padding: 0;
text-align: center;
& h1{
    margin: 0;
    font-size: 17px;
    color: #333;
}
& button{
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    cursor: pointer;
}
`
export const SlickWrapper = styled.div`
height: calc(100%-44px);
background: #090909;
`
export const ImgWrapper = styled.div`
padding: 32px;
text-align: center;
& img {
    margin: 0 auto;
    max-height: 750px;
}
`
export const CloseBtn = styled(CloseOutlined)`
position: absolute;
right: 0;
top:0;
padding:15px;
cursor: pointer;
`