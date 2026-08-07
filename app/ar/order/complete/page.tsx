import { Metadata } from "next";
import OrderComplete from "@/components/OrderComplete";

export const metadata: Metadata = {
  title: "تم تأكيد الطلب",
  robots: { index: false, follow: false },
};

export default function OrderCompletePageAr() {
  return <OrderComplete locale="ar" />;
}
