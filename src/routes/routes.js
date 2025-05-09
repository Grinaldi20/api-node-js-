const express = require('express'); 
const router = express.Router(); 

const FeedbacksController = require('../controllers/Feedbacks');

router.post('/feedbacks', FeedbacksController.cadastrarFeedbackss); 
router.get('/feedbacks', FeedbacksController.listarFeedbacks); 
router.patch('/feedbacks', FeedbacksController.editarFeedbacks); 
router.delete('/feedbacks', FeedbacksController.apagarFeedbacks); 


module.exports = router ; 