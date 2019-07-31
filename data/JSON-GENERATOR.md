```
[
  {
    'repeat(20, 30)': {
      id: '{{objectId()}}',
      title: '{{lorem(5, "words")}}',
      poster: 'http://placehold.it/32x32',
      year: '{{integer(1930, 2019)}}',
      cast: [
        {
          'repeat(3)': {
            id: '{{index()}}',
            name: '{{firstName()}} {{surname()}}'
          }
        }
      ],
      description: '{{lorem(1, "paragraphs")}}',
     }
  }
]
```

