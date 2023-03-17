import api from "../api/Api";
import { IAllTransactionDatas } from '../types/TransactionType';
import { TResponse } from '../types/RequestsType';

export default class TransactionService {
    static async GetTransactions(): Promise<TResponse<IAllTransactionDatas>> {
        return api.get<IAllTransactionDatas>(`transactions`)
    }
}
