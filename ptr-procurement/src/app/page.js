import Image from "next/image";
import Login from "@/app/(auth)/login/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Login/>
    </main>
  );
}
