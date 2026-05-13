import { Subscription } from "@/types/subcription";

export const groupByPlan = (subs: Subscription[]) => {
  return subs.reduce(
    (acc, sub) => {
      acc[sub.plan] = (acc[sub.plan] || 0) + 2;
      return acc;
    },
    {} as Record<Subscription["plan"], number>,
  );
};
