import React, { useState } from "react";
import {
    fade, ThemeProvider, withStyles, createMuiTheme, Title
} from "react-admin";
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorageIcon from '@material-ui/icons/Storage';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {

        width: "45%",
        // backgroundColor: "#424242",
        // padding: 24,
        // display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        maxWidth: "50%",
        paddingTop: 0,
    },
    cardheader: {
        backgroundColor: "#000000",
        color: "#ffffff",
    },
    avatar: {
        backgroundColor: red[500],
    },

    margin: {
        margin: theme.spacing(1),
    },

    textField: {
        maxWidth: "90%",
        width: 270,

    },
}));

export const Sqlconfig = props => {
    const classes = useStyles();
    const [values, setValues] = useState({
        ip: "127.0.0.1",
        port: "3306",
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        //<Edit >
        // <SimpleForm>
        //     <TextInput source="title" />
        // </SimpleForm>
        //</Edit>
        // <Card className={classes.root} title={props.options.label}>
        //     <form>
        //         <InputBase
        //             className={classes.margin}
        //             defaultValue="Naked input"
        //             inputProps={{ 'aria-label': 'naked' }}
        //         />
        //         <Divider variant="middle" />
        //         <TextField
        //             error
        //             id="outlined-error-helper-text"
        //             label="Error"
        //             defaultValue="Hello World"
        //             helperText="Incorrect entry."
        //             variant="outlined"
        //         />
        //     </form>
        // </Card>
        <Card className={classes.root} >
            <Title title={props.options.label} />
            <CardHeader
                className={classes.cardheader}
                avatar={
                    <StorageIcon />
                }
                title="資料庫設定"
            />
            <CardContent>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">主機IP</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type="text"
                        value={values.ip}
                        onChange={handleChange('ip')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">端口port</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type="text"
                        value={values.port}
                        onChange={handleChange('port')}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">資料庫帳號</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">資料庫密碼</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.save, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

// export const OrderEdit = props => (
//     <Edit title={<OrderTitle />} {...props}>
//         <SimpleForm>
//             <DisabledInput source="id" />
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <LongTextInput source="body" />
//         </SimpleForm>
//     </Edit>
// );