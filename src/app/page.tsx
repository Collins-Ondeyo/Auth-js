import { HomeButton } from "@/components/HomeButton";

export default async function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center gap-3 items-center bg-white">
      <HomeButton />      
    </div>
  );
}
