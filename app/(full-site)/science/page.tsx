import { Metadata } from "next";
import SciencePage from "@/components/SciencePage";

export const metadata: Metadata = {
  title: "Science",
  description:
    "How red light stimulates collagen production and softens fine lines. The peer-reviewed evidence behind minara's wavelength selection.",
};

export default function Page() {
  return <SciencePage locale="en" />;
}
