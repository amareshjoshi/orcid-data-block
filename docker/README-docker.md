# Docker Installation Instructions for WP ORCiD Plugin

## Steps
- Create the folders:
	```sh
	mkdir wp log
	```
- Create the custom WP image:
  ```sh
  docker build --tag wordpress_with_xsl --file ./Dockerfile.wordpress_with_xsl .
  ```
- Run docker for the first time. This will fill the `wp` dirctory with the WP source code.
  ```sh
  docker-compose up --detach
  ```
- Log into the WP instance (`localhost:8000`) and create an admin user. 
- To shut down the docker instance run:
  ```sh
  docker-compose down
  ```
