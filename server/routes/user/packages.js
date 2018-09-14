//These routes manages all packages('last messages') of a user
const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
const isAuthenticated = require('../../middleware/isAuthenticated');
const Package = require('../../db/models/Package');
const EncryptedFile = require('../../db/models/EncryptedFile');

router.route('/:id/packages')
  .get(isAuthenticated, (req, res) => { // Fetching all the packages of a user
    const userId = req.params.id;

    return new Package()
      .query(qb => {
        qb.where({ 'package_maker_id': userId })
          .andWhere({'deleted_at': null});
      })
      .fetchAll({ 'withRelated': ['file'] })
      .then(packages => {
        return res.json(packages);
      })
      .catch(err => {
        return res.status(400).json({ message: err.message });
      });
  })
  .post(isAuthenticated, (req, res) => {
    // req.body is going to come in with a recipientId and a message
    const userId = req.params.id;
    const recipientId = req.body.recipientId;

    const packageInput = {
      'package_maker_id': userId,
      'recipient_id': recipientId,
    };

    // First we make a package
    return new Package()
    .save(packageInput)
    .then(response => {
      return response.refresh();
    })
    .then( package => {
      // Second we make a encrypted_file using the package id as foreign key
      return new EncryptedFile()
        .save({
          'name': 'Message',
          'aws_url': req.body.message,
          'packages_id': package.attributes.id,
        })
        .then(response => {
          return response.refresh();
        })
        .then(() => {
          res.json({'message': 'message saved'});
        })
    })
    .catch(err => {
      console.log(err.message);
      return res.status(400).json({ 'error': err.message });
    });
  })
//-------------------------------//
  router.route('/:id/packages/:packageId')
    .get(isAuthenticated, (req, res) => { // fetches a package by id 
      const packageId = req.params.packageId;

      return new Package()
      .query(qb => {
        qb.where({ 'id': packageId })
          .andWhere({'deleted_at': null});
      })
      .fetch({ 'withRelated': ['file'] })
      .then(packages => {
        return res.json(packages);
      })
      .catch(err => {
        return res.status(400).json({ message: err.message });
      });
    })
    .put(isAuthenticated, (req, res) => { // edits a encrypted file by packageId
      const packageId = req.params.packageId;

      return new EncryptedFile()
      .where({'packages_id': packageId})
      .save({
        'aws_url': req.body.message
      }, { 'patch': true })
      .then(() => {
        res.json({'message': 'message has being edited' });
      })
      .catch(err => {
        return res.status(400).json({ 'error': err.message });
      });
    })
    .delete(isAuthenticated, (req, res) => { // flags Packages with a deleted_at
      const userId = req.params.id;
      const packageId = req.params.packageId;
   
       // flags the trigger input
       return new Package()
       .query(qb => {
         qb.where({ 'id': packageId })
           .andWhere({ 'package_maker_id': userId });
       })
       .save({'deleted_at': knex.fn.now()}, { patch: true })
       .then(response => {
         return response.refresh();
       })
       .then(package => {
         return res.json(package);
       })
       .catch(err => {
         console.log(err.message);
         return res.status(400).json({ 'error': err.message });
       });
    })


module.exports = router;