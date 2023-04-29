const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thougthController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions').post(addReaction);


module.exports = router;