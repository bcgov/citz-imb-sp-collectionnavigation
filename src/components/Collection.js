import React, { useState, useEffect } from 'react'
import ChildSites from './ChildSites'
import axios from 'axios'

export default function Collection({ Title, Name, Path, Description }) {
	console.log(Name)
	const [childSites, setChildSites] = useState([])

	axios.get(
	  `${Path}/_api/web/webs`
	).then(response => {
	  console.log('/webs', response.data)

	}).catch(error => {
	  console.groupCollapsed("Error Details");
	  if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.error(error.response.data);
		console.error(error.response.status);
		console.error(error.response.headers);
	  } else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.error(error.request);
	  } else {
		// Something happened in setting up the request that triggered an Error
		console.error("Error", error.message);
	  }
	  console.error(error.config);
	  console.groupEnd();
	})

	return (
		<li>
			{Name}
			<ul>
			{childSites.map((childSite, key) => <ChildSites key={key} {...childSite} />)}
			</ul>
		</li>
	)
}
