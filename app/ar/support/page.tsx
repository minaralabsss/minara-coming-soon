import { Metadata } from "next";
import SupportPage from "@/components/SupportPage";

export const metadata: Metadata = {
  title: "الدعم والتواصل",
  description:
    "احصلي على الدعم أو اطرحي أسئلتك أو تواصلي مع فريق منارا لابز.",
};

export default function Page() {
  return <SupportPage locale="ar" />;
}
