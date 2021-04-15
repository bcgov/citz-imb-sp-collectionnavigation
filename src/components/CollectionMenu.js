import React, { useEffect, useState } from 'react'
import { GetMenuItems } from './GetMenuItems'

export const CollectionMenu = () => {
	const [menuItems, setMenuItems] = useState([])

	useEffect(() => {
		GetMenuItems().then((response) => {
			setMenuItems(response)
		})

		return () => {}
	}, [])
	useEffect(() => {
		console.log('menuItems :>> ', menuItems)
		return () => {}
	}, [menuItems])
	return <div></div>
}
