import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ItemRow from "./item-row";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "600px",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    overflow: "hidden"
  },
  header: {
    fontWeight: "bold",
  }
}));

const ItemList = ({ items }) => {
  const styles = useStyles();

  return (
    <TableContainer className={styles.card}>
      <Table className={styles.table} aria-label="TODOs table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.header}>
              User
            </TableCell>
            <TableCell className={styles.header}>
              Title
            </TableCell>
            <TableCell className={styles.header}>
              Completed
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <ItemRow item={item} key={item.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemList;
