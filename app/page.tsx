"use client"

import Image from "next/image";
import MenuTitle from "./components/menu-title-cards";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setHydrated(true);
    async function fetchMessage() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Sepehr-Khatami/ukiyo-data/refs/heads/main/promotion.json?v=2"
      );
      const { message } = await res.json();
      setMessage(message);
    }
    fetchMessage();
  }, [message]);

  if (!hydrated) {
    return <Loading />;
  }
  return (
    <div className='max-w-[480px] w-full min-h-screen mx-auto bg-emerald-300 rounded-lg'>
      {message && open && (
        <dialog
          dir='rtl'
          className='w-screen h-screen flex justify-center items-center px-4 fixed m-0 bg-black/50 z-10'
        >
          <div className='flex flex-col items-center justify-center h-auto w-auto text-center bg-emerald-100 pt-10 pb-5 px-20 rounded-md'>
            <span className='text-xl font-semibold'>
              {message.split("&&").map((part, index) => {
                let content = part;
                let className = "text-black"; // default style

                // Check for identifier at the start (e.g., p:promotion, t:title, m:message)
                const match = part.match(/^([ptm]):(.*)/);
                if (match) {
                  const [, id, text] = match;
                  content = text.trim();

                  switch (id) {
                    case "p":
                      className = "text-green-500 font-bold"; // promotion style
                      break;
                    case "t":
                      className = "text-blue-500 text-lg"; // title style
                      break;
                    case "m":
                      className = "text-gray-700"; // message style
                      break;
                    default:
                      className = "text-black"; // fallback
                  }
                }

                return (
                  <span key={index} className={className}>
                    {content}
                    {index < message.split("&&").length - 1 && <br />}
                  </span>
                );
              })}
            </span>

            <button
              onClick={() => setOpen(false)}
              className='mt-4 px-4 py-2 bg-emerald-500 text-white font-bold text-xl rounded cursor-pointer'
            >
              باشه 👍
            </button>
          </div>
        </dialog>
      )}

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
