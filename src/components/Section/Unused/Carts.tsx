// QuickCart.tsx – slate-dark gradient makeover
import { useState } from "react";

const dummyItems = [
  {
    id: 1,
    name: "Analytics Pack",
    price: 49,
    img: "https://picsum.photos/id/180/200/200",
  },
  {
    id: 2,
    name: "Growth Module",
    price: 79,
    img: "https://picsum.photos/id/201/200/200",
  },
  {
    id: 3,
    name: "Operations Kit",
    price: 59,
    img: "https://picsum.photos/id/28/200/200",
  },
];

export default function QuickCart() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/60 transition-transform hover:scale-110"
      >
        <span className="text-xl">🛒</span>
        {dummyItems.length > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-slate-500 text-xs leading-5">
            {dummyItems.length}
          </span>
        )}
      </button>

      {/* overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        />
      )}

      {/* cart panel */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md
                    rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl shadow-black/80
                    transition-all duration-500 ${
                      open
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0 pointer-events-none"
                    }`}
      >
        <h3 className="p-6 pb-2 text-xl font-bold tracking-tight text-slate-100">
          Your Cart
        </h3>

        {/* item list */}
        <div className="max-h-80 overflow-y-auto px-6">
          {dummyItems.map((it) => (
            <div
              key={it.id}
              className="flex items-center gap-4 mb-4 p-3 rounded-2xl bg-slate-700/60 last:mb-6"
            >
              <img
                src={it.img}
                alt={it.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-100">
                  {it.name}
                </p>
                <p className="text-xs text-slate-400">${it.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="p-6 pt-0">
          <div className="flex justify-between items-center text-sm text-slate-200">
            <span>Total</span>
            <span className="font-bold">
              ${dummyItems.reduce((t, i) => t + i.price, 0)}.00
            </span>
          </div>
          <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-slate-100 font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
