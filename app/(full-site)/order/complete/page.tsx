import { Metadata } from "next";
import OrderComplete from "@/components/OrderComplete";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false, follow: false },
};

export default function OrderCompletePage() {
  return <OrderComplete locale="en" />;
}
