import { add } from './math.js'

const result = add(2, 3);
// only run on browser
if (typeof document !== 'undefined') {
    document.getElementById('result').textContent = `2 + 3 = ${result}`;
}