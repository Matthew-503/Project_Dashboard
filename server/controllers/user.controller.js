import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => { };
// try {
//   const users = await User.find({}).limit(req.query._end);

//   res.status(200).json(users);
// } catch (error) {
//   res.status(500).json({ message: error.message })
// }

const createUser = async (req, res) => {
  try {
    // retrieve data from frontend
    const { name, email, avatar } = req.body;

    // check if user exist
    const userExists = await User.findOne({ email });

    if (userExists) return res.stats(200).json(userExists);

    // user does not exist
    const newUser = await User.create({
      name,
      email,
      avatar,
    })

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserInfoByID = async (req, res) => {
  // try {
  //   const { id } = req.params;

  //   const user = await User.findOne({ _id: id}).populate('allProperties');

  //   if(user) {
  //     res.status(200).json(user)
  //   } else {
  //     res.status(404).json({ message: 'User not found' });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: error.message })
  // }
};

export {
  createUser,
  getAllUsers,
  getUserInfoByID,
}