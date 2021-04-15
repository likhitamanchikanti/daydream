const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const adminAccount = new Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const Account = mongoose.model('Account', adminAccount);
modules.exports = Account;