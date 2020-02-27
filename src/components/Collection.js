import React, { useState, useEffect } from 'react'
import ChildSites from './ChildSites'
import { Button } from '@material-ui/core'

export default function Collection({ Title, Name, Path, Description }) {
	const [expandMenu, setExpandMenu] = useState(false)

	return (
		<Button
			href={Path}
			size={'small'}
			onClick={e => {
				e.preventDefault()
				console.log(e)
				setExpandMenu(true)
			}}>
			{Name}
			<ChildSites
				path={Path}
				open={expandMenu}
				handleClose={() => {
					setExpandMenu(false)
				}}
			/>
		</Button>
	)
}
