import { Lexer } from "./Lexer"
import { TokenTypes } from "./TokenTypes"
import type { Token } from "./types"

describe("tokenive empty values", () => {
  test("emtpy code returns empty array", () => {
    const code = ""

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens.length).toBe(0)
  })

  test("space returns empty array", () => {
    const code = " "

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens.length).toBe(0)
  })

  test("line break returns empty array", () => {
    const code = `
    `

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens.length).toBe(0)
  })
})

describe("tokenize constants", () => {
  test("tokenize const", () => {
    const code = "const"

    const expectedResult: Token[] = [{ tokenType: TokenTypes.CONST }]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize constant and identifier", () => {
    const code = "const a"

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize constant, identifier, assignment and value", () => {
    const code = "const a = 5"

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize constant, identifier, type, assignment and value", () => {
    const code = "const a: number = 5"

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.TYPE },
      { tokenType: TokenTypes.IDENTIFIER, value: "number" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize equals assignment to constant", () => {
    const code = "const a: number = 5 == 6"

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.TYPE },
      { tokenType: TokenTypes.IDENTIFIER, value: "number" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.NUMBER, value: "6" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })
})

describe("tokenize multiple lines", () => {
  test("tokenize two constant assignments", () => {
    const code = `
      const a: number = 5
      const b = 8
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.TYPE },
      { tokenType: TokenTypes.IDENTIFIER, value: "number" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "8" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })
})

describe("tokenize let and var", () => {
  test("tokenize two assignments", () => {
    const code = `
      let a: number = 5
      var b = 8
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.LET },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.TYPE },
      { tokenType: TokenTypes.IDENTIFIER, value: "number" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
      { tokenType: TokenTypes.VAR },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "8" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })
})

describe("tokenize if and else", () => {
  test("tokenize if without braces", () => {
    const code = `
      if (a == b)
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.IF },
      { tokenType: TokenTypes.LEFTPAREN },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.RIGHTPAREN },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize if with braces", () => {
    const code = `
      if (a == b) {

      }
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.IF },
      { tokenType: TokenTypes.LEFTPAREN },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.RIGHTPAREN },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize if with else", () => {
    const code = `
      if (a == b) {

      } else {
        
      }
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.IF },
      { tokenType: TokenTypes.LEFTPAREN },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.RIGHTPAREN },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
      { tokenType: TokenTypes.ELSE },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })

  test("tokenize if with else if and else", () => {
    const code = `
      if (a == b) {

      } else if (a == c) {
        
      } else {
        
      }
    `

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.IF },
      { tokenType: TokenTypes.LEFTPAREN },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.IDENTIFIER, value: "b" },
      { tokenType: TokenTypes.RIGHTPAREN },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
      { tokenType: TokenTypes.ELSE },
      { tokenType: TokenTypes.IF },
      { tokenType: TokenTypes.LEFTPAREN },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.EQUALS },
      { tokenType: TokenTypes.IDENTIFIER, value: "c" },
      { tokenType: TokenTypes.RIGHTPAREN },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
      { tokenType: TokenTypes.ELSE },
      { tokenType: TokenTypes.LEFTBRACE },
      { tokenType: TokenTypes.RIGHTBRACE },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toStrictEqual(expectedResult)
  })
})
