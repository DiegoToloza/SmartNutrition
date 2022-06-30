'use strict'

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/smart_nutrition')
    .then(db => console.log('DataBase is connected'))
    .catch(error => console.log(error))