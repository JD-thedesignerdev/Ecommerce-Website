import { FC } from 'react'

import './InfiniteScroll.css'
interface InfiniteScrollProps {
    content: string[],

}
const InfiniteScroll: FC<InfiniteScrollProps> = ({ content }) => {
    const List = content.map((element, index) => {
        const invisible = (index >= content.length + 1 / 2) ? true : false;
        return <li className="elements" aria-hidden={invisible} key={index.toString()}>{element}</li>;

    });

    return (
        <div className="scroll-container">
            <ul className="scroll-content">{List}</ul>
        </div>
    )
}

export default InfiniteScroll