const middlewareTest = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send({ message: "Email is require" });
    return;
  }
  next();
};

module.exports = middlewareTest;
