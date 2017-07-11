var pg = require('pg');

var init = function(app, pool) {
  /*****************Device Register ***************/
  app.post('/api/registerAromeo', function(req, res, next) {
    pool.query('INSERT INTO aromeos(hotel_id, aromeo_id, name, power_on) values($1, $2, $3, $4)',
    [req.body.hotel_id, req.body.aromeo_id, req.body.name, FALSE]);
    res.send('Register Aromeo')
  })

  app.post('/api/changeDeviceName', function(req, res, next) {
    pool.query('UPDATE aromeos SET name = $1 WHERE aromeo_id = $2',
    [req.body.name, req.body.aromeo_id]);
    res.send('Updated device to name to: ' + req.body.name)
  })

  app.delete('/api/deleteDevice/:aromeoID', function(req, res, next) {
    pool.query('DELETE FROM aromeos WHERE aromeo_id = $1',
    [req.params.aromeoID]);
    res.send('Delete Aromeo with aromeoID = '+ req.params.aromeoID)
  })

  /*****************Aromeo Manipulation *****************/
  app.post('/api/controlPower/', function(req, res, next) {
    pool.query('UPDATE aromeos SET power_on = $1 WHERE aromeo_id = $2',
    [req.body.power_on, req.body.aromeo_id]);
    res.send('Power status of ' + req.body.aromeo_id + ' is ' + req.body.power_on)
  })

  app.post('/api/bulkControlPower', function(req, res, next) {

  })

  app.post('/api/controlStrength', function(req, res, next) {
    // TODO need to discuss with the hardware ppl. how are we going to control this?
  })

// TODO not urgent now. need to think about what to retrieve.
  /*****************Status Tracking *****************/
  app.get('/api/getAllAromeoStatus', function(req, res, next) {

  })

  app.get('/api/getAromeoStatus/:aromeoID', function(req, res, next) {

  })
}

module.exports.init = init;