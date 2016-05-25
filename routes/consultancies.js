/**
 * Created by Intarget on 25/05/2016.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Invalid Request');
});

var consultancyModel = {
    id: 1,
    from: "User",
    to: [],
    scope: 'General', //"Division, Curso",
    messageDate: new Date(),
    message: "Bla Bla bla",
    priority: 1, //1=alta, 2=media, 3=baja
};
router.put('/addConsultancy', function(req, res, next) {
    console.log(res);
    res.send({message: "Registrada tu Asesoria", value: ''});
});

router.get('/getConsultancies', function(req, res, next) {
    console.log(res);
    res.send({message: "Mensajes",
        value: [{
            id: 1,
            from: "User",
            to: [],
            scope: 'General', //"Division, Curso",
            messageDate: new Date(),
            message: "Bla Bla bla",
            priority: 1, //1=alta, 2=media, 3=baja
        },{
            id: 2,
            from: "User",
            to: [],
            scope: 'General', //"Division, Curso",
            messageDate: new Date(),
            message: "Bla Bla bla",
            priority: 1, //1=alta, 2=media, 3=baja
        },{
            id: 3,
            from: "User",
            to: [],
            scope: 'General', //"Division, Curso",
            messageDate: new Date(),
            message: "Bla Bla bla",
            priority: 1, //1=alta, 2=media, 3=baja
        }]
    });
});

module.exports = router;
