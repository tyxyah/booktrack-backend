import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, ScanCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async(event) => {

    console.log(event);
    const eventBody = event.body;
    
    const ScanCommandInput = {
            TableName: tableName,
            Item: eventBody,
    };
    
    const result = await ddb.send(new ScanCommand(ScanCommandInput));
    console.log(result);
        
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};