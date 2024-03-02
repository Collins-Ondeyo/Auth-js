import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center gap-3 items-center bg-white">

      <Link
        className="bg-black text-white px-3 py-1 rounded-sm font-semibold curosor-pointer"
        href={"/signup"}>
        Sign Up
      </Link>
      
    </div>
  );
}
