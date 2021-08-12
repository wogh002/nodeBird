import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { Form, Input, Button } from "antd";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const CommentForm = ({ post }) => {
    const [commentText, onChangeCommentText] = useInput('');
    const id = useSelector(({ user }) => user.me?.id);
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{ position: "absolute", right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    )
};
CommentForm.propTypes = {
    post: PropTypes.object.isRequired
}
export default CommentForm;