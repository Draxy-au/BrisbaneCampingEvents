export default function sort (list, field) {
  let newList = {};

  if (!list.field) {
    console.log('no field in list');
    return list
  }

  list.sort((a,b)=>a.field-b.field);

  return newList;
}