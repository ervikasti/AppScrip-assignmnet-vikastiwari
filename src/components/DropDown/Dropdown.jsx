import { useState } from 'react'
import styles from './Dropdown.module.css'
export const Dropdown = ({options}) => {
    const[selectedItem,setSelectedItem]= useState();
    return(
        <select className={styles.container} value={selectedItem} onChange={(e)=>{setSelectedItem(e.target.value)}}>
            {options.map((item)=>(
                <option key={item.id} value={item.name}>{item.name}</option>
            ))}
        </select>
    )
}