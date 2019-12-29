#Docker Cheat Sheet
### Docker Help Functions
| *Command*                 | *Description*                             |
|---------------------------|-------------------------------------------|
| docker ps                 | List all containers                       |
| docker kill <containerID> | kills running container                   |
| docker images             | List all images                           |
| docker system prune       | Removes stopped containers, images, cache |


### Build Image

```sh
docker build -t <IMAGE_NAME>:<TAG_NAME> <PATH_TO_CONTEXT>
```

| Param        | Description                                        | Required | Default value |
|--------------|----------------------------------------------------|----------|---------------|
| -t           | Name and optionally a tag in the ‘name:tag’ format | (V)      | ---           |
| <IMAGE_NAME> | image name                                         | (V)      | (X)           |
| <TAG_NAME>   | Optional, tag for image. Some type of versioning   | (X)      | latest        |
| <CONTEXT>    | Can be URL, PATH, -                                | (V)      | .             |

### Run Image
```sh
docker build -t <IMAGE_NAME>:<TAG_NAME> <PATH_TO_CONTEXT>
```
