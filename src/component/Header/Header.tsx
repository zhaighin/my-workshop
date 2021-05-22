import { HomeOutlined, ImportOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const { Search } = Input;

const TopNavbar: FC = () => {
    const onSearch = (value: string) => console.log(value);
    return (
        <div className="top-nav-bar">
            <div className="logo">
                <Link to="/">
                    <Button className="logo-btn" shape="round" icon={<HomeOutlined />} size="large" />
                </Link>
            </div>
            <div className="search-navbar-container">
                <Search className="search-navbar" placeholder="input search text" allowClear onSearch={onSearch} enterButton />
            </div>
            <div className="login-nav-bar">
                <Button icon={<UserOutlined />}>Sign up</Button>
                <Link to="/login">  <Button icon={<ImportOutlined />}>Login</Button></Link>

            </div>
        </div>
    );
}

export default TopNavbar;