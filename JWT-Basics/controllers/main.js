const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body

    // Validation of username and password
    // If any of them is not provided, we can throw an error
    if (!username || !password) {
        throw new CustomAPIError('Please provide username and password', 400)
    }

    console.log(username, password);
    res.send('Fake Login/Signup/Register Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, Bhavya Tewari`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}