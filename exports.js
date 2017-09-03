
exports.handler = function (event, context, callback) {

    //format of event expected
    //Copy
    // {
    //     "resource": "Resource path",
    //     "path": "Path parameter",
    //     "httpMethod": "Incoming request's method name"
    //     "headers": {Incoming request headers}
    //     "queryStringParameters": {query string parameters }
    //     "pathParameters":  {path parameters}
    //     "stageVariables": {Applicable stage variables}
    //     "requestContext": {Request context, including authorizer-returned key-value pairs}
    //     "body": "A JSON string of the request payload."
    //     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
    // }

    const roleToRemove = event.queryStringParameters.id ;

    const conn = "pg://dev:sunmicrordssp1der@micrords.ckeww55ptuog.eu-west-1.rds.amazonaws.com:5432/mydb";
    
    const query = "DELETE FROM roles WHERE role='" + roleToRemove + "';"
    
    const { Client } = require('pg');

    const clientParams = {
        user: "dev",
        password: "sunmicrordssp1der",
        database: "mydb",
        port: 5432,
        host: "micrords.ckeww55ptuog.eu-west-1.rds.amazonaws.com"
    };
    const client = new Client(clientParams);

    client.connect()
        .then(() => {
            client.query(query)
                .then((res, err) => {
                    const response = {
                        "statusCode": 200,
                        "headers": {
                            "content-type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        },
                        "body": ""
                    };

                    client.end();

                    callback(null, response)
                });
        }).catch(() => {
            callback(null, null)
        })
};