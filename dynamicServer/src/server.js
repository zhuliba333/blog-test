var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
console.log(`process${JSON.stringify(process.argv)}`)
if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  console.log(`parsedUrl${JSON.stringify(parsedUrl)}`)
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  console.log(`path${path}`)
  var query = parsedUrl.query
  console.log(`query${JSON.stringify(query)}`)
  var method = request.method
  console.log(`method${method}`)

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  response.statusCode = 200
  // 默认首页
  const filePath = path === '/' ? '/index.html' : path
  const index = filePath.lastIndexOf('.')
  // suffix 是后缀
  const suffix = filePath.substring(index)
  const fileTypes = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.png':'image/png',
    '.jpg':'image/jpeg'
  }
  let userArray = (fs.readFileSync('./public/db/user.json', 'utf8'));
      userArray = userArray?JSON.parse(userArray):[];
console.log(`path${path}`)
  if(path==='/home.html'){
    const cookie = request.headers['cookie'];
    console.log(`cookie${cookie}`)
    let data = fs.readFileSync('./public/home.html').toString();
    if(cookie.indexOf('session_id')!==-1){
      let randomNum = cookie.split(';')[0].split('=')[1];
      console.log(`randomNum${randomNum}`);
      //根据id查找名称
      let session = fs.readFileSync('./public/session.json','utf8');
      session = session?JSON.parse(session):{};
      let id = session[randomNum] &&  session[randomNum]['id'];
      console.log(`查找的id是${id}`)
      if(id){
        var user = userArray.find((item)=>{
          return item.id===id
        })
        if(!user){
          data = data.replace('{{loginStatus}}','出错了，请检查').replace('{{user.name}}','出错了');;
        }else{
          data = data.replace('{{loginStatus}}','已经登陆了').replace('{{user.name}}',user.name).replace('<p><a href="./sign_in.html">登陆</a></p>','');
        }
        response.write(data);
        response.end('home')
     
    }else{
      console.log('无id')
      data = data.replace('{{loginStatus}}','未匹配到出错了，请检查').replace('{{user.name}}','出错了');;
      response.write(data);
      response.end('home')
    }
  }else{
    console.log('false')
    data = data.replace('{{loginStatus}}','未登陆').replace('{{user.name}}','未登陆');
    response.write(data);
    response.end('home')
  }
    
    return false;
  
}

  if(path==='/sign_in' && method == 'POST'){
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //拿到传过来的数据，get用query就可以拿到，post比较麻烦
    const array = [];//放数据，有可能数据是分段上传
    request.on('data',(chunk)=>{
      array.push(chunk);
    })
    request.on('end',(chunk)=>{//chunk都是utf-8的编码
      const string = Buffer.concat(array).toString();
     console.log(string)
     let newUser = JSON.parse(string);
     var user = userArray.find((item)=>{
       return item.password===newUser.password && item.name === newUser.name
     })
     console.log(`user${user}`)
     if(!user){
      response.statusCode = 400;
      response.end('不匹配')
     }else{
       //已登陆 用session创建随机数 todo重点

       const random = Math.random();
       let session = fs.readFileSync('./public/session.json','utf8');
       session = session?JSON.parse(session):{};
       session[random] = {id:user.id};
       fs.writeFileSync('./public/session.json',JSON.stringify(session))
       response.setHeader('Set-Cookie',`session_id=${random};HttpOnly`)//HttpOnly杜绝前端操作cookie.用random防止篡改
      response.end()
     }
     
     
    })
    
     return false;
   }

  if(path==='/add' && method == 'POST'){
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //拿到传过来的数据，get用query就可以拿到，post比较麻烦
    const array = [];//放数据，有可能数据是分段上传
    request.on('data',(chunk)=>{
      array.push(chunk);
    })
    request.on('end',(chunk)=>{//chunk都是utf-8的编码
      const string = Buffer.concat(array).toString();
     console.log(string)
     let newUser = JSON.parse(string);
     console.log('userArray'+ JSON.stringify(userArray))
      newUser.id = (userArray[userArray.length-1]?userArray[userArray.length-1].id:0)+1;
      userArray.push(newUser)
      fs.writeFileSync('./public/db/user.json',JSON.stringify(userArray))
      response.end()
    })
    
     return false;
   }
  response.setHeader('Content-Type', 
    `${fileTypes[suffix] || 'text/html'};charset=utf-8`)
  let content 
  try{
    content = fs.readFileSync(`./public${filePath}`)
  }catch(error){
    console.log(error)
    content = '文件不存在'
    response.statusCode = 404
  }
  response.write(content)
  response.end()

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
