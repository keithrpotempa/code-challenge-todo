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
					{item.userId}
				</Typography>
			</TableCell>
			<TableCell>
				<Typography>
                    {item.title}
				</Typography>
			</TableCell>
			<TableCell>
				{/* If card is selected, show the remove button */}
                <Checkbox 
                    checked={item.completed}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
			</TableCell>
		</TableRow>
	)
}

export default ItemRow;