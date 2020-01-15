const moment = require('moment')
const bcrypt = require('bcrypt')
const { URPTicket } = require('../models/userResetPassM')
const { sendResetPassEmail } = require('../../../shared/sendResetPassEmail')
const { User } = require('../models/usersM')
const Joi = require('joi');

module.exports.sendResetPassEmail = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select('name email');
  if (!user) {
    res.status(404).json({ message: 'User not Found!' })
    return;
  }

  const randomNum = Math.round(Math.random() * 10000);
  const expirationDate = moment(new Date()).add(2, 'hours');

  const ticket = await URPTicket.create({
    userID: user._id,
    expirationDate: expirationDate,
    pin: randomNum
  });
  const ticketCreated = await ticket.save()
  if (!ticketCreated) {
    return res.status(400).send('Ticket Not Created!');
  }

  try {
    sendResetPassEmail(ticketCreated.pin, user);
    res.json({ _id: ticketCreated._id });

  } catch (ex) {
    res.json({ message: ex.message });
  }

  // console.log(new Date());
  // var date = moment(new Date()).add(2, 'hours');
  // var test = moment(new Date()).isBefore(date)
  // res.send(test)
}


module.exports.pinConfirmation = async (req, res) => {
  const ticket = await URPTicket.findById(req.body.id);
  if (!ticket) {
    res.status(404).json({ message: 'Ticket not Valid!' })
    return;
  }
  const expirationDate = moment(ticket.expirationDate);
  const currentDate = moment(new Date());
  if (ticket.pin === req.body.pin && currentDate.isBefore(expirationDate) && !(ticket.isUsed)) {
    ticket.isUsed = true;
    ticket.save();
    res.json({ userID: ticket.userID })
  } else {
    res.status(400).json({ message: 'Code not Valid!' })
  }

}

module.exports.resetPassword = async (req, res) => {
  const schema = {
    newPassword: Joi.string().required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).json({ message: result.error.details[0].message });
    return;
  }
  const user = await User.findOne({ _id: req.params.userID }).select('password');
  if (!user) {
    res.status(404).json({ message: 'User not Found!' })
    return;
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.newPassword, salt);
  user.save();

  res.json({ message: 'Password is Changed!' });

}

module.exports.getContractorsRelatedToCate = async (req, res) => {
  if (req.user.isHomeOwner) {
    const contractors = await User.find({ categoriesToWorkIn: { $elemMatch: { jobCategory: req.params.jobCategoryId } } })
      .select('name email bio profilePic')
      .populate('profilePic', 'destination')
    if (!contractors) {
      res.status(404).json({ message: 'Contractors not Found!' })
      return;
    }
    res.send(contractors);

  } else {
    res.json({ message: "Access Denied!" });
  }

}

module.exports.addTags = async (req, res) => {
  const user = await User.findById(req.params.userId)
  user.tags.push(...req.body.tags)
  user.save();
  res.json({ message: "success" });
}

module.exports.updateTags = async (req, res) => {
  const user = await User.findById(req.params.userId)
  user.tags = req.body.tags;
  user.save();
  res.json({ message: "success" });
}

module.exports.updateUser = async (req, res) => {

  const updateProf = await User.findByIdAndUpdate(req.user._id, {
    $set: {
      name: req.body.name,
      gender: req.body.gender,
      bio: req.body.bio,
      tags: req.body.tags
    }
  }, { new: true });

  res.json({ message: 'Updated' });
};

module.exports.getUser = async (req, res) => {

  const user = await User.findById(req.user._id)
    .select('-password')
    .populate('profilePic', 'destination')
    .populate('lev', 'role');


  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  res.send(user);
};

module.exports.getMedicalProfessionalsRequests = async (req, res) => {

  const users = await User.find({ MPRequest: true, disapproved: false })
    .select('-password')
    .populate('profilePic', 'destination')

  if (!users) {
    return res.status(404).json({ message: 'users not found' });
  }
  res.send(users);
};

module.exports.getAllMedicalProfessionals = async (req, res) => {
  const medicalProfessionals = await User.find({ isMedicalProfessional: true, disapproved: false })
    .select('-password')
    .populate('profilePic', 'destination')

  if (!medicalProfessionals) {
    return res.status(404).json({ message: 'No medical Professionals found' });
  }
  res.send(medicalProfessionals);
};

module.exports.getUserForAdmin = async (req, res) => {

  const user = await User.findById(req.params.userId)
    .select('-password')
    .populate('profilePic', 'destination')
    // .populate('medicalRecordFile', 'destination')
    .populate('lev', 'role');


  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  res.send(user);
};

module.exports.approveMedicalProfRequest = async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (!user) {
    return res.status(404).json({ message: 'No user found' });
  }

  user.isMedicalProfessional = true;
  user.MPRequest = false;
  user.disapproved = false;
  user.save()

  res.json({ message: "Approved!" });
};
module.exports.disapproveMedicalProfRequest = async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (!user) {
    return res.status(404).json({ message: 'No user found' });
  }

  user.isMedicalProfessional = false;
  user.MPRequest = false;
  user.disapproved = true;
  user.save()

  res.json({ message: "Disapproved!" });
};






//---------------------------------------------------------------------------------------------------------------------------//




module.exports.getCommonUsers = async (req, res) => {
  const commonUsers = await User.find({ isCommonUser: true })
    .select('-password')
    .populate('profilePic', 'destination')
  if (!commonUsers) {
    return res.status(404).json({ message: 'No common Users found' });
  }
  res.send(commonUsers);
};




module.exports.deleteUser = async (req, res) => {
  const deleteuser = await User.findByIdAndRemove(req.params.userId);
  res.json({ message: 'Deleted' });
};

module.exports.changePassword = async (req, res) => {

  const user = await User.findById(req.user._id);
  const oldPassword = await bcrypt.compare(req.body.oldPassword, user.password);
  if (oldPassword) {
    const salt = await bcrypt.genSalt(10);
    const updateUserPassword = await User.findByIdAndUpdate(req.user._id, {
      $set: {
        password: await bcrypt.hash(req.body.newPassword, salt)
      }
    },
      { new: true }
    );
    return res.json({ message: 'updated' });
  }
  res.json({ message: 'Invalid Password' });
};