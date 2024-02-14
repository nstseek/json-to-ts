#!/usr/bin/env node

if (!process.argv[2]) {
  throw new Error("You need to provide a file path to edit");
}

const synchronizedPrettier = require("@prettier/sync");
const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(process.argv[2], { encoding: "utf-8" });

const defaultPrecedingRegex = "(?<=(: | \\[[ \\n]*|,[\\n ]*))";

const defaultSucceedingRegex = "(?=(,|\\]|;|[ \\n]+\\}))";

const arrayPrecedingRegex = "(?<=: )";

const arraySucceedingRegex = "(?=[;,])";

const buildRegex = (regexStr) =>
  new RegExp(defaultPrecedingRegex + regexStr + defaultSucceedingRegex, "g");

const buildArrayRegex = (arrRegexStr) =>
  new RegExp(arrayPrecedingRegex + arrRegexStr + arraySucceedingRegex, "g");

const regexes = {
  string: {
    regex: buildRegex("(\"[^\"]*\"|'[^']*')"),
    replace: "string",
  },
  number: {
    regex: buildRegex("-?\\d+?(.\\d+?)?"),
    replace: "number",
  },
  boolean: {
    regex: buildRegex("(true|false)"),
    replace: "boolean",
  },
  stringArray: {
    regex: buildArrayRegex("\\[[\\n ]*?((string)[,\\n ]*)+\\]"),
    replace: "string[]",
  },
  numberArray: {
    regex: buildArrayRegex("\\[[\\n ]*?((number)[,\\n ]*)+\\]"),
    replace: "number[]",
  },
  booleanArray: {
    regex: buildArrayRegex("\\[[\\n ]*?((boolean)[,\\n ]*)+\\]"),
    replace: "boolean[]",
  },
  anyArray: {
    regex: buildArrayRegex("\\[[\\n ]*?((string|number|boolean)[,\\n ]*)+\\]"),
    replace: "any[]",
  },
};

const prettierOptions = {
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  quoteProps: "consistent",
  trailingComma: "all",
};

let newFile = `export type ConvertedType = ${file}`;

const formatFile = (file) => {
  return synchronizedPrettier.format(file, {
    ...prettierOptions,
    parser: "babel-ts",
  });
};

newFile = formatFile(newFile);

Object.values(regexes).forEach((regexObj) => {
  newFile = newFile.replace(regexObj.regex, regexObj.replace);
  newFile = formatFile(newFile);
});

const finalFile = "/* Generated type */\n\n" + newFile;

console.log(finalFile);
