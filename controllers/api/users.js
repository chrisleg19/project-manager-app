const User  = require ("../../models/users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


//*CREATING THE TOKEN FOR USER
async function create(req, res){
    try {
        //Add the user to the database
        const user = await User.create(req.body)
        //Create JWT token
        const token = createJWT(user)
        //send token to client
        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}

//user object below is coming from the body in the users-api.js

// function create(req, res){
//     res.json({
//         user: {
//             name: req.body.name,
//             email: req.body.email,
//         }
//     })
// }


/*-- Helper Functions, we can use both when a user signs up and when they log in: --*/
    //NOTE: There are several ways to specify the expiration of the JWT.  See docs for more info: https://www.npmjs.com/package/jsonwebtoken 
    //function returns JWT token
function createJWT(user) {
    return jwt.sign(
      // data payload/info
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }


  async function login(req, res){
    try {
        const user = await User.findOne({email: req.body.email})
        // const decodedPassword = await bcrypt.compare(req.body.password, user.password)

        if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}


function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}


module.exports = {
    create,
    login,
    checkToken
}