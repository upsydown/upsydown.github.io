import React, { useState, useRef, useEffect } from 'react'

export default function VsCode() {
    const repo = 'upsydown/upsydown.github.io';
    const github1s = `https://github1s.com/${repo}`;
    const vscodeDev = `https://vscode.dev/github/${repo}`;
    const [embedBlocked, setEmbedBlocked] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        // If iframe doesn't fire onLoad within 3s, assume embedding is blocked
        timerRef.current = setTimeout(() => setEmbedBlocked(true), 3000);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, []);

    const onLoad = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setEmbedBlocked(false);
    }

    return (
        <div className="h-full w-full bg-ub-cool-grey flex flex-col">
            {!embedBlocked ? (
                <iframe src={github1s} title="VS Code (github1s)" className="h-full w-full" frameBorder="0" onLoad={onLoad} />
            ) : (
                <div className="p-6 text-center text-white">
                    <p className="mb-4">L'éditeur ne peut pas être affiché dans un iframe (politique du navigateur ou du site). Ouvrez-le dans un nouvel onglet :</p>
                    <div className="flex justify-center gap-3">
                        <a href={github1s} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded">Ouvrir github1s</a>
                        <a href={vscodeDev} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded">Ouvrir vscode.dev</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export const displayVsCode = () => <VsCode />
