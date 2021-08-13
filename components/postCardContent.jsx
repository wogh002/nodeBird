import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
const PostCardContent = ({ postData }) => ( //첫 번째 게시글 #해시태그 #익스프레스
    <div>
        {postData.split(/(#[^\s#]+)/g).map((item, index) => {
            if (item.match(/(#[^\s#]+)/)) {
                // 사용자의 의도가 없으면 postData는 절때 바뀔일이 없다.
                //그래서 key=index
                return (
                    <Link key={index} href={`/hashtag/${item.slice(1)}`}>
                        <a>{item}</a>
                    </Link>  
                )
            }
            return item;
        })}
    </div>
);
PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};
export default PostCardContent;