import React from "react";
import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    EditButton,
    Edit,
    SimpleForm,
    DisabledInput,
    ReferenceInput,
    SelectInput,
    TextInput,
    LongTextInput,
    Create,
    Filter,
} from "react-admin";
import OrderExpand from "./OrderExpand";

const OrderTitle = ({ record }) => {
    return <span>{record ? `${record.title}` : ''}</span>;
};

const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const OrderList = props => (
    <List {...props} filters={<OrderFilter />} title={props.options.label}>
        <Datagrid expand={<OrderExpand />}>
            <TextField label="訂單號" source="orderno" />
            <TextField label="遊戲帳號" source="gameid" />
            <TextField label="暱稱" source="gamename" />
            <TextField source="ip" />
            <FunctionField label="付款狀況" render={record => {
                return (record.donepay) ? '已完成' : '未完成';
            }} />
            <TextField label="發起時間" source="created_at" />
            <TextField label="到帳時間" source="donetime" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit title={<OrderTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);