import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MetricCard } from "./MetricCard";

describe("MetricCard Component", () => {
  it("başlık ve değeri doğru render etmeli", () => {
    render(<MetricCard title="Toplam Kazanç" value="$500" />);

    expect(screen.getByText("Toplam Kazanç")).toBeInTheDocument();
    expect(screen.getByText("$500")).toBeInTheDocument();
  });
});
