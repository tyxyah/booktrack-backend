import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, PutCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {
    
    const putItemCommandInput = {
            TableName: tableName,
            Item:event,
        }     
    
    const result = await ddb.send(new PutCommand(putItemCommandInput));
    console.log(result);
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};