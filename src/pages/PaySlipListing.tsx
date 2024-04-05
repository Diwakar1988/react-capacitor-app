import React, { useState } from 'react';
import store from '../store';
import ListItem from '../components/ListItem';
import { PaySlip } from '../types';
import { Capacitor } from '@capacitor/core';

const PaySlipListing: React.FunctionComponent = () => {
    const [paySlips, setPaslips] = useState<PaySlip[]>(store.getAllPaySlips());
    return (
        <div style={{
            margin: Capacitor.isNativePlatform() ? '8px' : '2rem',
        }}>
            <h1>All Pay Slips</h1>

            <div >
                {
                    paySlips.map((ps) => <ListItem key={`payslip-${ps.id}`} paySlip={ps} />)
                }
            </div>
        </div>
    )
}

export default PaySlipListing;