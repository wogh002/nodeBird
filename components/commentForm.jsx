import React, { useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import { Form, Input, Button } from "antd";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentRequestAction } from '../reducers/post';
//댓글 Form
const CommentForm = ({ post }) => {
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const dispatch = useDispatch();
    const id = useSelector(({ user }) => user.me?.id);
    const { addCommentDone, addCommentLoading } = useSelector(({ post }) => post);
    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        dispatch(addCommentRequestAction({
            postId: post.id,//게시글 id    
            content: commentText,
            userId: id, //user ID : 1
        }));
    }, [commentText, id]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button
                    style={{ position: "absolute", right: 0, bottom: -40, zIndex: 1 }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}>
                    삐약
                </Button>
            </Form.Item>
        </Form>
    )
};
CommentForm.propTypes = {
    post: PropTypes.object.isRequired
}
export default CommentForm;