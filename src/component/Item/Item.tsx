import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useState } from 'react';
import EditItemModal from '../EditItemModal';
import './Item.css';

// TODO: change any to types
type Props = {
    item: any
}

const Item: FC<Props> = (props) => {
    const { item } = props;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (data: any) => {
        console.log(data);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                className="card-item"
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <EditOutlined key="edit" onClick={showModal} />,
                    <DeleteOutlined key="delete" />
                ]}
            >
                <Meta
                    title={item.name}
                />
            </Card>
            <EditItemModal data={item} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></EditItemModal>
        </>
    );
}

export default Item;