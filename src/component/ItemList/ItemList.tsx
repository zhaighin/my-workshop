import React, { FC } from 'react';
import Item from '../Item';
import './ItemList.css';

type Props = {
    items: Array<Object>
}


const ItemList: FC<Props> = (props) => {

    const { items } = props;

    console.log(items);
    console.log('something wrong')

    const numbers = [1, 2, 3, 4, 5];

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