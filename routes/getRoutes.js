const express = require('express');
const app = express()
import { faker, id_ID } from '@faker-js/faker';


// Suggested code may be subject to a license. Learn more: ~LicenseLog:3181188873.
const fakerGenerate = () => {
    return{
        id_ID : faker.number.toString(bigInt()),
        userName: faker.person.fullName(),
        userEmail: faker.internet.email(),
        userPass: faker.internet.password(),
        userAvatar: faker.image.url()
    }
}


app.get('/api/users', (req, res) => {
    const userAvaillable = []
    for (let countUsers =0; countUsers < 10; countUsers++){
        userAvaillable.push(fakerGenerate())
    }
    res.json(userAvaillable)
})
