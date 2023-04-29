const { User } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const userObj = {
        users
      };
      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user by its _id and remove a user's associated thoughts when deleted
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
        res.json({ message: 'Student successfully deleted' });
       
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
     },
// // Remove assignment from a student
// async removeThoutgh(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//         { runValidators: true, new: true }
//       );
//       if (!user) {
//         return res
//           .status(404)
//           .json({ message: 'No user found with that ID :(' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
    // },
  
  // Update user by its _id
  async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
        );
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
      res.json({ message: 'Student successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};