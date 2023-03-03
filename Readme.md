    res.status(200).json({
        c: 200,
        m: "Hello World!",
        d: {}
    });

    We also use Bootstrap to make the UI more comfortable to read.

Configure MongoDB database
config/db.js

module.exports = {
  url: "mongodb://localhost:27017/",
  database: "bezkoder_files_db",
  imgBucket: "photos",
};




function isLoggedIn(req, res, next) {
    //if user is authenticated in session
    if (req.isAuthenticated())
        return next();

    //otherwise return to login
    res.redirect('/');
}





exports.getPrivateRoute = (req, res, next) => {
    res
      .status(200)
      .json({
        success: true,
        data: "You got access to the private data in this route",
      });
  };
  






https://www.bezkoder.com/node-js-upload-store-images-mongodb/