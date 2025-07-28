import items from "@/data/menu-items.json";
type MenuItem = {
  title: string;
  price: string;
  notes?: string;
};

export default function MenuItems({
  category
}: {
  openIndex: number | null;
  isOpen: boolean;
  category: string;
}) {
  const current = items.find((item ) => item.categorie === category);
  if (!current) return null;

  return (
    <div className={`flex flex-col px-8 gap-2 py-6`}>
      {current?.description && (
        <div className='text-center font-bold text-lg my-1'>
          {current?.description}
        </div>
      )}
      {current.items.map((item : MenuItem, index) => (
        <div key={index}>
          <div
            // key={index}
            className='flex justify-between items-center text-lg font-semibold'
          >
            <span className='text-right'>
              {item.price.replace(/\d+/g, (d) =>
                Number(d).toLocaleString("fa-IR")
              )}
            </span>
            <span className='flex-grow mx-4 border-b-3 border-dashed border-black/40 h-[1px]'></span>
            <span className='text-left'>{item.title}</span>
          </div>
          <div className='px-6 text-gray-700' dir='rtl'>
            {item?.notes}
          </div>
        </div>
      ))}
    </div>
  );
}
