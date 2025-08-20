export const TokenTypes = {
  CONST: "C",
  LET: "L",
  VAR: "V",
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
  let: TokenTypes.LET,
  var: TokenTypes.VAR,
  "=": TokenTypes.ASSIGN,
  "==": TokenTypes.EQUALS,
  ":": TokenTypes.TYPE,
}
