import React from "react";
import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    // Edit,
    // SimpleForm,
    // DisabledInput,
    // ReferenceInput,
    SelectInput,
    TextInput,
    // LongTextInput,
    // Create,
    Filter,
    DateInput
} from "react-admin";
import OrderExpand from "./OrderExpand";
import Box from '@material-ui/core/Box';
import classes from './index.module.css';



// const OrderTitle = ({ record }) => {
//     return <span>{record ? `${record.title}` : ''}</span>;
// };

const OrderFilter = (props) => (
    <Filter {...props} className={classes.btn}>
        <TextInput label="搜尋訂單號" source="orderno" alwaysOn />
        <TextInput label="搜尋玩家ID" source="gameid" alwaysOn />
        <TextInput label="搜尋玩家暱稱" source="gamename" alwaysOn />
        <DateInput label="搜尋發起時間" source="created_at" />
        <TextInput label="搜尋玩家ip" source="ip" />
        <DateInput label="到帳時間" source="donetime" />
        <SelectInput label="訂單狀態" source="status" choices={[
            { id: 'success', name: '已完成' },
            { id: 'working', name: '處理中' },
            { id: 'fail', name: '已失敗' },
        ]} />
    </Filter>
);

export const OrderList = props => (
    <List {...props} filters={<OrderFilter />} title={props.options.label}>
        <Datagrid rowClick="expand" expand={<OrderExpand />}>
            <TextField label="ID" source="id" />
            <TextField label="訂單號" source="orderno" />
            <TextField label="單筆金額" textAlign="right" className={classes.pink} source="amount" />
            <TextField label="充值比值" textAlign="right" source="rate" />
            <TextField label="玩家ID" source="gameid" />
            <TextField label="發起時間" textAlign="right" source="created_at" />
            <FunctionField label="訂單狀態" headerClassName={classes.center} render={record => {
                if (record.status === 'success') {
                    return <Box borderRadius={10} className={classes.bgcomplete} p={0.5} m={1} align='center'> 已完成</Box >;
                } else if (record.status === 'fail') {
                    return <Box borderRadius={10} className={classes.bgred} p={0.5} m={1} align='center'>已失敗</Box >;
                } else if (record.status === 'working') {
                    return <Box borderRadius={10} className={classes.bgbutiful} p={0.5} m={1} align='center'>處理中</Box >;
                }
            }} />
        </Datagrid >
    </List >
);

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

// export const OrderCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <LongTextInput source="body" />
//         </SimpleForm>
//     </Create>
// );