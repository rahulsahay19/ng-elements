const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    
    const files = [
        './dist/ng-elements/runtime.js',
        './dist/ng-elements/polyfills.js',
        './dist/ng-elements/main.js'
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/ng-elements.js');
})();