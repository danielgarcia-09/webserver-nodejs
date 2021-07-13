const hbs = require('hbs');


hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (text) => 
            text.split(' ')
                .map( t => t[0].toUpperCase() + t.substr(1).toLowerCase() )
                .join(' '));