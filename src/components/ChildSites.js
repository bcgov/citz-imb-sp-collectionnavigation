import React, { useState, useEffect } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import axios from 'axios'

export default function ChildSites({ path, open, handleClose }) {
	console.log(path, open)
	const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

	useEffect(() => {
		axios
			.get(`${path}/_api/web`)
			.then(response => {
				console.log('', response.data)
			})
			.catch(error => {
				console.groupCollapsed('Error Details')
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.error(error.response.data)
					console.error(error.response.status)
					console.error(error.response.headers)
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.error(error.request)
				} else {
					// Something happened in setting up the request that triggered an Error
					console.error('Error', error.message)
				}
				console.error(error.config)
				console.groupEnd()
			})
		return () => {}
	}, [])

	return (

			<li>hello</li>

	)
}
