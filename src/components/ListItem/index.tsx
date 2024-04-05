import React from 'react';
import { ListItemProps } from './types';
import './styles.css';

const ListItem: React.FunctionComponent<ListItemProps> = ({ paySlip }) => {

    return (
        <div className='list-item-container'>
            <div className='labels-container'>
                <label className='payslip-date'><b>From Date:</b> {paySlip.fromDate}</label>
                <label className='payslip-date'><b>To Date:</b> {paySlip.toDate}</label>
            </div>
            <div className='labels-container'>
                <label className='payslip-amount'><b>{paySlip.currency}</b>{paySlip.amount}</label>
                <a href={`/details/${paySlip.id}`} className='payslip-details-link'>Show Details</a>
            </div>
        </div>
    )
}

export default ListItem;