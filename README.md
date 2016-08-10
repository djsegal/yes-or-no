[![Ember Observer Score](http://emberobserver.com/badges/yes-or-no.svg)](http://emberobserver.com/addons/yes-or-no)

### Yes or No 

-------------

Allow simple binary forking inside handlebar files for Ember:

```
{{#if (yes-or-no)}}
  yay!
{{else}}
  boooo
{{/if}}
```

or for a weighted probability skewed towards yes:

```
{{if (yes-or-no 0.75) 'green' 'red'}}
```
