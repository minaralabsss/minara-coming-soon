import { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { warranty } from "@/content/policies";

export const metadata: Metadata = {
  title: "الضمان",
  description:
    "ضمان اثني عشر شهراً ضد عيوب التصنيع على كل جهاز من منارا. ما يغطيه الضمان وما لا يغطيه وكيف تُعالج الطلبات.",
};

export default function WarrantyPageAr() {
  return (
    <PolicyPage
      policy={warranty.ar}
      locale="ar"
      altHref="/policies/warranty"
      siblings={[{ href: "/ar/policies/returns", label: "الإرجاع" }]}
    />
  );
}
