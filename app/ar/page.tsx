import { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "منارا لابز",
  description:
    "ضوء أحمر بأطوال موجية أثبتت الدراسات أنها تحفّز الكولاجين وتخفّف الخطوط الدقيقة. عشرون دقيقة يومياً في بيتك.",
};

export default function HomeAr() {
  return <PageWrapper locale="ar" />;
}
