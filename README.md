# eslint-config-personal
Just my personal ESLint config.

## Is it up to date?
The rules were last revised for versions:
  * `eslint` 3.3.1
  * `eslint-plugin-react` 6.1.2
  * `eslint-plugin-react-native` 2.0.0

## Usage
1. Save this config, as well as the ESLint package:
```
npm i --save-dev eslint @papermana/eslint-config-personal
```

2. Save any plugins you might need (optional):
```
npm i --save-dev eslint-plugin-react eslint-plugin-react-native
```

3. In the project's ESLint configuration add the imported config(s) to the `extend` property:
```
"extends": "@papermana/eslint-config-personal"
```
```
"extends": [
    "@papermana/eslint-config-personal",
    "@papermana/eslint-config-personal/react"
  ],
```
