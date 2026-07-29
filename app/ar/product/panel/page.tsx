import { Metadata } from "next";
import PanelDetail from "@/components/PanelDetail";

export const metadata: Metadata = {
  title: "الجهاز",
  description:
    "جهاز منارا. ستة أطوال موجية مختارة سريرياً عبر سبعين لمبة، لدعم الكولاجين والخطوط الدقيقة والتعافي.",
};

export default function Page() {
  return <PanelDetail locale="ar" />;
}
