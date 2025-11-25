const _courses = [
    { id: 1, title: "Node.js Basics", author: "Rahul", price: 0 },
    { id: 2, title: "Express Fundamentals", author: "Priya", price: 0 },
    { id: 3, title: "Testing with Jest", author: "Asha", price: 0 }
]

const courses = {
    find: () => _courses.slice(),
    findById: (id) => _courses.find(c => c.id === id),
    create: (course) => {
        const nextId = _courses.length ? Math.max(..._courses.map(c => c.id)) + 1 : 1
        const newCourse = Object.assign({ id: nextId }, course)
        _courses.push(newCourse)
        return newCourse
    },
    update: (id, changes) => {
        const idx = _courses.findIndex(c => c.id === id)
        if (idx === -1) return null
        _courses[idx] = Object.assign({}, _courses[idx], changes)
        return _courses[idx]
    },
    remove: (id) => {
        const idx = _courses.findIndex(c => c.id === id)
        if (idx === -1) return null
        return _courses.splice(idx, 1)[0]
    }
}

module.exports = courses