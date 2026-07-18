import Hero from "@/components/Hero";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl flex flex-col items-center gap-12 sm:gap-16 lg:gap-20">
        {/* Hero Section */}
        <Hero />

        {/* Email Form */}
        <div className="w-full flex justify-center">
          <EmailForm />
        </div>
      </div>
    </main>
  );
}
