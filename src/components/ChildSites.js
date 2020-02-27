import React, { useState, useEffect } from 'react'
import { Menu, MenuItem } from '@material-ui/core'

export default function ChildSites({ path, open, handleClose }) {
    console.log(path, open)
    const [anchorE1, setAnchorE1] = useState(null)

      return (
        <Menu
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <MenuItem>hello</MenuItem>
        </Menu>
    )
}
