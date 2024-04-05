export interface PaySlip {
    id: number;
    fromDate: string;
    toDate: string;
    amount: number;
    currency: string;
    file: string;
}