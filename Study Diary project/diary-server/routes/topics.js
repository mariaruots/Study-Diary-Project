var express = require('express');
var router = express.Router();
var topicDatabase = require('./topicsservice');

router.route('/')

  //GETs all users from database
  .get((req, res, next) => {
    topicDatabase.getAllTopics((results) => {
      res.json(results)
    })
  })
  //POST new user
  .post((req, res, next) => {
    topicDatabase.postNewTopic(req, () => {
      res.status(201)
        .end();
    })
  })

router.route('/:id')

  //GET single user using id
  .get((req, res, next) => {
    topicDatabase.getSingleTopic(req, (results) => {
      res.json(results)
    })
  })

  //DELETE single user using id
  .delete((req, res, next) => {
    topicDatabase.deleteSingleTopic(req, (results) => {
      res.json(results)
    })
  })

  //PUT new user
  .put((req, res, next) => {
    topicDatabase.updateTopic(req, () => {
      res.status(201)
        .end();
    });
  });

module.exports = router;