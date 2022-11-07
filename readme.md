# afinn-165

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[AFINN 165][afinn165].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`afinn165`](#afinn165)
*   [Musings](#musings)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contributing](#contributing)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a map of words rated for [valence][valence-wiki]
(“goodness” vs “badness”).

## When should I use this?

This package can be used for sentiment analysis of words.
You can use [`emoji-emotion`][emoji-emotion] for emoji.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install afinn-165
```

In Deno with [`esm.sh`][esmsh]:

```js
import {afinn165} from 'https://esm.sh/afinn-165@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {afinn165} from 'https://esm.sh/afinn-165@2?bundle'
</script>
```

## Use

```js
import {afinn165} from 'afinn-165'

afinn165.xoxo //=> 3
afinn165.bankruptcy //=> -3
```

## API

This package exports the identifier `afinn165`.
There is no default export.

### `afinn165`

Map of words to valence (`Record<string, number>`).

> 👉 **Note**: be careful when accessing unknown properties on the
> `afinn165` object, words such as “constructor” or “toString” might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

## Musings

AFINN 165 contains 3382 entries.
905 entries were added and two were changed.
Compared to [AFINN 111][afinn111], the following changed:

*   many new words
*   `damn` is now rated as `-2` (was `-4`)
*   `exasperated`, `futile`, `irresponsible` are now `-2` (were 2)
*   new entries with spaces: `damn cute`, `damn good`, `kind of`,
    `fucking awesome`, `fucking beautiful`, `fucking cute`,
    `fucking fantastic`, `fucking good`, `fucking great`, `fucking hot`,
    `fucking love`, `fucking loves`, `fucking perfect`
*   new entries with hyphens: `environment-friendly`, `game-changing`,
    `ill-fated`, `loving-kindness`, `non-approved`, `post-traumatic`,
    `self-abuse`, `self-contradictory`, `side-effect`, `side-effects`,
    `violence-related`, `well-being`, `well-championed`, `well-developed`,
    `well-established`, `well-focused`, `well-groomed`, `well-proportioned`

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`afinn-96`](https://github.com/words/afinn-96)
    — AFINN list from 2009 with 1468 entries
*   [`afinn-111`](https://github.com/words/afinn-111)
    — AFINN list from 2011 with 2477 entries
*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — like AFINN but for emoji
*   [`polarity`](https://github.com/words/polarity)
    — detect the polarity of text, based on `afinn-169` and `emoji-emotion`

## Contributing

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/afinn-165/workflows/main/badge.svg

[build]: https://github.com/words/afinn-165/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/afinn-165.svg

[coverage]: https://codecov.io/github/words/afinn-165

[downloads-badge]: https://img.shields.io/npm/dm/afinn-165.svg

[downloads]: https://www.npmjs.com/package/afinn-165

[size-badge]: https://img.shields.io/bundlephobia/minzip/afinn-165.svg

[size]: https://bundlephobia.com/result?p=afinn-165

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[afinn165]: https://stackoverflow.com/questions/32750682/32845659#32845659

[afinn111]: https://github.com/words/afinn-111

[emoji-emotion]: https://github.com/words/emoji-emotion

[valence-wiki]: https://en.wikipedia.org/wiki/Valence_\(psychology\)
