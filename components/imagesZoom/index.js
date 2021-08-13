import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from './styles';
//로직에 핵심적인 부분만 보여주고 쩌리들은 따로 파일생성해서 빼주자.
const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    {/* afterChange 이미지가 넘어간 후 콜백 실행 */}
                    <Slider
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        dots={true}
                        speed={500}
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        appendDots={dots => (
                            <ul>
                                {dots}
                            </ul>
                        )}
                    >
                        {images.map((v) => (
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImgWrapper>
                        ))}
                    </Slider >
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    );
}
ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
}
export default ImagesZoom;