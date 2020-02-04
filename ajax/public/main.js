console.log('我是main.js')
getCSS.onclick=()=>{
    const request = new XMLHttpRequest();//XMLHttpRequest.readyState  0 
    request.open('GET','/style.css');//XMLHttpRequest.readyState  1
    request.onload=()=>{//XMLHttpRequest.readyState  2
        console.log('getCSS成功了')
        console.log('getCSS回应是'+request.response);//XMLHttpRequest.readyState  4
        const style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send();
}


getJS.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload=()=>{
        console.log('getJS成功了')
        console.log('getJS回应是'+request.response);
        const script = document.createElement('script')
        script.innerHTML = request.response;
        document.body.appendChild(script)
    }
    request.onerror=()=>{
        console.log('失败了')
    }
    request.send();
}


getHTML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    // request.onload=()=>{
    //     console.log('getHTML')
    //     console.log('getHTML回应是'+request.response);
    //     const div = document.createElement('div')
    //     div.innerHTML = request.response;
    //     document.body.appendChild(div)
    // }
    // request.onerror=()=>{
    //     console.log('失败了')
    // }
    request.send();

    request.onreadystatechange=()=>{//浏览器等有结果会调用这个函数
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('我获取到response')
            if(request.status >= 200 && request.status < 300){
                console.log('我获取到成功的html结果')
                return false;
            }
            console.log('加载html失败')
        }
    }
}


getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('getXML我获取到response')
            if(request.status >= 200 && request.status < 300){
                console.log('我获取到成功的XNL结果')
               console.log(request.responseXML);
                const dom = request.responseXML;
                var text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text);

                return false;
            }
            console.log('加载html失败')
        }
    }
    request.send();
}

getJSON.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('getgetJSON我获取到response')
            if(request.status >= 200 && request.status < 300){
                console.log('我获取到成功的getJSON结果')
                console.log(request.response)
               const object =  JSON.parse(request.response)
               console.log(object)
            }
         
        }
    }
    request.send();
}
let n = 1;
getPAGE.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/page'+(n+1));
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('getPAGE我获取到response')
            console.log(request.status )
            if(request.status ===200){
                ++n;
                console.log('我获取到成功的getPAGE结果')
                console.log(request.response)
               const array =  JSON.parse(request.response)
              array.forEach(item=>{
                  const li = document.createElement('li');
                  li.textContent = item.id;
                  xxx.appendChild(li);
              })
            }
         
        }
    }
    request.send();
}