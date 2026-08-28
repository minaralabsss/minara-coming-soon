import { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import { isSoldOut } from "@/lib/stock";

export const metadata: Metadata = {
  title: "منارا لابز",
  description:
    "ضوء أحمر بأطوال موجية أثبتت الدراسات أنها تحفّز الكولاجين وتخفّف الخطوط الدقيقة. عشرون دقيقة يومياً في بيتك.",
};

export default async function HomeAr() {
  const soldOut = await isSoldOut("panel");
  return <PageWrapper locale="ar" soldOut={soldOut} />;
}
