import React from 'react'
import { Grid, Button, AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import Logout from 'pages/logout'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: `${grey[200]}`,
		width: '100vw',
		padding: '1em'
	}
}))

const Header = () => {
	const classes = useStyles()

	return (
		<Grid container className={classes.root}>
			<Grid item>
				<Button>link</Button>
				<Logout>sair</Logout>
			</Grid>
		</Grid>
	)
}

export default Header
