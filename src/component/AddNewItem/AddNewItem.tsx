import React, { FC, useState } from 'react';
import './AddNewItem.css';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EditItemModal from '../EditItemModal';

const AddNewItem: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button className="add-new-btn" type="primary" icon={<PlusOutlined />} onClick={showModal}>Add new item</Button>
            <EditItemModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} modalTitle="Add New Item"></EditItemModal>
        </div>
    );


}

export default AddNewItem;