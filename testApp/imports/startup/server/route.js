WebApp.connectHandlers.use('/hello', (req,res,next)=>{
  console.log("=============/hello====================");
  console.log('method', req.method);
  console.log('req qry',req.query);

  // let body = [];
  // req.on('data',(chunk)=>{
  //   console.log('req chunk', chunk);
  //   body.push(chunk);
  // }).on('end',()=>{
  //   body = Buffer.concat(body).toString();
  //   console.log('body', body);
  // });

  let data = '';
  req.on('data', (chunk)=>{
    data += chunk;
    console.log('chunk data', data);
  });

  res.writeHead(200,{'Cache-Control': 'public, max-age=0'});

  res.end("Hello world");
});

WebApp.connectHandlers.use('/hi/:id',(req,res) =>{
  console.log('query?', req.query);
  console.log('params', req.params);
  res.end('hi');
});


/*
Picker.route('/pick/:id',(params,req,res,next)=>{
  console.log("=============/pick/:id====================");
  // console.log('query?', req.originalUrl);
  console.log('params', params);
  //console.log('req body', req.body);

  let data = '';
  req.on('data', (chunk)=>{
    data += chunk;
    console.log('chunk data', data);
  }).on('end', ()=>{
    console.log('parse', JSON.parse(data));

  });

  res.end('pick');
});

 */
/*
Picker.route('/test/(.*)',(params,req,res,next)=>{
  console.log("=============wild card====================");
  console.log('res', res.statusCode);
  console.log('req', req.body);

  res.end('not ok');
});

 */
/*
Picker.route('/(.*)',(params,req,res,next)=>{
  res.statusCode = 404;
  res.end('404 not found');
});
 */



/*
WebApp.connectHandlers.use('/hello',(req,res)=> res.end('hello!'))
.use('/hi',(req,res)=> res.end('hi'))
.use('/help',(req,res)=>res.end('help'))
.use((req,res)=> res.statusCode=404 && res.end('404 not found!'));

 */
