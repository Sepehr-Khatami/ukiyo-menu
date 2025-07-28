// /app/loading.tsx
export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen bg-emerald-50 text-emerald-700 animate-pulse'>
      <div className='text-center'>
        <div className='text-4xl font-extrabold mb-4'>⏳</div>
        <p className='text-lg font-semibold'>در حال بارگذاری ...</p>
      </div>
    </div>
  );
}
