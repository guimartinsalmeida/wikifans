
const characterFieldsValidation = (req, res, next) => {
  const { body } = req;
  for (const field in body) {
    if (body.hasOwnProperty(field)) {
      const value = body[field];
      if (value === '') {
        return res.status(400).json({
          error: `O campo '${field}' não pode ser nulo ou vazio.`,
        });
      }
    }
  }

  next();
};

module.exports = {
  characterFieldsValidation
};
