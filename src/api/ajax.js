import axios from 'axios'

/* *向外暴露一个函数 ajax
  
*/
export default function ajax(url='',data={},type='GET'){
    //返回Promise对象（异步返回的数据是response.data,而不是response)
    return new Promise(function(resolve,reject){
        //利用axios异步执行ajax请求
        let promise//这个内部的promise用来保存axios的返回值（promise对象）
        if(type==='GET'){
            //准备url query参数数据
            let dataStr=''//数据拼接字符串，将data连接到url
            Object.keys(data).forEach(key=>{
                dataStr+=key+'='+data[key]+'&'
            })
            if(dataStr!==''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
                url=url+'?'+dataStr
            }
            //发送get请求
            promise=axios.get(url)
        }
    })
}