/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @name GetComments
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @returns {Object[]} 200 - Array of comment objects in JSON format
    * @returns {Object} 500 - Internal Server Error message
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @name DeleteComment
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @returns {Object} 202 - Success message if comment deleted
    * @returns {Object} 404 - Error message if comment not found
    * @returns {Object} 500 - Internal Server Error message
    */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    const commentId = req.params.id;
    try {
        const deletedComment = await Comment.findByIdAndRemove(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(202).json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;