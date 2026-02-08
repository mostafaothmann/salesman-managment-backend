import { genSaltSync } from "bcrypt";
import * as bcrypt from "bcrypt";

export  function encodePassword(rawPassword: string) {
    const SALT = genSaltSync()
    return bcrypt.hashSync(rawPassword, SALT)
}

export  function comparePasswords(rawPassword: string, hash :string) {
    return bcrypt.compareSync(rawPassword, hash)
}