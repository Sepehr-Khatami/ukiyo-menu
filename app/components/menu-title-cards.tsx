"use client";

import Image from "next/image";
import { useState } from "react";
import MenuItems from "./menu-items";
import items from "@/data/menu-titles.json";
import menuItems from "@/data/menu-items.json";

const menuLengthArray = menuItems.map((item) => item.items.length * 350);

export default function MenuTitle() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  function handleClick(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center justify-between p-2 text-white text-md bg-emerald-600 rounded-lg mb-6 font-bold'>
        <a
          target='_blank'
          href='https://www.instagram.com/ukiyocafe.ir'
          className='cursor-poniter bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 bg-clip-text text-transparent animated-gradient'
        >
          @UKIYOCAFE.IR
        </a>
        <div dir='rtl' className='w-1/2 whitespace-nowrap'>
          ما رو هم تو استوریاتون تگ کنید
        </div>
      </div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className='w-full'>
            <div
              onClick={() => handleClick(index)}
              className='relative w-full h-12 px-2 font-bold cursor-pointer flex justify-between items-center bg-emerald-100 rounded-lg'
            >
              <span className='flex-shrink'>{item.titleEn}</span>
              <div className='absolute left-1/2 -translate-x-1/2'>
                <Image
                  src={item.image}
                  className='transform scale-150 bg-emerald-100 rounded-lg'
                  unoptimized
                  width={50}
                  height={50}
                  alt='logo'
                />
              </div>
              <span className='flex-shrink'>{item.titleFa}</span>
            </div>

            <div
              className={`mb-2 transition-all duration-1000 ease-in-out overflow-hidden origin-top rounded-lg mt-6 bg-emerald-100`}
              style={{
                maxHeight:
                  isOpen && menuLengthArray[index]
                    ? `${menuLengthArray[index]}px` // estimate ~80px per item
                    : "0px",
              }}
            >
              <MenuItems
                category={item.titleFa}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
