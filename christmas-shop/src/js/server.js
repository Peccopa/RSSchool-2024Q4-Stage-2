const express=require('express');
const app=express();
var port=3000

app.get('/',function (req,res) {
  res.send('Hello Worm!')
})

app.listen(PORT , function(){
  console.log(`Server is running on PORT: ${PORT}`);
  console.log('test-2');
                        console.log('test-4');
  
})