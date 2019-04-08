const path = require('path');
const fs = require('fs');

const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    alias: {
        name: 'n'
    },
});

const componentName = args.name;

fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName)
);

const componentCode = `import './${componentName}.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class ${componentName} extends Component {
    static defaultProps = {
       
    }   

    render() {
    
        return (
            <div className="${componentName}">

            </div>
        )
    }
}
`

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
)

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
    `.${componentName} {}`,
)

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export default from './${componentName}.jsx';`,
)