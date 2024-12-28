
import React from 'react';
export const targetElem = (e: React.MouseEvent<HTMLImageElement>, elem: React.MutableRefObject<HTMLImageElement | null>) => {
    if (e && elem.current) {
        // TO MOVE THE ELEMENT IT MUST HAVE BOTH PROPERTIES --X AND --Y AND THE ELEMENT MUST BE FIXED ON IT'S VERTICAL AXIS (NOT ROTATED) OR THIS WILL HAVE TO BE TWEAKED WITH SOME MATH
        const rect = elem.current.getBoundingClientRect();
        const X = e.clientX - rect.left;
        const Y = e.clientY - rect.top;
        elem.current.style.setProperty('--X', `${X}px`);
        elem.current.style.setProperty('--Y', `${Y}px`);
        elem.current.style.opacity = '1';
    }
}