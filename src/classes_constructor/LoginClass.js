import React from 'react'

export class LoginClass {
  constructor(email, password, name, dateOfBirth, phoneNumber, bio, website, image) {

    this.Id = getRandomInt(10000000),
    this.body = {
      userId: this.Id,
      email: email,
      password: password,
      name: name,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      bio: bio,
      website: website,
      image: image,
      notification: {
        posts:[],
        match: [],
        request: []
      }
    }

  }

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
