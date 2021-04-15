import React from 'react'
import './App.css'
import { CollectionMenu } from './components/CollectionMenu'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#ff0000',
		},
	},
})

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<CollectionMenu />
			</CssBaseline>
		</ThemeProvider>
	)
}
