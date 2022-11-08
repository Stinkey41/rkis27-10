let str = 'chebureki aabrikosi ananasi piivo holodnoe';
console.log(str.replace(/[a-zA-Z]*([a-zA-Z])\1[a-zA-Z]*/g, ''));