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

  test.only("tokenize constant number without type", () => {
    const code = "const a = 5"

    const expectedResult: Token[] = [
      { tokenType: TokenTypes.CONST },
      { tokenType: TokenTypes.IDENTIFIER, value: "a" },
      { tokenType: TokenTypes.ASSIGN },
      { tokenType: TokenTypes.NUMBER, value: "5" },
    ]

    const lexer = new Lexer(code)

    const tokens = lexer.tokenize()

    expect(tokens).toBe(expectedResult)
  })
})
