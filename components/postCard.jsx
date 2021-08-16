import React, { useCallback, useState } from 'react';
import { Card, Button, Popover, List, Comment, Avatar } from "antd";
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './postImages';
import CommentForm from './commentForm';
import PostCardContent from './postCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';
const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    //me?.id; 옵셔널체이닝 문법 me && me.id 동일 없으면 undefined 들어감
    const id = useSelector((state) => state.user.me?.id);
    const { removePostLoading } = useSelector(state => state.post);
    //내가 로그인 한 상태라면 me 가 존재.
    const onToggleLike = useCallback(() => setLiked((prev) => !prev), []);
    const onToggleComment = useCallback(() => setCommentFormOpened(prev => !prev), []);
    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, []);
    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96 " key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={() => (
                        <Button.Group>
                            {/* 수정,삭제 버튼 보이려면 로그인해야되고 게시글 작성한 유저id가 같아야함.
                            현재 me.id ===1, 1 */}
                            {id && post.User.id === id
                                ? (
                                    <>
                                        <Button>수정</Button>
                                        {/* REMOVE_POST_REQUEST data : post.id */}
                                        <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                    </>
                                )
                                : <Button>신고</Button>
                            }
                        </Button.Group>
                    )
                    }>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length} 개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div >
    )
}
PostCard.propTypes = {
    //속성 자세하게 적어줄경우 shape 사용하자
    post: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        User: PropTypes.object,
        Images: PropTypes.arrayOf(PropTypes.object),
        //객체들의 배열 arrayOf
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}
export default PostCard;