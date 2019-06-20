# handy
A library for handy helpers.

## helpers:
* ```isFalsy = (value: any, strict?: any) => boolean```  
  * If strict is falsy, returns true if value is falsy else returns false. 
  * If strict is truthy, returns true only if value strictly equals null or undefined, else returns false. 

* ```containsKeys = (obj: any, ...keys string[]) => boolean```
  * Searches through obj for . separated strings, returns true if all properties and sub properties found.

## todo:
* update todo list
* add more functions
* add unit tests ( leaning towards mocha and chai)