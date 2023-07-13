const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    const password = await bcrypt.hash(req.body.password, 8);
    const { name, email } = req.body;
    console.log(req.body);

    const user = await User.create({ name, email, password });

    return res.json(user);
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(400).json({ error: "Usuário não encontrado!" });
      }

      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        return res.status(400).json({ error: "Senha inválida!" });
      }

      return res.json({
        user,
        token: jwt.sign({ id: user.id }, "secret", { expiresIn: 86400 })
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Falha na auntenticação do usuário!" });
    }
  },

  async me(req, res) {
    try {
      const { userId } = req.body;

      const user = await User.findByPk(userId);
      console.log(user);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: "Não foi possível recuperar a informação" });
    }
  }
};