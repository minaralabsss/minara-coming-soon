import { Metadata } from "next";
import PanelDetail from "@/components/PanelDetail";
import { isSoldOut } from "@/lib/stock";

export const metadata: Metadata = {
  title: "الجهاز",
  description:
    "جهاز منارا. ستة أطوال موجية مختارة سريرياً عبر سبعين لمبة، لدعم الكولاجين والخطوط الدقيقة والتعافي.",
};

export default async function Page() {
  const soldOut = await isSoldOut("panel");
  return <PanelDetail locale="ar" soldOut={soldOut} />;
}
