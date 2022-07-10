# WP Plugin for ORCiD Data

## Description

The plugin pulls data from [ORCiD](http://orcid.org) based on the user's ORCiD ID.
Any facet of the user's ORCiD can be added to WP pages or posts using WP shortcodes or as blocks 
using the Gutenberg block editor.

## Installation

- Make sure `npm` is installed
- Go the WP plugins folder
  ```sh
  cd ...\wp\wp-content\plugins
  ```
- Create a directory in that folder
  ```sh
  mkdir orcid-block
  ```
- Copy the contents of this repo into that directory
- Run
  ```sh
  # install node.js dependencies
  npm install
  # run one of the following
  # for development
  npm run start
  # for production
  npm run build
  ```
- Activate the plugin from Wordpress
- This will create a "My ORCiD Profile" page in the dashboard where you can
  enter your ORCiD ID
- Add short codes or blocks to any page or post

## Block Editing
TBD

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

- `works_type` = include only works of that type (default = `all`)
- `works_start_year` = include only works with a published year greater than or equal to 
  the start year (default = `1900`)

[List of available work types](https://github.com/ORCID/orcid-model/blob/master/src/main/java/org/orcid/jaxb/model/common/WorkType.java)
