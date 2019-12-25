// Aliases can rename imported items to be used under a different name in the file.
import {keyValue as key, test} from './external.js'
// Since we're importing the default from external.js, we don't have to use the exact variable name because JS knows that whatever the default is, that's what we're after.
import anyName from './external.js'

console.log(key)
test()
console.log(key)
console.log(anyName)