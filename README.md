
## Update Node Version
### Build
```shell script
docker build -t artapi -f dockers/Dockerfile .
```
###Run regular Docker
```shell script
docker run -it -p 3000:3000 artapi
```

### Run Tests oly with results
```shell script
docker run -it -p 3000:3000  -v $PWD/test-results:/art-api/test-results artapi npm run test:api
``` 



## Update all dependecies
###Build
```shell script
docker build -t upall -f dockers/upall.Dockerfile .
```

###Test
```shell script
docker run -it -p 3000:3000  -v $PWD/test-results:/art-api/test-results upall npm run test:api
```

