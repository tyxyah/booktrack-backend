import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async (event) => {
    console.log(event);
    
    const id = event.queryStringParameters.uuid;
    
    try {
        const DCI = {
            TableName: tableName,
            Key: {
                uuid: id,
            }
        };

        const result = await ddb.send(new DeleteCommand(DCI));
        console.log(result);

        const response = {
            statusCode: 200,
            body: JSON.stringify({message:"Item deleted successfully"}),
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
            body: JSON.stringify({ message: "Error deleting item" }),
        };
    }

};
