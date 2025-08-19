import type { TokenType } from "./TokenTypes"

export interface Token {
  tokenType: TokenType
  value?: string
}
