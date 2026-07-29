import { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { returns } from "@/content/policies";

export const metadata: Metadata = {
  title: "Returns",
  description:
    "Seven-day returns on every minara panel, in line with Saudi E-Commerce Law. How to start a return and how refunds are handled.",
};

export default function ReturnsPage() {
  return (
    <PolicyPage
      policy={returns.en}
      locale="en"
      altHref="/ar/policies/returns"
      siblings={[{ href: "/policies/warranty", label: "Warranty" }]}
    />
  );
}
