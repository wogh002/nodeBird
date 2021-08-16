import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequestAction } from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = () => {
    const [text, onChangeText, setText] = useInput('');

    const dispatch = useDispatch();
    const { imagePaths, addPostDone } = useSelector(state => state.post);

    const onSubmit = useCallback(() => {
        dispatch(addPostRequestAction(text));
        // setText('');
        //왜 위에서 setText 지워주웠냐면 => 만약 서버쪽에서 에러발생했다고 가정한다면,
        //사용자에게 에러발생하였습니다 잠시기다려주세요 하는데 게시글 다삭제되면 빡치니까.
    }, [text]);

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);
    const imageInput = useRef();
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