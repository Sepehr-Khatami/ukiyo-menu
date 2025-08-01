'use client'

import Image from "next/image";
import MenuTitle from "./components/menu-title-cards";
import {useState, useEffect} from "react";
import Loading from "./loading";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Loading />;
  }
  return (
    <div className='max-w-[480px] w-full min-h-screen mx-auto bg-emerald-300 rounded-lg'>
      <div
        id='header'
        className='mx-auto min-h-[100px] bg-emerald-100 relative'
      >
        <div className='h-28 w-28 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[.5rem]'>
          <Image
            src='/logo green.png'
            priority={true}
            width={100}
            height={100}
            alt='logo'
            sizes='100%'
            className='bg-emerald-100 rounded-full p-1'
          />
        </div>
      </div>
      <div className='mt-24 w-full px-4 pb-8'>
        <MenuTitle />
      </div>
      <div className='text-xs text-center bg-emerald-100 py-4 flex justify-center items-center md:flex-row'>
        <div>© 2025 Ukiyo Café. Built by Sepehr.</div>
        <div className='pl-1'>
          For inquiries:{" "}
          <a
            href='https://sepehrkhatami.netlify.app'
            target='_blank'
            className='bg-gradient-to-b from-blue-800 via-gray-500 to-black bg-clip-text text-transparent animated-gradient'
          >
            sepehrkhatami
          </a>
        </div>
      </div>
    </div>
  );
}
