module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}


// from course
// module.exports = {
//  root: true,
//  extends: ['standsard'],
//  globals: {
//    'IS_DEVELOPMENT': 'readonly'
//  },
//  parserOptins: {
//    ecmasVersion: 2020
//  }
// }
