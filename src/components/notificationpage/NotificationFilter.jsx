import React from 'react';
import { useGlobalContext } from '../../context/Context';

const NotificationFilter = (props) => {
    /* for updating context on notification filter button click*/
    const [contextValue, setContextValue] = useGlobalContext();

    const FilterFuncNotification = (e) => {
        setContextValue(e.target.value.toLowerCase());
        console.log(contextValue);
    }
    return (
        <div>
            <button value={props.btnvalue} onClick={(e) => FilterFuncNotification(e)}>{props.btnvalue}</button>
        </div>
    )
}

export default NotificationFilter
