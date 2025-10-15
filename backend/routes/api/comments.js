/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    *
    * @route GET /api/comments
    * @group Comments - Operations about comments
    * @returns {Array.<Comment>} 200 - An array of comment objects
    * @returns {object} 500 - Error message
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    *
    * @route DELETE /api/comments/{id}
    * @group Comments - Operations about comments
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {object} 200 - Success message
    * @returns {object} 404 - Error message if comment not found
    * @returns {object} 500 - Error message
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});

module.exports = router;
