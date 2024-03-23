const obj = {
    name: 'mukul',
    rollno: '123445',
    school: 'kvn'
}


for (const key in obj) {
    console.log(`${key} : ${obj[key]} `)
}

const arr = [1,2,3,4,5,6,7,5,4,3,2]

for (const iterator of arr) {
    console.log(iterator);
}