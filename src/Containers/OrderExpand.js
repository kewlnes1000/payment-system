import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";
// import classes from './OrderExpand.module.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        "& .ra-field": {
            width: "25%",
            display: "inline-flex",

        }
    },
}));

export const OrderExpand = props => {
    const classes = useStyles();
    return (
        <Show {...props}>
            <SimpleShowLayout className={classes.root}>
                <TextField label="玩家暱稱" source="gamename" />
                <TextField label="服務器" source="gametype" />
                <TextField label="玩家ip" source="ip" />
                <TextField label="到帳時間" source="donetime" />
                <TextField label="付款方式" source="paytype" />
                <TextField label="手續費" source="handlingfee" />
                <TextField label="訂單備註" source="remark" />
            </SimpleShowLayout>
        </Show>
    );
}
