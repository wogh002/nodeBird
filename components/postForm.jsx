import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const imageInput = useRef();
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { imagePaths } = useSelector(state => state.post);
    const onChangeText = useCallback(({ target }) => setText(target.value), []);
    const onSubmit = useCallback(() => {
        dispatch(addPost());
        setText('');
    }, []);
    const onClickImageUpload = useCallback(() => imageInput.current.click(), [imageInput.current]);
    
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="sumbit">
                    짹짹
                </Button>
            </div>
            <div>
                {
                    imagePaths.map((v) => (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </Form>
    )
}

export default PostForm;