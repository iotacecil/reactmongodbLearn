const express = require('express')
const mongoose = require('mongoose')

// 连接数据库
const DB_URL = 'mongodb://10.1.18.20:27017/reactlearn'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log("成功连接mongodb")
})
// 定义文档模型
const User = mongoose.model('user',new mongoose.Schema({
    name: {type:String,requier:true},
    age: {type:Number,requier:true}
}))
// 添加数据
User.create({
    name:'wangwu',
    age:18
},function (err,doc) {
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
// 删除数据
User.remove({age:18},function (err,doc) {
    if(!err){
        console.log(doc)
        User.find({},function (e,d) {
            console.log(d)
        })
    }
})
// 更新
User.update({'name':'zhangsan'},{'$set':{age:26}},function (err, doc) {
    console.log(doc)
})

const app = express()
app.get('/',function (req,res) {
    res.send('<hi>Hello word</hi>')
})
app.get('/data',function (req,res) {
    // 查询
    User.find({"age":26},function (err,doc) {
        res.json(doc)
    })
})
app.listen(9093,function () {
    console.log("输入正确")
})