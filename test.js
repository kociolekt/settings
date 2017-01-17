import Settings from './es5/index';

let settings = new Settings();
// Set option
settings.option('option1', 'lorem ipsum');

// Get option
console.log(settings.option('option1')); // lorem ipsum
