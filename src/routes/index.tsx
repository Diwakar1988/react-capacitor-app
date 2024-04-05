import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../store'; //initializing data here

const PaySlipListing = React.lazy(() => import('../pages/PaySlipListing'));
const PaySlipDetails = React.lazy(() => import('../pages/PaySlipDetails'));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));

const DeelRoutes: React.FunctionComponent = () => {

    return (
        <div style={{paddingTop: 'env(safe-are-inset-top'}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PaySlipListing />} />
                    <Route path='/details/:id' element={<PaySlipDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default DeelRoutes;