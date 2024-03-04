// 创建URLSearchParams对象来构建表单数据
const formData = new URLSearchParams();
formData.append("DDDDD","账号","upass","密码","0MKKey","Login","v6ip","ip地址");

fetch('https://lgn.bjut.edu.cn/', {
  method: 'POST',
  // 设置Content-Type为application/x-www-form-urlencoded
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  // 将表单数据转换为字符串作为请求体
  body: formData.toString(),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));