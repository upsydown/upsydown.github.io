import React, { useState, useRef, useEffect } from 'react'

export default function VsCode() {
    const repo = 'upsydown/upsydown.github.io';
    const github1s = `https://github1s.com/${repo}`;
    const vscodeDev = `https://vscode.dev/github/${repo}`;

    return (
        <div className="h-full w-full bg-ub-cool-grey flex items-center justify-center p-6">
            <div className="text-center text-white">
                <p className="mb-4">L'éditeur intégré rencontre souvent des restrictions d'affichage dans les iframes. Ouvrez l'éditeur dans un nouvel onglet fiable :</p>
                <div className="flex justify-center gap-3">
                    <a href={github1s} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded">Ouvrir github1s</a>
                    <a href={vscodeDev} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded">Ouvrir vscode.dev</a>
                </div>
            </div>
        </div>
    )
}

export const displayVsCode = () => <VsCode />
