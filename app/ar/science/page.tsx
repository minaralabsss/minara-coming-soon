import { Metadata } from "next";
import SciencePage from "@/components/SciencePage";

export const metadata: Metadata = {
  title: "العلم",
  description:
    "كيف يحفّز الضوء الأحمر إنتاج الكولاجين ويخفّف الخطوط الدقيقة. الأدلة المحكّمة وراء اختيار منارا لأطوالها الموجية.",
};

export default function Page() {
  return <SciencePage locale="ar" />;
}
