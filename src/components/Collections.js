import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Collection from './Collection'
import { ButtonGroup } from '@material-ui/core'

export default function Collections() {
	const [collections, setCollections] = useState([])

	useEffect(() => {
		axios
			.get(
				`http://localhost:8081/_api/search/query?querytext='SPSiteUrl:citz.sp AND contentclass:STS_Site'&RowLimit=25&selectproperties='Title,Path,Description'`
			)
			.then(response => {
				const tempColl = response.data.PrimaryQueryResult.RelevantResults.Table.Rows.map(
					collection => {
						let name = collection.Cells[3].Value.split('/')
						let num = name.length - 1

						return {
							Title: collection.Cells[2].Value,
							Name: name[num],
							Path: collection.Cells[3].Value,
							Description: collection.Cells[4].Value
						}
					}
				)
				//sort by Name
				tempColl.sort((a, b) => {
					let comparison = 0
					if (a.Name.toUpperCase() > b.Name.toUpperCase()) {
						comparison = 1
					} else if (a.Name.toUpperCase() < b.Name.toUpperCase()) {
						comparison = -1
					}
					return comparison
				})

				setCollections(tempColl)
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

	return collections.map((collection, index) => {
		if (!(collection.Name == 'DEV' || collection.Name == 'UAT')) {
			return <Collection key={index} {...collection} />
		}
	})
}
