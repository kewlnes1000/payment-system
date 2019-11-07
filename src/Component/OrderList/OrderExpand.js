import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    FunctionField,
    BooleanField,
    ReferenceManyField,
    EditButton,
    Show,
    TabbedShowLayout,
    Tab
} from "react-admin";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classes from './OrderExpand.module.css';

const OrderExpand = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="玩家資訊">
                <TextField label="遊戲暱稱" source="gamename" />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField className={classes.paper} label="遊戲暱稱" source="gamename" />

                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField className={classes.paper} label="遊戲ID" source="gameid" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField className={classes.paper} label="遊戲暱稱" source="gamename" />
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </Tab>
            <Tab label="body" path="body">
            </Tab>
            <Tab label="Miscellaneous" path="miscellaneous">
            </Tab>
            <Tab label="comments" path="order">
                <ReferenceManyField reference="order" target="id" addLabel={false}>
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export default OrderExpand;