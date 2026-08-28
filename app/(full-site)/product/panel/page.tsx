import { Metadata } from "next";
import PanelDetail from "@/components/PanelDetail";
import { isSoldOut } from "@/lib/stock";

export const metadata: Metadata = {
  title: "The Panel",
  description:
    "The minara panel. Six clinically selected wavelengths across seventy emitters, for collagen support, fine lines and recovery.",
};

export default async function Page() {
  const soldOut = await isSoldOut("panel");
  return <PanelDetail locale="en" soldOut={soldOut} />;
}
