# Convert Penpa+ puzzle to SodukuPad scl puzzle format

[![Build Status](https://img.shields.io/github/actions/workflow/status/marktekfan/penpa-to-scl/publish.yml?branch=main)](https://github.com/marktekfan/penpa-to-scl/actions)
[![NPM](https://img.shields.io/npm/dm/penpa-to-scl)](https://www.npmjs.com/package/penpa-to-scl)
[![NPM](https://img.shields.io/npm/v/penpa-to-scl)](https://www.npmjs.com/package/penpa-to-scl)

The [`@sudokupad/penpa-to-scl` package](https://www.npmjs.com/package/@sudokupad/penpa-to-scl) converts a Penpa+ puzzle URL into a SudokuPad's scl puzzle format object.

## Usage

Run `npm install @sudokupad/penpa-to-scl` to install the converter.

## Example

```js
import { PenpaToSclConverter } from '@sudokupad/penpa-to-scl';

// Convert with default flag values
let penpaConverter = new PenpaToSclConverter();
let sclPuzzle = penpaConverter.convertPenpaToScl(penpaUrl);
```

## Example with converter flags

```js
import { PenpaConverterFlags, PenpaToSclConverter } from '@sudokupad/penpa-to-scl';

// Create converter flags
let converterFlags = new PenpaConverterFlags();
converterFlags.setValue('thickLines', false);
converterFlags.setValue('debug', true);
let flags = converterFlags.getFlagValues();
// Convert with flags
let penpaConverter = new PenpaToSclConverter(flags);
let sclPuzzle = penpaConverter.convertPenpaToScl(penpaUrl);
```

