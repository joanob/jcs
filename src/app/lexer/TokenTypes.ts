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
  IF: "IF",
  ELSE: "EL",
  LEFTPAREN: "(",
  RIGHTPAREN: ")",
  LEFTBRACE: "{",
  RIGHTBRACE: "}",
  LEFTBRACKET: "[",
  RIGHTBRACKET: "]",
}

export type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes]

export const TokenTypeMap: { [key: string]: TokenType } = {
  const: TokenTypes.CONST,
  let: TokenTypes.LET,
  var: TokenTypes.VAR,
  if: TokenTypes.IF,
  else: TokenTypes.ELSE,
  "=": TokenTypes.ASSIGN,
  "==": TokenTypes.EQUALS,
  ":": TokenTypes.TYPE,
  "(": TokenTypes.LEFTPAREN,
  ")": TokenTypes.RIGHTPAREN,
  "{": TokenTypes.LEFTBRACE,
  "}": TokenTypes.RIGHTBRACE,
  "[": TokenTypes.LEFTBRACKET,
  "]": TokenTypes.RIGHTBRACKET,
}
