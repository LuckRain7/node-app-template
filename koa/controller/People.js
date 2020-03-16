const People = require('../mongoDB/model/People.js')

const AddPeople = function (data) {
    const r = People.create(data)
    return r
}
const getPeople = function () {
    const r = People.find()
    return r
}
const updatePeople = function (id,data) {
    const r = People.findByIdAndUpdate(id,data)
    return r
}
module.exports = {
    AddPeople,
    getPeople,
    updatePeople
}