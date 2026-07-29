import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "عن منارا",
  description:
    "منارا لابز تصمم أجهزة ضوء علاجي دقيقة في السعودية. منهجنا في التوصيف والمواد والأدلة.",
};

export default function Page() {
  return <AboutPage locale="ar" />;
}
