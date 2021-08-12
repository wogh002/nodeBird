import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './imagesZoom';
const PostImages = ({ images }) => {
    const [showImageZoom, setShowImageZoom] = useState(false);
    const onClose = useCallback(() => setShowImageZoom(false) , []);
    const onZoom = useCallback(() => {
        setShowImageZoom(true);
    }, []);
    if (images.length === 1) {
        // role="presentation" 
        //스크린리더가 이거 클릭할 순 있지만 굳이 클릭할 필욘없다 ! 라고 설명
        return (
            <>
                <img role="presentation" style={{ width: "100%", maxHeight: "200px" }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    if (images.length === 2) {
        return (
            <>
                <img role="presentation" style={{ display: "inline-block", width: "50%" }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{ display: "inline-block", width: "50%" }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    return (
        <>
            <div>
                <img role="presentation" style={{ width: "50%" }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <div
                    role="presentation"
                    style={{ display: "inline-block", width: '50%', textAlign: "center", verticalAlign: 'middle' }}
                    onClick={onZoom}
                >
                    <PlusOutlined />
                    <br />
                    {images.length - 1} 개의 사진 더보기
                </div>
            </div>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
}
PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default PostImages;