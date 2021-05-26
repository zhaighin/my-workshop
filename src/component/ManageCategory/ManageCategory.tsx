import { SettingOutlined } from '@ant-design/icons';
import { Button } from "antd";
import React, { FC } from "react";
import './ManageCategory.css';

const ManageCategory: FC = () => {

  // TODO: when it is collapsed, change to icon only
  return (
    <div className="manage-navbar">
      <Button className="manage-category-button" type="primary" icon={<SettingOutlined />}>Manage Category</Button>
    </div>
  );
}

export default ManageCategory;