import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ChildSites(props) {
	console.log("Child props", props)

	return <div>{props.Title}</div>
}
