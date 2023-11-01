const addTwoNum = (a, b) => a+b;
const subTwoNum = (a,b) => a-b;
const multply = (a, b) => a*b;

export function divideNum (a,b) {
  return a/b;
}

export const NAME = "Gaurav";
// export default addTwoNum; // only one default export from 1 file. 

export {addTwoNum as add, subTwoNum};
export default multply;