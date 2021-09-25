# HENI Full Stack Challenge

This project receives data from an api and renders it in a grid of cards.

## Installation

```bash
yarn install
```

## Usage

```bash
yarn start
```

## Testing

```bash
yarn test
```

## Contributing

I struggled to get the ElasticSearch to filter empty arrays of images. This means now that the filtering happens on the client, so sometimes the pagination shows fewer than 10 results.

I tired the _exists_:images query but it still returned empty arrays, so I was out of ideas since it is limited to string queries in the URI, and not any JSON body queries.
