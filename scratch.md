# Notes

format on save

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

but Prettier doesn't work with PHP out of the box:

see: (https://stackoverflow.com/questions/62778605/vscode-prettier-not-formatting-php)

and put this is in `package.json`

```
{
  "devDependencies": {
    "@prettier/plugin-php": "0.14.3",
    "prettier": "2.0.5"
  }
}
```

OR should I use the eslint plugin: (https://github.com/tengattack/eslint-plugin-php-markup)

local git repo's `package.json` extract

```
    "eslint": "^8.19.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-fetch-options": "^0.0.5",
    "eslint-plugin-html": "^6.2.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-json": "^3.1.0",
    "eslint-plugin-mozilla": "^2.12.4",
    "eslint-plugin-no-unsanitized": "^4.0.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-sort-exports": "^0.7.0",
    "eslint-plugin-unicorn": "^43.0.1",
    "eslint-plugin-php-markup": "^6.0.0",
    "fit-curve": "^0.2.0",
    "globals": "^13.16.0",
    "gulp": "^4.0.2",
    "gulp-postcss": "^9.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-replace": "^1.1.3",
    "gulp-zip": "^5.1.0",
    "jasmine": "^4.2.1",
    "jsdoc": "^3.6.10",
    "jstransformer-markdown-it": "^2.1.0",
    "merge-stream": "^2.0.0",
    "mkdirp": "^1.0.4",
    "needle": "^3.1.0",
    "postcss": "^8.4.14",
    "postcss-dir-pseudo-class": "^6.0.5",
    "postcss-logical": "^5.0.4",
    "@prettier/plugin-php": "^0.18.9",
    "prettier": "^2.7.1",
```
