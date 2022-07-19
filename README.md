# WP Plugin for ORCiD Data

## Description

The plugin pulls data from [ORCiD](http://orcid.org) based on the user's ORCiD ID.
Any facet of the user's ORCiD can be added to WP pages or posts using WP shortcodes or as blocks 
using the Gutenberg block editor.

## Installation
- Create a development directory.
- Clone the repo inside that folder. This will create a `orcid-data-block` folder.
- Copy the contents of `orcid-data-block/docker` into the development directory.
- Setup and run Docker
	- Read the `README-docker.md` file for instructions. 
- Make sure `npm` is installed.
- Copy the plugin files into the WP plugins folder:
	- `cp -r  orcid-wp-plugin-block wp/wp-content/plugins/`
- cd to `orcid-wp-plugin-block` and run:
  ```sh
	cd wp/wp-content/plugins/orcid-wp-plugin-block
  # install node.js dependencies
	npm install
	# run one of the following
  npm run start   # for development
  npm run build   # for production
  ```
- Activate the plugin from Wordpress.
- This will create a "My ORCiD Profile" page in the dashboard where you can
  enter your ORCiD ID.
- You can then add short codes or blocks to any page or post.

## Wordpress Debugging
Edit `wp-config.php` to include
```php
//define( 'WP_DEBUG', !!getenv_docker('WORDPRESS_DEBUG', '') );
define( 'WP_DEBUG', true);
//
define( 'WP_DEBUG_LOG', true );
define( 'SCRIPT_DEBUG', true );
define( 'SAVEQUERIES', true );
define( 'WP_DEBUG_DISPLAY', true );
```

## Block Editing
The plugin will create an ORCiD block.

## Shortcodes
Shortcodes used with the ORCiD plugin take the form `[orcid-data section="section_name"]`
where section_name is one of the following:
- `header`
- `personal`
- `education`
- `employment`
- `works`
- `fundings`
- `peer_reviews`
- `invited_positions`
- `memberships`
- `qualifications`
- `research_resources`
- `services`

In addition, when the section_name is `works` two additional optional attributes can be specified:

`[orcid-data section="works" works_type="type of work" works_start_year="published year start"].`

Both attributes are optional with default values.

- `works_type` = include only works of that type (default is `all`)
- `works_start_year` = include only works with a published year greater than or equal to 
  the start year (default is `1900`)

[List of available work types](https://github.com/ORCID/orcid-model/blob/master/src/main/java/org/orcid/jaxb/model/common/WorkType.java)
