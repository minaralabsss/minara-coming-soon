import { Metadata } from "next";
import ProductPageContent from "@/components/ProductPageContent";

export const metadata: Metadata = {
  title: "The Panel",
  description:
    "Discover the minara Red Light Therapy Panel. 350W power, 70 LED wavelengths, engineered for therapeutic precision. Technical specifications and benefits.",
};

export default function ProductPage() {
  return <ProductPageContent />;
}
