import { faker } from "@faker-js/faker";
import { Subscription } from "@/types/subcription";

export const getMockSubscriptions = (count: number = 20): Subscription[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    customerName: faker.person.fullName(),
    plan: faker.helpers.arrayElement(["Basic", "Pro", "Enterprise"]),
    status: faker.helpers.arrayElement(["Active", "Canceled", "Past Due"]),
    amount: Number(faker.finance.amount({ min: 10, max: 500 })),
    nextBillingDate: faker.date.future(),
  }));
};
