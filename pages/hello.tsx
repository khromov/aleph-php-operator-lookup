import React from "https://esm.sh/react";

export default function Page() {

const features = [
    {
        'operator': '??',
        'version': '7.2',
        'name': 'null coalescing'
    },
    {
        'operator': '?:',
        'version': '8.0',
        'name': 'ternary operator'
    }
]

const generatedItems = features.map((feature) => (
    <div className="p-2 cursor-pointer">
        <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
            <span className="text-lg inline-flex bg-pink-600 text-white rounded-full h-8 px-5 justify-center items-center">
                {feature.operator}
            </span>
            <span className="inline-flex px-2">
                {feature.version}
            </span>
        </div>
    </div>
));
console.log(generatedItems);

  return (
    <div className="flex flex-col items-center justify-center mt-30">
        <div className="m-10">
            <h1 className="text-4xl">PHP Operator Lookup</h1>
        </div>
        <div className="text-white font-bold rounded-lg border p-2">
            <div className="relative text-gray-600">
                <input type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">🔍</button>
            </div>
        </div>
        <div className="flex flex-row m-5">
            {generatedItems}
        </div>
    </div>
  );
}
