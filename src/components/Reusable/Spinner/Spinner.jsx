import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './styles.scss';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <LoadingOutlined style={{ fontSize: 50}}/>
        </div>
    )
}

export default Spinner;
