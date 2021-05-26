import React, { FC } from 'react';
import Item from '../Item';
import './ItemList.css';

type Props = {
    items: Array<Object>
}


const ItemList: FC<Props> = (props) => {

    const { items } = props;

    const listItems = items.map((item) =>
        <Item item={item}></Item>
    );

    return (
        <div className="item-list">
            {listItems}
        </div>
    );


}

export default ItemList;