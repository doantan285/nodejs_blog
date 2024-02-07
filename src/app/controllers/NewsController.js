class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // home, search, contact

  // [GET] /news/:slugs
  show(req, res) {
    res.send("News detail!!!");
  }
}

module.exports = new NewsController();
