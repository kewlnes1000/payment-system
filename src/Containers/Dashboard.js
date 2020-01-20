import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { Title } from "react-admin";

export const Dashboard = props => {
    return (
        <Card>
            <Title title={props.options.label} />
            <CardHeader title="Welcome to the administration" />
            <CardContent>這是一個儀表板</CardContent>
        </Card>
    );
};
