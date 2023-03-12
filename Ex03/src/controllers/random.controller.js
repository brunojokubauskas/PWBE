const randomController = {
    getRandomNumber: (req, res) => {
    const {limit} = req.query;
    const random = Math.floor(Math.random() * limit);
    res,json({ random: randomNumber});
  }
};

module.exports = randomController;