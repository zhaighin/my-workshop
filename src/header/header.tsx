import { ImportOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { FC } from 'react';

const { Search } = Input;

const TopNavbar: FC = () => {
    const onSearch = (value: string) => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} enterButton />
            <Button icon={<UserOutlined />}>Sign up</Button>
            <Button icon={<ImportOutlined />}>Login</Button>
        </div>
    );
}

export default TopNavbar;