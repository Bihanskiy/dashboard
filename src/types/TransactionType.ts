export interface ITransactionData {
    id: string;
    date: string;
    currency: string;
    creditorName: string;
    category: string;
    amount: string;
}
export type IAllTransactionDatas = {
    transactions: ITransactionData[];
};