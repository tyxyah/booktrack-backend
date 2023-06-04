import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, UpdateCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async(event) => {
    
    const UpdateCommandInput = {
            TableName: tableName,
            Item: event,
            Key: {
              uuid: event.uuid,
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
