/*7. Utilize JSON.stringify() e JSON.parse() para converter um objeto em string e viceversa.
 */
const OBJ = `{
    "name": "May", "age": "15", "salary": "17000"
}`;
    const OBJSON=JSON.stringify(OBJ);
//const OBJparse=JSON.parse(OBJ);
console.log(JSON.stringify(OBJ));

console.log(JSON.parse(OBJ));