import { PaySlip } from "../types"

class Store {
    private paySlips: PaySlip[] = [];
    constructor() {
        this.paySlips = require('./payslips.json');
    }
   
    public getAllPaySlips(): PaySlip[] {
        return this.paySlips;
    }

    public getPaySlip(id: number): PaySlip | null {
        for (let i = 0; i < this.paySlips.length; i++) {
            const ps = this.paySlips[i];
            if (ps.id === id) {
                return ps;
            }

        }
        return null;
    }

}

export default new Store();