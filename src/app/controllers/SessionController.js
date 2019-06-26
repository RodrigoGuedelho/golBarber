class SessionController {
  async create (req, res) {
    return res.render('auth/sigin')
  }
  async sigin (req, res) {}
}
module.exports = new SessionController()
