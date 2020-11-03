const { sequelize } = require("../db/index");
const passport = require('passport');

function Init(app) {
  app.get("/blog", async function (request, response) {
    const blogs = await sequelize.models.blogs.findAll({});
    response.status(200).send(movies);
  });

  app.get("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });
    response.send({ blog });
  });

  app.delete("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });
    const dest = await blog.destroy();
    response.send({ dest });
    
  });

  app.post(
    "/blog",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { id, name, language, content } = body;

      const createdBlog = await sequelize.models.blogs.create({
       id,
       blog_name,
        language,
        content,
      });
      response.status(201).send(createdBlog);
    }
  );

  app.put("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });

    const { body } = request;
    const { name, language, content } = body;

    blog.blog_name = name ? name : blog.name;
    blog.language = language ? language : blog.language;
    blog.content = content ? content : blog.quality;
   
 
    await blog.save();

    response.status(200).send(blog);
  });
  
  //if any error occurs
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something went wrong ')
  })
}

module.exports = {
  Init,
};
