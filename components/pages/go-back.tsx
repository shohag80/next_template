"use client";

import { useRouter } from "next/navigation";

interface Props{
  name?:string
}

export default function GoBack({name}:Props) {
  const route = useRouter()
  return (
    <>
      <button
        onClick={()=>{route.back()}}
        className="rounded-md bg-[#0c2355] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#031c53] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {name || 'Go Back'}
      </button>
    </>
  );
}
