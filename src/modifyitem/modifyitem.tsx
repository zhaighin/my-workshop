import React, { FC, useState } from 'react';
import './modifyitem.css';
import { Button, Form, Image, Input, message, Modal, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const ModifyItem: FC = () => {

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

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                setImageUrl(imageUrl);
                setLoading(false);
            })
        }
    };


    function getBase64(img: any, callback: any) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file: any) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div>
            <Button className="add-new-btn" type="primary" icon={<PlusOutlined />} onClick={showModal}>Add new item</Button>
            <Modal title="Add new item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={700}>
                <div className="modify-item-container">
                    <div className="modify-item-image">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                    <Form
                        className="modify-item-input-form"
                        name="modify_item"
                        layout="vertical"
                    >
                        <Form.Item
                            label="Title"
                            name="Title">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description">
                            <TextArea rows={4} />
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
        </div>
    );


}

export default ModifyItem;