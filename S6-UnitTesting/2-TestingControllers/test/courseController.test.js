jest.mock("../src/models/coursesModel")
const coursesModel = require("../src/models/coursesModel")
const coursesController = require("../src/controller/courseController")

describe("Testing courses controller", () => {
    describe("getAllCourse", () => {
        beforeEach(() => {
            jest.clearAllMocks()
        })

        test("should return all the courses", () => {
            const mockCourses = [
                { id: 1, title: "Node.js Basics" },
                { id: 2, title: "Express Fundamentals" }
            ]
            coursesModel.find = jest.fn().mockReturnValue(mockCourses)

            const result = coursesController.getAllCourse()

            expect(coursesModel.find).toHaveBeenCalled()
            expect(result).toEqual(mockCourses)
        })

        test("should return empty array when no courses", () => {
            const mockCourses = []
            coursesModel.find = jest.fn().mockReturnValue(mockCourses)

            const result = coursesController.getAllCourse()

            expect(coursesModel.find).toHaveBeenCalled()
            expect(result).toEqual([])
        })
    })
})