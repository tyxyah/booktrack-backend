import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, DeleteCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const tableName = "booktrack-book";

export const handler = async(event) => {
    
    const DCI = {
            TableName : tableName,
            Key : {
                  title: event.title,
                  author: event.author,
            }
    };
    
    const result = await ddb.send(new DeleteCommand(DCI));
    console.log(result);
        
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};