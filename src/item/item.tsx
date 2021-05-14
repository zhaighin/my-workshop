import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC } from 'react';
import './item.css';

const Item: FC = () => {
    return (
        <Card
            className="card-item"
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete" />
            ]}
        >
            <Meta
                title="Card title"
            />
        </Card>
    );
}

export default Item;