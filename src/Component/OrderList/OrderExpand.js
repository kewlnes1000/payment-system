import React from "react";
import { Show, SimpleShowLayout } from "react-admin";
import Grid from '@material-ui/core/Grid';
import classes from './OrderExpand.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Noto Sans TC\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
});

const OrderExpand = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <MuiThemeProvider theme={theme}>
                <Grid container spacing={2} className={classes.font}>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                玩家暱稱
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.gamename}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                服務器
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.gametype}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                玩家ip
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.ip}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                到帳時間
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.donetime}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                付款方式
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.paytype}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                手續費
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.handlingfee}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component="div" >
                            <Box className={classes.boxtitle} fontSize="fontSize" m={1}>
                                訂單備註
                        </Box>
                            <Box fontSize={16} m={1}>
                                {props.record.remark}
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </SimpleShowLayout>
    </Show>
);

export default OrderExpand;