import React, { useCallback, useMemo } from 'react';
import { List, Button, Card } from "antd";
import PropTypes from "prop-types";
import { StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const ListItems = styled(List)`
    margin-bottom: 20px;
`
const ListItem = styled(List.Item)`
    margin-top: 20px;
`
const FollowingList = ({ header, data }) => {
    //리액트에서 배열안에 jsx 사용시 key 값 필수
    //리액트에서 컴포넌트의 props 에 함수로 들어가는 것은 useCallback 으로 최적화 해주자.
    const renderItem = useCallback(item => (
        <ListItem>
            <Card actions={[<StopOutlined key="stop" />]}>
                <Card.Meta description={item.nickname} />
            </Card>
        </ListItem>
    ), []);
    const buttonWrapper = useMemo(() => ({ textAlign: "center", margin: "10px 0" }), []);
    const grid = useMemo(() => ({ gutter: 4, xs: 1, md: 3 }), [])
    return (
        <ListItems
            grid={grid}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={buttonWrapper}><Button>더보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={renderItem}
        />
    )
}
FollowingList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default FollowingList;