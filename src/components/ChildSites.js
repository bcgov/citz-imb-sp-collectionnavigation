import React, { useState, useEffect } from 'react'
import { MenuItem, Button } from '@material-ui/core'

export default function ChildSites(props) {
	console.log('Child props', props)

	return (
		<MenuItem button="true">
			<Button
				variant="text"
				color="primary"
				fullWidth="true"
				href={props.Path}
				size="small">
				{props.Title}
			</Button>
		</MenuItem>
	)
}
