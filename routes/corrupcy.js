/**
 * Created by Intarget on 25/05/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Invalid Request');
});

router.put('/addTicket', function(req, res, next) {
    console.log(res);
    res.send({message: "Registrada tu denuncia", value: ''});
});

router.get('/getTickets', function(req, res, next) {
    console.log(res);
    res.send({message: "Tickets de Denuncias",
        value: [{idTicket: 1, area: 'Sistemas', subjectName: '?', message: 'Bla Bla Bla Bla Bla Bla Bla Bla ', messageResponse:'wla wla wla wla' },
            {idTicket: 2, area: 'Sistemas', subjectName: '?X', message: 'Bla Bla Bla Bla Bla Bla Bla Bla ', messageResponse:'wla wla wla wla' },
            {idTicket: 3, area: 'Sistemas', subjectName: '?Y', message: 'Bla Bla Bla Bla Bla Bla Bla Bla ', messageResponse:'wla wla wla wla' }]
    });
});


module.exports = router;
