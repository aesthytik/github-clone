const Search = require("./Search")
// @ponicode
describe("_handleSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new Search.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._handleSubmit(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._handleSubmit(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._handleSubmit(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._handleSubmit(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._handleSubmit(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._handleSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
