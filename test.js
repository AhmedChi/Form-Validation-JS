let re;

re = /^\w+@\w+.\w+$/;

const str = 'ahmedRahman@gmail.com';

const results = re.exec(str);
console.log(results);
