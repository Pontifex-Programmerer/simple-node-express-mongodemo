const router = require('express').Router();

//req = request, res = response
router.get('/', (req, res)=> {
    res.send('Hello world!');
    res.end();
})

module.exports=router;