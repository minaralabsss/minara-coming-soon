import { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";
import { isTestMode } from "@/lib/moyasar";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your minara order.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return <CheckoutForm locale="en" testMode={isTestMode()} />;
}
