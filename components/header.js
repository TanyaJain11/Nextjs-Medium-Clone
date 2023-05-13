import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt,FaPenAlt } from "react-icons/fa";

export default function header(){
  return (
    <div>
      <header className="bg-gray-50">

        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0 ">
            <input type="text" className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 
            rounded-full text-sm shadow-sm placehoder-late-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search..."/>
          </div>
          <div className="shrink w-80 sm:order-2">
            <Link href={"/"} className="font-bold uppercase -3xl">Design
            </Link>
            
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
            <Link href={"/"}><FaPenAlt/>Write</Link>
            <Link href={"/"}><FaSignInAlt/>Login</Link>
            <Link href={"/"}> <FaSignOutAlt color="#88888888"/>Logout</Link>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  )
}
