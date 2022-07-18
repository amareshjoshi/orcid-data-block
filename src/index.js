/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';
 import { createElement } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

const fooIcon = createElement('svg', 
	{ 
		width: 20, 
		height: 20 
	},
	createElement( 'path',
		{ 
			d: "M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.301 0 9.6-4.298 9.6-9.601 0-5.301-4.299-9.599-9.6-9.599zM10 17.599c-4.197 0-7.6-3.402-7.6-7.6s3.402-7.599 7.6-7.599c4.197 0 7.601 3.402 7.601 7.6s-3.404 7.599-7.601 7.599zM7.501 9.75c0.828 0 1.499-0.783 1.499-1.75s-0.672-1.75-1.5-1.75-1.5 0.783-1.5 1.75 0.672 1.75 1.501 1.75zM12.5 9.75c0.829 0 1.5-0.783 1.5-1.75s-0.672-1.75-1.5-1.75-1.5 0.784-1.5 1.75 0.672 1.75 1.5 1.75zM14.341 11.336c-0.363-0.186-0.815-0.043-1.008 0.32-0.034 0.066-0.869 1.593-3.332 1.593-2.451 0-3.291-1.513-3.333-1.592-0.188-0.365-0.632-0.514-1.004-0.329-0.37 0.186-0.52 0.636-0.335 1.007 0.050 0.099 1.248 2.414 4.672 2.414 3.425 0 4.621-2.316 4.67-2.415 0.184-0.367 0.036-0.81-0.33-0.998z" 
		}
	)
);

const orcidIcon = createElement('svg',
  { 
    width: 20,
    height: 20
  },
  createElement( 'path',
    {
      d: "M256 128c0 70.7-57.3 128-128 128C57.3 256 0 198.7 0 128C0 57.3 57.3 0 128 0C198.7 0 256 57.3 256 128z"
    }), 
  createElement( 'path',
    {
      d: "M86.3 186.2H70.9V79.1h15.4v48.4V186.2z"
    }),
  createElement( 'path',
    {
      d: "M108.9 79.1h41.6c39.6 0 57 28.3 57 53.6c0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1z M124.3 172.4h24.5 c34.9 0 42.9-26.5 42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
    }),
  createElement( 'path',
    {
      d: "M88.7 56.8c0 5.5-4.5 10.1-10.1 10.1c-5.6 0-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1 C84.2 46.7 88.7 51.3 88.7 56.8z"
    })
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
  //icon: orcidIcon,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
} );
