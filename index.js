var franc = require("franc");
var langs = require('langs');
var colors = require("colors");


const args = process.argv.slice(2);
const phrase = args[0];
//console.log(args)
//console.log(franc('Alle menslike wesens word vry'))
//console.log(langs.where("3", 'afr').name)
try {
    const langCode = franc(phrase);
    if (langCode === 'und') {
        console.log('No matching language found, try a different phrase!'.red);
    } else {
        const langLookup = langs.where("3", langCode);
        console.log(langLookup.name.blue)
    }

} catch (e) {
    console.log(e.code)
    console.log(e)
}