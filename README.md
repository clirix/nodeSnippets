#nodejsSnippets

##replace.js

Ersetzt Strings in Dateien mittels RegEx Replace

Start mittels
```html
node replace dateipfad findmich ersetzmich
```
Mehrere Dateipfade können als Stream übergeben werden.
Dabei muß statt des Dateipfades 'pipe' als argument übergeben werden
```html
find -iname "*.php" | node replace pipe var_dump //var_dump
```
