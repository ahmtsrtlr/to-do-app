export interface Subscription {
  id: string;
  customerName: string;
  plan: "Basic" | "Pro" | "Enterprise";
  status: "Active" | "Canceled" | "Past Due";
  amount: number;
  nextBillingDate: Date;
}
