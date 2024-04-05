import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import store from '../store';
import { Capacitor } from '@capacitor/core';
import Heading from '../components/Heading';
import { downloadFile } from '../utils/Downloader';

const PaySlipDetails: React.FunctionComponent = () => {
    const params = useParams();
    const paySlip = useMemo(() => {
        return params.id ? store.getPaySlip(Number.parseInt(params.id)) : null;
    }, [params]);
    const handleDownload = useCallback(() => {
        downloadFile(`${paySlip?.file}`, `PaySlip-${paySlip?.fromDate}.pdf`);
    }, [params])
    return paySlip ? (
        <>
            {Capacitor.isNativePlatform() && (
                <div className='native-app-header'>
                    <label onClick={() => window.history.back()}>{'<  Details'}</label>
                </div>

            )}
            <div style={{
                margin: Capacitor.isNativePlatform() ? '8px' : '2rem',
            }}>

                {!Capacitor.isNativePlatform() && <h1><u>Pay Slip Details</u></h1>}

                <div className='payslip-details-item'>
                    <Heading text='PaySlip Id' />
                    <h3>{paySlip.id}</h3>
                </div>
                <div className='payslip-details-item'>
                    <Heading text='From Date (YYYY-MM-DD)' />
                    <h3>{paySlip.fromDate}</h3>
                </div>
                <div className='payslip-details-item'>
                    <Heading text='To Date (YYYY-MM-DD)' />
                    <h3>{paySlip.toDate}</h3>
                </div>
                <div className='payslip-details-item'>
                    <Heading text='Salary' />
                    <h3>{paySlip.currency}{paySlip.amount}</h3>
                </div>
                <button onClick={handleDownload}><b>Download File</b></button>
            </div>
        </>
    ) :
        (
            <h1>Pay Slip Details not found</h1>
        )
}

export default PaySlipDetails;