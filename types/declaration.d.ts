export type Transaction = {
  id: number;
  category: string;
  note: string;
  type: "expense" | "income";
  amount: number;
  date: string;
};
