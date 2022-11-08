let str = 'chebureki abrikosi persiki chebureki';
console.log(str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, ''));
