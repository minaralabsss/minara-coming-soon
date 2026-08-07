import { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";
import { isTestMode } from "@/lib/moyasar";

export const metadata: Metadata = {
  title: "إتمام الطلب",
  description: "أكمل طلبك من منارا.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function CheckoutPageAr() {
  return <CheckoutForm locale="ar" testMode={isTestMode()} />;
}
