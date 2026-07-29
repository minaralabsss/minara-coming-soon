import { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { warranty } from "@/content/policies";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Twelve-month warranty against manufacturing defects on every minara panel. What is covered, what is not, and how claims are handled.",
};

export default function WarrantyPage() {
  return (
    <PolicyPage
      policy={warranty.en}
      locale="en"
      altHref="/ar/policies/warranty"
      siblings={[{ href: "/policies/returns", label: "Returns" }]}
    />
  );
}
