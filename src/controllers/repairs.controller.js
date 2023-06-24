const Repair = require('../models/repair.model');

exports.findAllRepair = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });

    return res.status(200).json({
      status: 'success',
      repairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
exports.create = async (req, res) => {
  try {
    const { date, userId, description, motorsNumber } = req.body;

    const repair = await Repair.create({ date, userId, description, motorsNumber });

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
exports.findRepair = async (req, res) => {
  try {
    const { repair } = req;

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
exports.update = async (req, res) => {
  try {
    const { repair } = req;
    //const { status } = req.body;

    await repair.update({ status: 'completed' });

    return res.status(200).json({
      status: 'success',
      message: 'repair updated',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
exports.delete = async (req, res) => {
  try {
    const { repair } = req;
    //const { status } = req.body;

    await repair.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
      message: 'repair deleted,',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
