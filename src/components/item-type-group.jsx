import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row } from "@mui-treasury/components/flex";

import ItemRow from "./item-row";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    overflow: "hidden"
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px"
  }
}));

const ItemTypeGroup = ({ items }) => {
  const styles = useStyles();

  return (
    <>
      <Column p={0} m={0} gap={0} className={styles.card}>
        {items.map((item) => (
          <>
            <Divider variant={"middle"} className={styles.divider} />
            <ItemRow item={item} />
          </>
        ))}
      </Column>
    </>
  );
};

export default ItemTypeGroup;
