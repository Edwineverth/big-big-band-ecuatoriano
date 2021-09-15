function twoStrings(s1, s2) {
    let value = [];
    s1.forEach((element, index)=>{
        value.push(!!(element.trim().toLowerCase().split('').filter(item=> s2[index].trim().toLowerCase().split('').includes(item))).length)
    })
    //value = value.filter(item=>item);
    console.log('value', value);
    value.forEach(element => console.log(element ? 'YES':'NO'))

}

console.log(twoStrings(['ab','cd'],['af','ee']));

