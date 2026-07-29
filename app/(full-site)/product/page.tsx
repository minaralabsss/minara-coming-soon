import { Metadata } from "next";
import ProductPageContent from "@/components/ProductPageContent";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Precision light therapy instruments from minara labs. Designed in Saudi Arabia for collagen support, facial rejuvenation and recovery.",
};

export default function Page() {
  return <ProductPageContent locale="en" />;
}
