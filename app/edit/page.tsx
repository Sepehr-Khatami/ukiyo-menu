"use client";

import initialData from "@/data/menu-items.json";
import { useState } from "react";
type MenuItem = {
  title: string;
  price: string;
  notes?: string;
};

type Category = {
  id: number;
  categorie: string;
  description?: string;
  items: MenuItem[];
};

export default function MenuEditor() {
  const [data, setData] = useState<Category[]>(initialData);
  if (process.env.NODE_ENV === "production") {
    return <div>Editor disabled in production.</div>;
  }

  const handleItemChange = (
  catIndex: number,
  itemIndex: number,
  key: keyof MenuItem,
  value: string
) => {
  const updated = [...data];
  updated[catIndex].items[itemIndex][key] = value;
  setData(updated);
};


  const handleAddItem = (catIndex: number) => {
    const updated = [...data];
    updated[catIndex].items.push({ title: "", price: "", notes: "" });
    setData(updated);
  };

  const handleRemoveItem = (catIndex: number, itemIndex: number) => {
    const updated = [...data];
    updated[catIndex].items.splice(itemIndex, 1);
    setData(updated);
  };

  const handleAddCategory = () => {
    setData([
      ...data,
      {
        categorie: "دسته جدید",
        id: Date.now(),
        description: "",
        items: [],
      },
    ]);
  };

  const handleCategoryChange = (
    catIndex: number,
    key: "categorie" | "description",
    value: string
  ) => {
    const updated = [...data];
    updated[catIndex][key] = value;
    setData(updated);
  };


  const handleSave = async () => {
    const res = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ منو با موفقیت ذخیره شد");
    } else {
      alert("❌ خطا در ذخیره منو");
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-6'>
      {data.map((cat, catIndex) => (
        <div key={cat.id} className='border rounded p-4 bg-white shadow-sm'>
          <input
            className='text-xl font-bold w-full mb-2 border-b border-gray-300 focus:outline-none focus:border-black'
            value={cat.categorie}
            onChange={(e) =>
              handleCategoryChange(catIndex, "categorie", e.target.value)
            }
          />
          <input
            className='text-sm w-full mb-4 border-b border-gray-200 focus:outline-none focus:border-black'
            value={cat.description || ""}
            onChange={(e) =>
              handleCategoryChange(catIndex, "description", e.target.value)
            }
          />
          {cat.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className='mb-4 p-2 border border-gray-200 rounded'
            >
              <div className='flex gap-2 mb-2'>
                <input
                  className='flex-1 p-1 border rounded'
                  value={item.title}
                  placeholder='عنوان'
                  onChange={(e) =>
                    handleItemChange(
                      catIndex,
                      itemIndex,
                      "title",
                      e.target.value
                    )
                  }
                />
                <input
                  className='w-24 p-1 border rounded text-center'
                  value={item.price}
                  placeholder='قیمت'
                  onChange={(e) =>
                    handleItemChange(
                      catIndex,
                      itemIndex,
                      "price",
                      e.target.value
                    )
                  }
                />
                <button
                  onClick={() => handleRemoveItem(catIndex, itemIndex)}
                  className='text-red-500 px-2'
                >
                  ×
                </button>
              </div>
              <input
                className='w-full text-xs border-b border-gray-200 focus:outline-none focus:border-black'
                placeholder='یادداشت (مثلاً بدون شکر)'
                value={item.notes || ""}
                onChange={(e) =>
                  handleItemChange(catIndex, itemIndex, "notes", e.target.value)
                }
              />
            </div>
          ))}
          <button
            onClick={() => handleAddItem(catIndex)}
            className='text-sm mt-2 text-blue-600'
          >
            + افزودن مورد جدید
          </button>
        </div>
      ))}

      <button
        onClick={handleAddCategory}
        className='block w-full py-2 border-2 border-dashed text-center rounded text-green-700 hover:bg-green-50'
      >
        + افزودن دسته جدید
      </button>

      <button
        onClick={handleSave}
        className='mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition'
      >
        ذخیره تغییرات منو
      </button>

      <div className='mt-6'>
        <pre className='bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
