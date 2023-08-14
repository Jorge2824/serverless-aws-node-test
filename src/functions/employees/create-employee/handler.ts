import { middyfy } from '@libs/lambda';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { IProps, IListInterface } from '@models/employee.model';
import schema from '@functions/employees/create-employee/schema';
import EmployeeModel from '@models/employee.model';
import * as AWS from 'aws-sdk';
AWS.config.update({region: 'sa-east-1'});

const createEmployeeHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const {
            first_name: firstName,
            last_name: lastName,
            job_position: jobPosition,
            age,
            active
        } = event.body;
        const newData: IProps = { firstName, lastName, jobPosition, age, active };
        const employeeModel = new EmployeeModel(newData);
        const data: IListInterface = employeeModel.toEntityMappings();
        const params = {
            TableName: 'Employees',
            Item: {
              id: data.id,
              firstName: firstName,
              lastName: lastName,
              fullName: data.fullName,
              jobPosition: jobPosition,
              age: age,
              active: active,
              createdAt: data.createdAt,
            },
        };
        await dynamodb.put(params).promise();
        return formatJSONResponse({ message: 'Employee created successfully', data: data });
    } catch (error) {
        throw Error(error);
    }
}

export const createEmployee = middyfy(createEmployeeHandler);