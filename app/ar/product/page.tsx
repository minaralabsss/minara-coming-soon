import { Metadata } from "next";
import ProductPageContent from "@/components/ProductPageContent";

export const metadata: Metadata = {
  title: "المجموعة",
  description:
    "أجهزة ضوء علاجي دقيقة من منارا لابز. مصممة في السعودية لدعم الكولاجين وتجديد الوجه والتعافي.",
};

export default function Page() {
  return <ProductPageContent locale="ar" />;
}
