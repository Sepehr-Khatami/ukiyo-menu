"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageWithSkeleton({
  src,
  
}: {
  src: string;
 
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && ( 
          <div className='inset-0 w-full h-full animate-pulse rounded bg-gray-300 dark:bg-gray-700' />
      )}
      <Image
        src={src}
        alt='animated logo'
        unoptimized
        width={50}
        height={50}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
