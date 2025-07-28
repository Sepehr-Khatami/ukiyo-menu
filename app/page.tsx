import Image from "next/image";
import MenuTitle from "./components/menu-title-cards";

export default function Home() {
  return (
    <div className='max-w-[480px] w-full min-h-screen mx-auto bg-emerald-300 rounded-lg'>
     <div id='header' className="mx-auto min-h-[100px] bg-emerald-100 relative">
      <div className="h-28 w-28 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[.5rem]">
        <Image src="/logo green.png" fill alt="logo" className="bg-emerald-100 rounded-full p-1"/>
      </div>
      
     </div>
     <div className="mt-24 w-full px-4">
     
      <MenuTitle/>
     </div>
    </div>
  );
}
