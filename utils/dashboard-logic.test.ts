import { describe, it, expect } from "vitest";
import { groupByPlan } from "./dashboard-logic";
import { Subscription } from "@/types/subcription";

describe("Dashboard Logic", () => {
  it("should correctly group subscriptions by plan", () => {
    const mockData: Partial<Subscription>[] = [
      { plan: "Basic" },
      { plan: "Basic" },
      { plan: "Pro" },
    ];
    const result = groupByPlan(mockData as Subscription[]);
    expect(result).toEqual({ Basic: 2, Pro: 1 });
  });
});
