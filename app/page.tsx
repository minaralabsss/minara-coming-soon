import PageWrapper from "@/components/PageWrapper";
import { isSoldOut } from "@/lib/stock";

export default async function Home() {
  const soldOut = await isSoldOut("panel");
  return <PageWrapper locale="en" soldOut={soldOut} />;
}
