import React, { Fragment } from 'react'
import ChildSites from './ChildSites'
import { MenuList, MenuItem } from '@material-ui/core'

export default function Collection(props) {
	//const { Title, Name, Path, Description } = props
	console.log('collection props', props)

	return (
		<Fragment>
			{props.Name}
			<MenuList>
				{props.sites.map((childSite, key) => (
					<MenuItem key={key}>
						<ChildSites  {...childSite} />
					</MenuItem>
				))}
			</MenuList>
		</Fragment>
	)
}
