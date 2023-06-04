import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {

    const id = event.queryStringParameters.uuid

    try {

        const SCI = {
            TableName: tableName,
            Item: event,
            Key: {
                uuid: id,
            }
        };

        const result = await ddb.send(new GetCommand(SCI));
        console.log(result);

        const response = {
            statusCode: 200,
            body: JSON.stringify({ result: result.Item , message: "Yehu" }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        };
        return response;
    }
    catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error accessing items" }),
        }
    }
};
