export type LoginType = {
    email:String,
    password:String
}

export type LoginResponse = {
    _id: String,
    token:String,
    email:String
}

export type SignupType = {
    firstName:String,
    lastName:String,
    username:String,
    email:String,
    password:String
}