import {Random} from 'mockjs'


let employeeList = [];

for(let j = 0 ; j < 100; j++){
    employeeList.push({
    id:Random.increment(),
    name: Random.cname(),
    phone: Random.float(),
    state: Random.float(0,1,0,0),
    education: Random.ctitle(3, 5),
    idCard: Random.id(),
    sex: Random.float(0,1,0,0)
  })
}

export {
    employeeList
}
