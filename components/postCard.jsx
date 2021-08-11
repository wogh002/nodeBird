import React, { useCallback, useState } from 'react';
import { Card, Button, Popover } from "antd";
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './postImages';
const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    //me?.id; 옵셔널체이닝 문법 me && me.id 동일 없으면 undefined 들어감
    const id = useSelector((state) => state.user.me?.id);
    //내가 로그인 한 상태라면 me 가 존재.
    const onToggleLike = useCallback(() => setLiked((prev) => !prev), []);
    const onToggleComment = useCallback(() => setCommentFormOpened(prev => !prev), []);
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
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id
                                ? (
                                    <>
                                        <Button>수정</Button>
                                        <Button type="danger">삭제</Button>
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
                    description={post.content}
                />
            </Card>
            {
                commentFormOpened && (
                    <div>
                        댓글부분
                    </div>
                )
            }
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