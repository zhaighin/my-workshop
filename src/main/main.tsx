import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from "react";
import { Link } from 'react-router-dom';
import ItemList from '../itemlist';
import ModifyItem from '../modifyitem';
import './main.css';

const Main: FC = () => {
    return (
        <div>
            <ModifyItem/>
            {/* <Link to="/add-new-item">
                <Button className="add-new-btn" type="primary" icon={<PlusOutlined />}>Add new item</Button>
            </Link> */}
            <ItemList />
        </div>
    );
}

export default Main;