# settings

Singleton Local Storage settings for page

## installation

Install directly from git

```bash
npm install kociolekt/settings
```

## usage
Import and invoke

```javascript
import Settings from 'settings';

let settings = new Settings();

// Set option
settings.option('option1', 'lorem ipsum');

// Get option
settings.option('option1'); // lorem ipsum
```

This is [on GitHub](https://github.com/kociolekt/settings) so let me know if I've b0rked it somewhere.
