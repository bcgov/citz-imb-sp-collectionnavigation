import React, { useState, useRef } from 'react'
import ChildSites from './ChildSites'
import {
	ButtonGroup,
	Button,
	Popper,
	Paper,
	MenuList,
	MenuItem,
	ClickAwayListener
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

export default function Collection(props) {
	//const { Title, Name, Path, Description } = props
	const [open, setOpen] = useState(false)
	const anchorRef = useRef(null)

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen)
	}

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setOpen(false)
	}

	return (
		<ButtonGroup>
			<Button
				variant="text"
				color="primary"
				href={props.Path}
				size="small"
				ref={anchorRef}
				onMouseEnter={handleToggle}
				onMouseLeave={handleToggle}>
				{props.Name}
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					disablePortal={true}
					placement={'bottom-start'}>
					<Paper>
						<MenuList>
							{props.sites.map((site, key) => (
								<ChildSites key={key} {...site} />
							))}
						</MenuList>
					</Paper>
				</Popper>
			</Button>
		</ButtonGroup>
	)
}
