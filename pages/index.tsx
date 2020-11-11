import React from "https://esm.sh/react";
import ReactMarkdown from "https://esm.sh/react-markdown";
import operators from '../operators.ts';

export default function Page() {
    const [selectedItem, setSelectedItem] = React.useState(-1);
    const [hideOperators, setHideOperators] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');

    // Resolve clicks on operators
    const clickOperatorResolver = (index: number) => {
        setSelectedItem(index);
        setSearchText(operators[index].operator);
    };

    // Resolve search
    const searchResolver = (text: string) => {
        const foundObject = operators.findIndex((operator) => operator.operator === text);
        if(foundObject !== -1) {
            setSelectedItem(foundObject);

            //setHideOperators(true);
        }
        else {
            setSelectedItem(-1);
            //setHideOperators(false);
        }

        setSearchText(text);
    };

    const generatedItems = operators.map((feature, index) => {

        if(index === selectedItem) {
            return (
                <div className="p-2 cursor-pointer" key={index} onClick={() => clickOperatorResolver(index)}>
                    <div className="inline-flex items-center bg-purple-600 leading-none text-white rounded-full p-2 shadow text-teal text-sm">
                        <span className="text-lg inline-flex bg-white text-purple-600 rounded-full h-8 px-5 justify-center items-center">
                            {feature.operator}
                        </span>
                        { feature.version ? <span className="inline-flex px-2">
                            {feature.version}
                        </span> : null }
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="p-2 cursor-pointer" key={index} onClick={() => clickOperatorResolver(index)}>
                    <div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                        <span className="text-lg inline-flex bg-purple-600 text-white rounded-full h-8 px-5 justify-center items-center">
                            {feature.operator}
                        </span>
                        { feature.version ? <span className="inline-flex px-2">
                            {feature.version}
                        </span> : null }
                    </div>
                </div>
            )
        }
    });

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center mt-30">
                <div className="m-10">
                    <h1 className="text-4xl">PHP Operator Lookup</h1>
                </div>
                <div className="text-white font-bold rounded-lg border p-2">
                    <div className="relative text-gray-600">
                        <input value={searchText || ''} onChange={(event) => searchResolver(event.target.value)} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">🔍</button>
                    </div>
                </div>
                <div className="flex-grow">
                    { !hideOperators ? <div className="flex flex-row m-5 flex-wrap mb-auto h-grow">
                        {generatedItems}
                    </div> : '' }
                    { selectedItem !== -1 ? <div className="rounded-lg border p-5 m-5 w-11/12 max-w-3xl">
                        <h2 className="text-4xl mb-2">{operators[selectedItem].name}</h2>
                        {<ReactMarkdown>{operators[selectedItem].description}</ReactMarkdown>}
                    </div> : '' }
                </div>
                <div className="block m-2 mb-2 text-center">
                Built with 💜 by <a className="text-purple-600" href="https://khromov.se" target="_blank">Stanislav Khromov</a> using <a className="text-purple-600" href="https://alephjs.org/" target="_blank">Aleph.js</a> | <a className="text-purple-600" href="/api/operators">API</a> | <a className="text-purple-600" href="https://github.com/khromov/aleph-php-operator-lookup" target="_blank">GitHub</a>
                </div>
            </div>
        </>
    );
}