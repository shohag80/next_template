"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const route = useRouter()
  return (
    <>
      <button
        onClick={()=>{route.back()}}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back
      </button>
    </>
  );
}
