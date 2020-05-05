const Pool = require('pg').Pool;

//Port 5432
const conopts = {
    user: 'postgres',
    password: 'Sovelto1',
    host: 'localhost',
    database: 'diary'
}


const pool = new Pool(conopts);

//GETs all users from database
function getAllTopics(callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('SELECT * FROM topic',
            (err, data) => {
                if (err) throw err;
                client.release();
                callback(data.rows);
            });
    });
};

//GET single user from database
function getSingleTopic(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('SELECT id, title, legend, starttime, finishtime, inprogress FROM topic WHERE id = $1', [req.params.id],
            (err, data) => {
                if (err) throw err;
                client.release();
                callback(data.rows);
            });
    });
};

//DELETE single user from database
function deleteSingleTopic(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('DELETE FROM topic WHERE id = $1', [req.params.id],
            (err, data) => {
                if (err) throw err;
                client.release();
                callback(data.rows);
            });
    });
};

//POST new user to database
function postNewTopic(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('INSERT INTO topic (title, legend, starttime, finishtime, inprogress) VALUES ($1, $2, $3, $4, $5)',
            [req.body.title, req.body.legend, req.body.starttime, req.body.finishtime, req.body.inprogress],
            (err, data) => {
                if (err) throw err;
                client.release();
                callback();
            });
    });
};

//PUT update single user from database
function updateTopic(req, callback) {
    pool.connect((err, client) => {
        if (err) throw err;
        client.query('UPDATE topic SET title = $1, legend = $2, starttime = $3, finishtime = $4, inprogress = $5 WHERE id = $6',
            [req.body.title, req.body.legend, req.body.starttime, req.body.finishtime, req.body.inprogress, parseInt(req.params.id)],
            (err, data) => {
                if (err) throw err;
                client.release();
                callback();
            });
    });
};

module.exports = { getAllTopics, postNewTopic, getSingleTopic, deleteSingleTopic, updateTopic };