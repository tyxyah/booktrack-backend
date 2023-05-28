import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, UpdateCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async(event) => {

    console.log(event);
    const eventBody = event;
    
    const UpdateCommandInput = {
            TableName: tableName,
            Item: eventBody,
            Key: {
              title: event.title,
              author: event.author,
            },
    };
    
    const result = await ddb.send(new UpdateCommand(UpdateCommandInput));
    console.log(result);
        
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};