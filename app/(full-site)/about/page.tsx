import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "minara labs designs precision light therapy instruments in Saudi Arabia. Our approach to specification, materials and evidence.",
};

export default function Page() {
  return <AboutPage locale="en" />;
}
