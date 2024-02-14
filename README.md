# json-to-ts

This is a simple Nodejs script that generates TS types based on a JSON file

## Usage Example

`node index.js {json_file_path} > {output_file_path}`

This will produce a file with the name you provided containing the generated TS types

A full usage (you can run using the example.json file provided in the repo) would look like this

`node index.js ./example.json > type.ts`

This would produce a file called `type.ts` with generated TS types based on the `example.json` file provided

## NPM binary

This can also be used as a NPM binary under the `json-to-ts` name

The usage would look like this

`json-to-ts {json_file_path} > {output_file_path}`

or

`json-to-ts ./example.json > type.ts`
