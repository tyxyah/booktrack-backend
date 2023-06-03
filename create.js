import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {

    const body = JSON.parse(event.body)
    
    try {
        const putItemCommandInput = {
            TableName: tableName,
            Item: body,
            Key: {
                uuid: body.uuid
            }
        }
        const result = await ddb.send(new PutCommand(putItemCommandInput));
        console.log(result);
        const response = {
            statusCode: 200,
            body: JSON.stringify({ result: result, message: "Successfully added the book!" }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        };
        return response;
    }
    catch (e) {
        console.log(e)
        const body = {
            result: "Failed!",
            message: "Fail to add or create book in database, please refer to logs",
            error_name: e.name,
            error_message: e.message,
            error_stack: e.stack
        }

        const response = {
            statusCode: 500,
            body: JSON.stringify(body),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            }
        }
        return response;
    }
};
