var pg = require('pg');

var init = function(app, pool) {
    app.get('/api/getAllHotels', function(req, result, response) {
        pool.connect(function(err, client, done) {
            if(err) {
                return console.error('error fetching client from pool', err);
            }

            client.query('SELECT * FROM accounts', [], function(err, res) {
                //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
                if(err) {
                    done(err);
                    return console.error('error running query', err);
                }
            }).on('end', (res) => {
                done();
                return result.json(res.rows);
            });
        });
    })

}

//WHERE ispersonal = FALSE

module.exports.init = init;