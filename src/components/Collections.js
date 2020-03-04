import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Collection from './Collection'

export default function Collections({ baseUrl }) {
	const [collections, setCollections] = useState([])

	useEffect(() => {
		axios
			.all([
				axios.get(
					`${baseUrl}/_api/search/query?querytext='SPSiteUrl:citz.sp AND contentclass:STS_Site'&RowLimit=25&selectproperties='Title,Path,Description'`
				),
				axios.get(
					`${baseUrl}/_api/search/query?querytext='SPSiteUrl:citz.sp AND UrlDepth=3 contentclass:sts_Web'&rowlimit=500&TrimDuplicates=false&selectproperties='Title,Path,Description,ParentLink'`
				)
			])
			.then(
				axios.spread(function(siteResponse, webResponse) {
					//process sites
					const tempSites = siteResponse.data.PrimaryQueryResult.RelevantResults.Table.Rows.map(
						collection => {
							let name = collection.Cells[3].Value.split('/')
							let num = name.length - 1

							if (name[num] !== 'DEV' && name[num] !== 'UAT') {
								return {
									Title: collection.Cells[2].Value,
									Name: name[num],
									Path: collection.Cells[3].Value,
									Description: collection.Cells[4].Value,
									sites: []
								}
							}

							return undefined
						}
					)

					//remove blanks
					const filteredTempSites = tempSites.filter(
						collection => collection !== undefined
					)

					//sort by Name
					filteredTempSites.sort((a, b) => {
						let comparison = 0
						if (a.Name.toUpperCase() > b.Name.toUpperCase()) {
							comparison = 1
						} else if (
							a.Name.toUpperCase() < b.Name.toUpperCase()
						) {
							comparison = -1
						}
						return comparison
					})

					//process webs
					const tempWebs = webResponse.data.PrimaryQueryResult.RelevantResults.Table.Rows.map(
						site => {
							let name = site.Cells[3].Value.split('/')
							let num = name.length - 1

							return {
								Title: site.Cells[2].Value,
								Name: name[num],
								Path: site.Cells[3].Value,
								Description: site.Cells[4].Value,
								ParentLink: site.Cells[5].Value
							}
						}
					)

					//sort by Name
					tempWebs.sort((a, b) => {
						let comparison = 0
						if (a.Name.toUpperCase() > b.Name.toUpperCase()) {
							comparison = 1
						} else if (
							a.Name.toUpperCase() < b.Name.toUpperCase()
						) {
							comparison = -1
						}
						return comparison
					})

					//assign the webs to their sites
					for (let i = 0; i < tempWebs.length; i++) {
						for (let j = 0; j < filteredTempSites.length; j++) {
							if (
								tempWebs[i].ParentLink ===
								filteredTempSites[j].Path
							) {
								filteredTempSites[j].sites.push(tempWebs[i])
								break
							}
						}
					}

					setCollections(filteredTempSites)
				})
			)
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
		<div>
			{collections.map((collection, key) => (
				<Collection key={key} {...collection} />
			))}
		</div>
	)
}
