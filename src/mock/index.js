import Mock from 'mockjs'

const data=Mock.mock({
    "loginStatus" : 1,
    "reason": "@cword",
    "identity|1-3": "id",
    "userName": "@cname()",
})
console.log(data)

Mock.mock("/mockapi/login","get",{
    "loginStatus" : 1,
    "reason": "@cword",
    "identity|1-3": "id",
    "userName": "@cname()",
})