## AWS Lambda Function for Storing Items in DynamoDB

This repository contains an AWS Lambda function implemented in JavaScript that interacts with Amazon DynamoDB. The Lambda function is designed to store items in a DynamoDB table when triggered by an event.

## Test an AWS Lambda Function with a JSON Event

To test an AWS Lambda function with a JSON event, you can create a JSON file that represents the event data and use it as input during the testing process. Here's an example of a JSON event file you can use to test the Lambda function:

1. Delete, Update, Read, and Create Function
```json
{
  "title": "New Title",
  "author": "New Author",
  "publication_date": "New Publication Date",
  "isbn": "New ISBN",
  "uuid": "New UUID",
  "genre": "New Genre",
  "synopsis": "New Synopsis"
}
```
In this example, the JSON event file contains seven attributes: title, author, publication_date, isbn, uuid, genre, and synopsis.

2. Get List Function

```json
[
  {
    "title": "Wonwoo",
    "author": "kfhsdjfh",
    "publication_date": "28/05/2023",
    "isbn": "85720957289",
    "uuid": "937057205",
    "genre": "Biography",
    "synopsis": "test"
  },
  {
    "title": "sdvfs",
    "author": "kjjfkl",
    "publication_date": "28/05/2023",
    "isbn": "85720957289",
    "uuid": "937057205",
    "genre": "Biography",
    "synopsis": "adfadf"
  },
  {
    "title": "vnjfd",
    "author": "o23uir",
    "publication_date": "28/05/2023",
    "isbn": "85720957289",
    "uuid": "937057205",
    "genre": "Biography",
    "synopsis": "afae"
  }
]
```

## CRUD Operations for BookTrack

This section contains code snippets for performing CRUD operations (Create, Read, Update, Delete) on a book management system. Below you will find instructions on how to use each operation.

### Delete

To delete a book from the system, send a DELETE request to the following endpoint:

```javascript
DELETE /book/{id}
```
Replace {id} with the unique identifier of the book you want to delete.

### Update

To update the information of a book in the system, send a PUT request to the following endpoint:

```javascript
PUT /book/{id}
```

Replace {id} with the unique identifier of the book you want to update. Include the updated book information in the request body in JSON format.

### Read

To retrieve information about a specific book, send a GET request to the following endpoint:

```javascript
GET /book/{id}
```
Replace {id} with the unique identifier of the book you want to delete.

### Create

To add a new book to the system, send a POST request to the following endpoint:

```javascript
POST /book
```
Include the book information in the request body in JSON format. Make sure to provide all the required fields for the new book.

### Get List

To retrieve the list of books, send a GET request to the following endpoint:

```javascript
GET /book/list
```
This endpoint will return a JSON response containing information about all the books in the system.
