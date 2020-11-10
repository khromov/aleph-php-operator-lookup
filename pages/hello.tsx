import React from "https://esm.sh/react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mt-30">
        <div className="m-10">
            <h1 className="text-4xl">PHP Operator</h1>
        </div>
        <div className="text-white font-bold rounded-lg border p-2">
            <div className="relative text-gray-600">
                <input type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">🔍</button>
            </div>
        </div>
        <div className="p-2">
            <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
            <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                Pink
            </span>
            <span className="inline-flex px-2">
                Donec sit amet neque risus. Pellentesque leo mauris, dictum et
                ligula in.
            </span>
            </div>
        </div>
    </div>
  );
}
