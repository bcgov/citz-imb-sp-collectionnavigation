import React, { useEffect, useState, Fragment } from 'react'
import { GetCollections } from './GetCollections'
import { GetSites } from './GetSites'
import {
	Box,
	AppBar,
	Toolbar,
	CssBaseline,
	Button,
	Menu,
	MenuItem,
	MenuList,
	ButtonGroup,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Collapse,
	Divider,
	Popover,
	Typography,
	Grow,
	Paper,
	ClickAwayListener,
	Grid,
	Popper,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const options = [
	'Create a merge commit',
	'Squash and merge',
	'Rebase and merge',
]

const useStyles = makeStyles((theme) => {
	return {
		appbar: { background: 'black' },
	}
})

export const CollectionMenu = () => {
	const classes = useStyles()

	const [open, setOpen] = useState(false)
	const anchorRef = React.useRef(null)
	const [selectedIndex, setSelectedIndex] = React.useState(1)
	const [menuItems, setMenuItems] = useState([])
	const [expand, setExpand] = useState(null)

	const handleClick = (index) => {
		console.log(index)
		setOpen(!open)
	}

	useEffect(() => {
		Promise.all([GetCollections(), GetSites()]).then((response) => {
			let [collections, sites] = response

			for (let i = 0; i < collections.length; i++) {
				collections[i].subsites = []
				for (let j = 0; j < sites.length; j++) {
					if (collections[i].Path === sites[j].ParentLink) {
						collections[i].subsites.push(sites[j])
					}
				}
			}
			setMenuItems(collections)
		})

		return () => {}
	}, [])

	return (
		<div></div>
	)
}
