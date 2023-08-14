import { middyfy } from '@libs/lambda';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import * as AWS from 'aws-sdk';
import schema from '@functions/star-wars/schema';
AWS.config.update({region: 'sa-east-1'});

const getEmployeesHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const params = { TableName: 'Employees' };
        const result = await dynamodb.scan(params).promise();
        return formatJSONResponse({ data: result.Items });
    } catch (error) {
        throw Error(error);
    }
}

export const getEmployees = middyfy(getEmployeesHandler);