let data = {
  color: 'red',
  brand: 'Jordan',
  gender: 'Men',
  size: ['Sm', 'Md', 'Lg']
};

function correctBrand(data) {

  let newData = [];

  for (let filter in data ) {
    newData.push(data.size);
    console.log(newData);

  }
  return newData;
}
