console.info('Better MAL initiated');
const routes = require('./routes.json');

let currentRoute = window.location.href.trim().substring('https://myanimelist.net/'.length);
console.log(currentRoute);

Object.entries(routes).some(([route, files]) => {
  let pattern = new RegExp('^' + route.replace(/\*/g, '.*') + '$');

  if (pattern.test(currentRoute)) {
    files.forEach(file => {
      if (file.endsWith('.css')) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;

        document.head.appendChild(link);
      } else if (file.endsWith('.js')) {
        let script = document.createElement('script');
        script.src = file;

        document.body.appendChild(script);
      }
    });
    return true;
  }
  return false;
});
