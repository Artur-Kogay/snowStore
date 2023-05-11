import React, { FC } from 'react';
import s from "./Orders.module.scss";

const Orders: FC = () => {
    return (
        <div className={s.orders}>
            <h1 className={s.orders__title}>Active Bids</h1>
            <div>
                <input type="checkbox" />
            </div>
        </div>
    );
};

export default Orders;