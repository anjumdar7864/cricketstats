
const { Role, validate } = require('../models/rolesM');

module.exports.createRole = async (req, res) => {
    const result = validate(req.body);
    if (result.error) {
        res.status(400).json({ message: result.error.details[0].message });
        return;
    }
    const role = await Role.create({
        role: req.body.role,
        createCategoryPage: req.body.createCategoryPage
    });
    role.save();
    res.json({ message: 'succeed', id: role._id });
}