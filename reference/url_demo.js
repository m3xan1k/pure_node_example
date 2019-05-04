const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');


// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(Root domain)
console.log(myUrl.host);

// Hostname(not showing port)
console.log(myUrl.hostname);

// Pathname(filename)
console.log(myUrl.pathname);

// Serialized query string
console.log(myUrl.search);

// Query params object
console.log(myUrl.searchParams);

// Append param
myUrl.searchParams.append('key', 'value');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
