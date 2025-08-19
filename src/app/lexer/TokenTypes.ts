export const TokenTypes = {
  CONST: "C",
  IDENTIFIER: "I",
  ASSIGN: "A",
  NUMBER: "N",
}

export type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes]

export const TokenTypeMap: { [key: string]: TokenType } = {
  const: TokenTypes.CONST,
  "=": TokenTypes.ASSIGN,
}
