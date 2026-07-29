import { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { returns } from "@/content/policies";

export const metadata: Metadata = {
  title: "سياسة الإرجاع",
  description:
    "إرجاع خلال سبعة أيام على كل جهاز من منارا، وفقاً لنظام التجارة الإلكترونية السعودي. كيف تبدأ الإرجاع وكيف تُصرف المبالغ.",
};

export default function ReturnsPageAr() {
  return (
    <PolicyPage
      policy={returns.ar}
      locale="ar"
      altHref="/policies/returns"
      siblings={[{ href: "/ar/policies/warranty", label: "الضمان" }]}
    />
  );
}
