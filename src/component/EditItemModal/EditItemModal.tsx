import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, message, Modal, Upload } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from "react";

const { TextArea } = Input;

// title => change it so it is able to reuse
// closeModal => to close the pop up
// data / item info => if there are no data, it should display as empty
// iscreatenew / isEdit => so that onSave => able to create new / update

// TODO: change any to types
type EditItemModalProps = {
  isModalVisible: boolean,
  handleOk: (data: any) => void,
  handleCancel: () => void,
  modalTitle: String,
  data?: any // this is optional
};

const EditItemModal: FC<EditItemModalProps> = (props) => {

  const { isModalVisible, handleOk, handleCancel, data, modalTitle } = props;

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
  console.log('incorrect?');

  const handleDescriptionChange = (info: any) => {
    console.log('handle description change')

    console.log(info.target.value);
  }

  const handleTitleChange = (info: any) => {
    console.log('handletitle change')

    console.log(info.target.value);
  }


  // wait how many milliseconds
  var onTitleChange = _.debounce(handleTitleChange, 500);

  // wait how many milliseconds
  var onDescriptionChange = _.debounce(handleDescriptionChange, 500);

  // if the data change, update the value
  useEffect(() => {
    if (data) {
      setTitle(data.name);
      setDescription(data.description);
    }
  }, [data]);


  return (
    <Modal title={modalTitle} visible={isModalVisible} onOk={() => handleOk({ title: title, description: description })} onCancel={handleCancel} width={700}>
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
        <div className="modify-item-input-form">
          <div>
            <label>Title</label>
            <Input value={title} onChange={onTitleChange} />
          </div>
          <div>
            <label>Description</label>
            <TextArea rows={4} value={description} onChange={onDescriptionChange} />
          </div>
        </div>
      </div>
    </Modal>

  );
}


export default EditItemModal;

