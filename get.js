import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {

    console.log(event);
    const eventBody = event.body;

    const GetCommandInput = {
        TableName: tableName,
        Item: eventBody,
        Key: {
            uuid: event.uuid,
        },
    };

    const result = await ddb.send(new GetCommand(GetCommandInput));
    console.log(result);

    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }
    };
    return response;
};
