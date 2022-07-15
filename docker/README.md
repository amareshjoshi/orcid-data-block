# Docker Installation Instructions for WP ORCiD Plugin

## Steps
- Create a develpoment directory.
- Copy all the files and folders from the `docker folder` into the development directory.
- Create the custom WP image
  ```sh
  docker build --tag wordpress_with_xsl --file ./Dockerfile.wordpress_with_xsl .
  ```
- Run docker for the first time. This will fill thw `wp` dirctory with the WP source code.
  ```sh
  docker-compose up --detach
  ```
- Log into the WP instance and create a admin user. `localhost:8000`
- The following command shuts down the docker instance
  ```sh
  docker-compose down
  ```
  