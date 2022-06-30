'use strict'

export const createUser = (req, res) => {
    res.json('created')
}

export const getUsers = (req, res) => {
    res.json('get users')
}

export const getUserById = (req, res) => {
    res.json('get user by id')
}

export const updateUserById = (req, res) => {
    res.json('update user by id')
}

export const deleteUserById = (req, res) => {
    res.json('delete user by id')
}