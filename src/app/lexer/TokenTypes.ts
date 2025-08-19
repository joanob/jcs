export const TokenTypes = {
  CONST: "C",
  IDENTIFIER: "I",
  ASSIGN: "A",
  EQUALS: "EQ",
  TYPE: "T",
  NUMBER: "N",
  EOF: "EOF",
}

export type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes]

export const TokenTypeMap: { [key: string]: TokenType } = {
  const: TokenTypes.CONST,
  "=": TokenTypes.ASSIGN,
  "==": TokenTypes.EQUALS,
  ":": TokenTypes.TYPE,
}
