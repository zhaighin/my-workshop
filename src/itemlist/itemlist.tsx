import React, { FC } from 'react';
import Item from '../item';
import './itemlist.css';



const ItemList: FC = () => {

    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) =>
        <Item></Item>
    );

    return (
        <div className="item-list">
            {listItems}
        </div>
    );


}

export default ItemList;