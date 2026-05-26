import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="h-[200vh]" aria-hidden />
      </main>
    </>
  );
}
