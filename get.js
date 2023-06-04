import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {
    console.log(event);

    try {
        const GetCommandInput = {
            TableName: tableName,
            Item: event,
            Key: {
                id: event.uuid,
            },
        };

        const result = await ddb.send(new ScanCommand(GetCommandInput));
        console.log(result);

        const response = {
            statusCode: 200,
            body: JSON.stringify({ result: result.Items, message: "Items obtain successfully!" }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }

        };
        return response;

    }
    catch (e) {
        console.log(e);
        const response = {
            statusCode: 500,
            body: JSON.stringify({ message: "Error to obtain items!" }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }


        }

    };
}
