import { TokenTypeMap, TokenTypes } from "./TokenTypes"
import type { Token } from "./types"

export class Lexer {
  private code: string

  private possibleIdentifierStartCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$"

  private numberChars = "1234567890"

  private possibleIdentifierCharacters =
    this.possibleIdentifierStartCharacters + this.numberChars

  constructor(code: string) {
    this.code = code
  }

  public tokenize(): Token[] {
    const tokens: Token[] = []

    let i = 0
    let value = ""

    while (i < this.code.length) {
      let char = this.code[i++]

      if (this.isIdentifierStart(char)) {
        value += char
        while (i < this.code.length) {
          char = this.code[i++]
          if (!this.isIdentifierChar(char)) {
            break
          }
          value += char
        }
      } else if (this.isNumber(char)) {
        value += char
        while (i < this.code.length) {
          char = this.code[i++]
          value += char
          if (!this.isNumber(char)) {
            break
          }
        }
        tokens.push({ tokenType: TokenTypes.NUMBER, value })
        value = ""
        continue
      }

      if (value.length > 0) {
        const tokenType = TokenTypeMap[value]

        if (tokenType !== undefined) {
          tokens.push({ tokenType: tokenType })
        } else {
          tokens.push({ tokenType: TokenTypes.IDENTIFIER, value })
        }
        value = ""
      }

      if (char === ":") {
        tokens.push({ tokenType: TokenTypes.TYPE })
        value = ""
        continue
      }

      if (char === "=") {
        value += char
        char = this.code[i++]
        if (char === "=") {
          value += char
        }
      }

      const tokenType = TokenTypeMap[value]

      if (tokenType !== undefined) {
        tokens.push({ tokenType: tokenType })
      } else {
        // Error
      }

      value = ""
    }

    return tokens
  }

  isIdentifierStart(char: string): boolean {
    return this.possibleIdentifierStartCharacters.indexOf(char) >= 0
  }

  isNumber(char: string): boolean {
    return this.numberChars.indexOf(char) >= 0
  }

  isIdentifierChar(char: string): boolean {
    return this.possibleIdentifierCharacters.indexOf(char) >= 0
  }
}
