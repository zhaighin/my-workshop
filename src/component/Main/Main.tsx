import React, { FC, useState } from "react";
import ItemList from '../ItemList';
import AddNewItem from '../AddNewItem';
import './Main.css';
import Sider from 'antd/lib/layout/Sider';
import Navbar from '../SideNavBar';
import { data } from '../../data/data';

const Main: FC = () => {
    const categories = data.categories;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    // TODO: change from any to types
    const [items, setItems] = useState<any>([]);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    // on the menu click, get the category pass the data to item list
    const onMenuClick = (key: number) => {
        // if item not exist, setItems to []
        if(categories[key].hasOwnProperty("item")) {
            setItems(categories[key].item);
        } else {
            setItems([]);
        }
    }

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Navbar onMenuClick={onMenuClick}></Navbar>
            </Sider>
            <div>
                <AddNewItem />
                {items.length > 0 ? <ItemList items={items}/> : "" }  
            </div>
        </>

    );
}

export default Main;