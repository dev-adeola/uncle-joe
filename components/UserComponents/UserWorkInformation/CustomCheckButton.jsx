import { IconButton } from '@mui/material'
import React from 'react'

function CustomCheckButton({ isChecked, setIsChecked }) {
    return (<IconButton onClick={() => setIsChecked(!isChecked)}>
        <div className={`${isChecked && '!border-primary'} w-6 h-6 p-1 rounded-md border-2 border-[#A9A9A9] cursor-pointer`}>
            {isChecked && <div className="w-full h-full bg-primary rounded-sm" />}
        </div>
    </IconButton>)
}

export default CustomCheckButton