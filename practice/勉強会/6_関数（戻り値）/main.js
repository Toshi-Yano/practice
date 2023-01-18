const addTitleFactory = (title) => {
  const addTitle = (name) => {
    return name + title;
  }
  return addTitle;
}

const addSama = addTitleFactory('様');
const addKun = addTitleFactory('くん');

console.log(addSama('矢野'));
console.log(addKun('矢野'));