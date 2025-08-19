import { TokenTypeMap } from "./TokenTypes"
import type { Token } from "./types"

export class Lexer {
  private code: string

  constructor(code: string) {
    this.code = code
  }

  public tokenize(): Token[] {
    const tokens: Token[] = []

    let i = 0
    let value = ""

    while (i < this.code.length) {
      const char = this.code[i++]

      if (char !== " ") {
        value += char
        if (i < this.code.length) {
          continue
        }
      }

      if (value.match("^\\s*$")) {
        // Si solamente tiene espacios
        continue
      }

      const tokenType = TokenTypeMap[value]

      if (tokenType !== undefined) {
        tokens.push({ tokenType: tokenType })
        continue
      }
    }

    console.log(tokens)

    return tokens
  }
}
