import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // choose a theme
import "highlight.js/lib/languages/python";
import "highlight.js/lib/languages/cpp";

export default function CodeBlock({ code, language }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (

        <pre className="bg-gray-40 border border-gray-200 text-sm text-white p-4 rounded-lg overflow-scroll font-mono leading-relaxed shadow-sm">
            <code className={`language-${language} hljs`}>
                {code}
            </code>
        </pre >

    );
}
