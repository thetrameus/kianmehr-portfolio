import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLang } from "../context/LangContext";
// ترجمه‌ی صمیمی و منطقی offerings
export default function ServicesShowcase({ isDark }) {
    const { t, lang } = useLang();

    const pey = lang === "fa" ? "font-peyda" : "";
    const titleTheme = isDark ? "text-gray-300/60" : "text-black";
    const headings = isDark ? "text-white" : "text-gray-900";
    const boxLightings = isDark
        ? "border-0 shadow-white/4 shadow-lg bg-gray-900/40 hover:border-gray-700 hover:bg-gray-800/20 "
        : "border-0 shadow-lg bg-gray-100/40 hover:border-gray-200 hover:bg-gray-200/60 ";
    const [active, setActive] = useState(null);

    return (
        <>
            <section
                id="services"
                className={`max-w-6xl mx-auto px-6 py-16 md:py-24 ${pey}`}>
                <div className="text-center mb-12">
                    <p
                        className={`text-xs uppercase tracking-widest ${titleTheme} mb-3`}>
                        <span>
                            {lang === "fa" ? "کاری که می کنم" : "What I Do"}
                        </span>
                    </p>
                    <h2
                        className={`text-4xl md:text-5xl font-extrabold leading-tight ${headings}`}>
                        {lang === "fa"
                            ? "حیطه های فعالیت"
                            : "Focused Expertise"}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {t.fields.offerings.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActive(item)}
                            className={`group cursor-pointer rounded-2xl 
                                border ${boxLightings} p-6
                                    transition duration-200
                                    `}>
                            <div className="flex items-start justify-between">
                                <div
                                    className={`${
                                        isDark
                                            ? "text-gray-200 group-hover:text-white"
                                            : "text-gray-900 group-hover:text-gray-600"
                                    } transition-colors`}>
                                    {item.icon}
                                </div>
                                <span
                                    className={`text-xs ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }`}>
                                    →
                                </span>
                            </div>

                            <h3
                                className={`mt-4 text-lg font-semibold ${
                                    isDark ? "text-gray-100" : "text-gray-700"
                                }`}>
                                {item.title}
                            </h3>
                            <p
                                className={`mt-2 text-sm ${
                                    isDark
                                        ? "text-gray-400/90"
                                        : "text-gray-500/90"
                                } line-clamp-2`}>
                                {item.short}
                            </p>

                            <button
                                className={`mt-4 text-xs ${
                                    isDark
                                        ? "text-gray-300 group-hover:text-gray-100"
                                        : "text-gray-700 group-hover:text-gray-900"
                                } transition`}>
                                <span>
                                    {lang === "fa"
                                        ? "بقیه رو ببینم"
                                        : "View details & assets"}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <Transition appear show={Boolean(active)} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => setActive(null)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div
                            className={`flex min-h-full items-center justify-center p-4 ${
                                lang === "fa" ? "font-peyda-light" : ""
                            }`}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel
                                    className={`
                                    w-full max-w-2xl rounded-2xl 
                                    border
                                    ${
                                        isDark
                                            ? " border-gray-800 bg-gray-900/90"
                                            : "bg-white border border-gray-200"
                                    } backdrop-blur-xl p-6 text-white
                                    `}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className={`text-xl font-semibold ${
                                                    isDark
                                                        ? "text-gray-300"
                                                        : "text-gray-900"
                                                }`}>
                                                {active?.title}
                                            </Dialog.Title>
                                            <p
                                                className={`text-sm ${
                                                    isDark
                                                        ? "text-gray-400"
                                                        : "text-gray-500"
                                                } mt-1`}>
                                                {active?.slug}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setActive(null)}
                                            className="p-1 rounded-md hover:bg-gray-800 transition">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div
                                        className={`space-y-4 text-sm ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}>
                                        {active?.long.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    {/* Gallery */}
                                    <div className="mt-6 grid grid-cols-1 gap-3">
                                        {active?.gallery.map((src, i) => (
                                            <img
                                                key={i}
                                                src={
                                                    active.id === "swim"
                                                        ? `/images/swimming-${lang}-certificate.png`
                                                        : src
                                                }
                                                alt={`${active.title} ${i + 1}`}
                                                className={`rounded-lg object-contain w-full h-auto border ${
                                                    isDark
                                                        ? "border-gray-800"
                                                        : "border-gray-200"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <div
                                        className={`mt-6 flex justify-${
                                            lang === "fa" ? "start" : "end"
                                        }`}>
                                        <button
                                            onClick={() => setActive(null)}
                                            className={`px-4 py-2 rounded-lg 
                                                ${
                                                    isDark
                                                        ? "bg-gray-800/70 hover:bg-gray-700/70"
                                                        : "bg-gray-200 hover:bg-white/70 text-black"
                                                }
                                            transition text-sm`}>
                                            <span>
                                                {lang === "fa"
                                                    ? "بازگشت"
                                                    : "Close"}
                                            </span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
