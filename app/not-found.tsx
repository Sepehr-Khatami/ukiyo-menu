// /app/not-found.tsx
export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen bg-emerald-100 text-emerald-800'>
      <div className='text-center'>
        <div className='text-5xl mb-2'>😕</div>
        <h1 className='text-2xl font-bold mb-1'>صفحه پیدا نشد</h1>
        <p className='text-sm'>مطمئن شو آدرس درست وارد شده باشه</p>
      </div>
    </div>
  );
}
