import { Metadata } from "next";
import PanelDetail from "@/components/PanelDetail";

export const metadata: Metadata = {
  title: "The Panel",
  description:
    "The minara panel. Six clinically selected wavelengths across seventy emitters, for collagen support, fine lines and recovery.",
};

export default function Page() {
  return <PanelDetail locale="en" />;
}
