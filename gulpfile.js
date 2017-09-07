var gulp = require('gulp');
var server = require('gulp-webserver');

var urlTool = require('url');
var qs = require('qs');

var json=[
                 {
                        img:"images/l1.jpg",
                        name:"群助手",
                        time1:'上午',
                        time2:"11：39",
                        span:"[1个群有新消息]"
                    }, 
                    {
                        img:"images/l2.jpg",
                        name:"QQ看点",
                        time1:'上午',
                        time2:"11：39",
                        span:"[精选]",
                        nobr:"林俊杰的作家如此拉风，兰博"
                    }, 
                    {
                        img:"images/l3.jpg",
                        name:"鸡孙女",
                        time1:'上午',
                        time2:"11：39",
                        nobr:"https://github.com/mxzbaba/9.7"
                    }, 
                    {
                        img:"images/l4.jpg",
                        name:"我的电脑",
                        time1:'上午',
                        time2:"11：39",
                        nobr:"你已在电脑登录，可传文件到电脑"
                    }, 
                    {
                        img:"images/l5.jpg",
                        name:"网站1506A",
                        time1:'上午',
                        time2:"11：39",
                        nobr:"恭喜您获得了三好学生勋章"
                    }, 
                    {
                        img:"images/l6.jpg",
                        name:"腾讯新闻",
                        time1:'上午',
                        time2:"11：39",
                        nobr:"大妈卖鱼被“咬”住手 嚎啕大哭"
                    }
                    , 
                    {
                        img:"images/l7.jpg",
                        name:"小卖铺",
                        time1:'上午',
                        time2:"11：39",
                        nobr:"。。。。"
                    }
        ]



gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8099,
            middleware:function(req,res){
                res.setHeader('Access-Control-Allow-Origin','*')

                var urlObj =  urlTool.parse(req.url);

                var method = req.method;

                var pathname = urlObj.pathname;


                if(method==="POST"){
                    var postData = '';
                    req.on('data',function(chunk){
                        postData +=chunk;
                    })
                    req.on('end',function(){
                        var postParmas = qs.parse(postData)
                        console.log(pathname)
                        switch (pathname) {
                            case "/shopping":
                                    // if(postParmas.name=="as" && postParmas.pwd=="123"){
                                        res.setHeader('content-type','application/json;charset=utf-8')
                                        res.write(JSON.stringify(json))
                                        res.end()
                                   // }
                                break;
                        
                            
                        }

                    })
                }
               
            }



        }))
})


gulp.task('default',['mockServer'])