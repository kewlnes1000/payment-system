import React from "react";
import {
  List,
  Datagrid,
  DisabledInput,
  TextField,
  ReferenceField,
  LongTextInput,
  SelectInput,
  EditButton,
} from "react-admin";

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <DisabledInput source="id" />
      <ReferenceField source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceField>
      <TextField source="title" />
      <LongTextInput source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
