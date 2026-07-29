import { Metadata } from "next";
import SupportPage from "@/components/SupportPage";

export const metadata: Metadata = {
  title: "Support & Contact",
  description:
    "Get support, ask questions, or contact the minara labs team.",
};

export default function Page() {
  return <SupportPage locale="en" />;
}
