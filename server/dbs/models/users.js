import mogoose from 'mongoose'

const Schema = mogoose.Schema

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        require: true
    },
    password: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

export default mogoose.model('User', UserSchema)