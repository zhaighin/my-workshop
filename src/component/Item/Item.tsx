import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Card, Modal } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC, useState } from 'react';
import EditItemModal from '../EditItemModal';
import './Item.css';

const { confirm } = Modal;

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

    const showDeleteConfirm = () => {
        confirm({
            title: `Do you want to delete ${item.name} ?`,
            icon: <ExclamationCircleOutlined />,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

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
                    <DeleteOutlined key="delete" onClick={showDeleteConfirm} />
                ]}
            >
                <Meta
                    title={item.name}
                />
            </Card>
            <EditItemModal modalTitle="Edit Item" data={item} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></EditItemModal>
        </>
    );
}

export default Item;