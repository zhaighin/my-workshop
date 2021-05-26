import { Menu } from "antd";
import React, { FC } from "react";
import { data } from '../../data/data';
import ManageCategory from '../ManageCategory';

// pass the onclick from main
type Props = {
    onMenuClick: (index: number) => void
}

const Navbar: FC<Props> = (props) => {
    const { onMenuClick } = props;
    const categories = data.categories;

    const generateMenu = () => {
        const menuList = categories.map((category, index) => {

            return <Menu.Item key={index} onClick={() => onMenuClick(index)}>
                {category.name}
            </Menu.Item>

        })

        return menuList;
    }

    return (
        <>
            <ManageCategory></ManageCategory>

            <Menu
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark">
                {generateMenu()}
            </Menu>
        </>


    );
}

export default Navbar;