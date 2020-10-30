### Test project to illustrate issue with arc bodyParser

#### Steps to reproduce:

1. run `arc sandbox`
2. in a separate terminal run `curl -d '{"foo": "bar"}'  -H 'Content-Type: application/json;charset=UTF-8 Accept: application/json' http://localhost:3333/`

#### Sample output:
```
$ curl -d '{"foo": "bar"}'  -H 'Content-Type: application/json;charset=UTF-8 Accept: application/json' http://localhost:3333/
string%       
```

#### Expected Behaviour:

The body parser should've converted the JSON string into an object, the output from the curl command should therefore be `object`


#### Actual Behaviour:

Nothing is parsed, the output is still a `string`


