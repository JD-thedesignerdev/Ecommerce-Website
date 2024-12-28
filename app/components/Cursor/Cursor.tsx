import React, { FC, useEffect } from 'react'
import './Cursor.css'
interface Props {
    style: "bigBlue" | "smallBlue";
}
// Make cooler
const Cursor: FC<Props> = ({ style }) => {

    return (

        <div className="Cursor" data-style={style || "bigBlue"}>

        </div>
    )
}

export default Cursor