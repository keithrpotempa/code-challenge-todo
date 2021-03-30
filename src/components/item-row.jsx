import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const useStyles = makeStyles({
	root: {
		marginTop: "10px",
	},
});

const ItemRow = ({item}) => {
	const classes = useStyles();

	return (
		<TableRow>
			<TableCell>
				<Typography className={classes.title}>
					{item}
				</Typography>
			</TableCell>
		</TableRow>
	)
}

export default ItemRow;