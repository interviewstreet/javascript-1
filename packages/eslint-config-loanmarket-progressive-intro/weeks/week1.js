module.exports = {
  "function-paren-newline": 0,
  "accessor-pairs": "off",
  "complexity": [
   "off",
   11
  ],
  "consistent-return": 0,
  "curly": 0,
  "no-eq-null": "off",
  "no-div-regex": "off",
  "no-native-reassign": "off",
  "no-implicit-globals": "off",
  "no-invalid-this": "off",
   "require-await": "off",
  "no-warning-comments": [
   "off",
   {
    "terms": [
     "todo",
     "fixme",
     "xxx"
    ],
    "location": "start"
   }
  ],
  "no-console": 0,
  "arrow-body-style": 0,
  "arrow-parens": [
   "error",
   "as-needed",
   {
    "requireForBlockBody": true
   }
  ],
  "arrow-spacing": [
   "error",
   {
    "before": true,
    "after": true
   }
  ],
  "generator-star-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "no-confusing-arrow": [
   "error",
   {
    "allowParens": true
   }
  ],
  "no-useless-computed-key": "error",
  "no-useless-rename": [
   "error",
   {
    "ignoreDestructuring": false,
    "ignoreImport": false,
    "ignoreExport": false
   }
  ],
  "no-var": "error",
  "object-shorthand": [
   "error",
   "always",
   {
    "ignoreConstructors": false,
    "avoidQuotes": true
   }
  ],
  "prefer-arrow-callback": [
   "error",
   {
    "allowNamedFunctions": false,
    "allowUnboundThis": true
   }
  ],
  "prefer-const": [
   "error",
   {
    "destructuring": "any",
    "ignoreReadBeforeAssign": true
   }
  ],
  "prefer-numeric-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "rest-spread-spacing": [
   "error",
   "never"
  ],
  "sort-imports": [
   "off",
   {
    "ignoreCase": false,
    "ignoreMemberSort": false,
    "memberSyntaxSortOrder": [
     "none",
     "all",
     "multiple",
     "single"
    ]
   }
  ],
  "template-curly-spacing": "error",
  "yield-star-spacing": [
   "error",
   "after"
  ],
  "space-before-function-paren": [
   "error",
   {
    "anonymous": "always",
    "named": "never",
    "asyncArrow": "always"
   }
  ],
  "space-in-parens": [
   "error",
   "never"
  ],
  "space-infix-ops": "error",
  "space-unary-ops": [
   "error",
   {
    "words": true,
    "nonwords": false,
    "overrides": {}
   }
  ],
  "spaced-comment": [
   "error",
   "always",
   {
    "line": {
     "exceptions": [
      "-",
      "+"
     ],
     "markers": [
      "=",
      "!"
     ]
    },
    "block": {
     "exceptions": [
      "-",
      "+"
     ],
     "markers": [
      "=",
      "!"
     ],
     "balanced": true
    }
   }
  ],
  "switch-colon-spacing": [
   "error",
   {
    "after": true,
    "before": false
   }
  ],
  "template-tag-spacing": [
   "error",
   "never"
  ],
  "unicode-bom": [
   "error",
   "never"
  ],
  "wrap-regex": "off",
  "new-parens": "error",
  "newline-per-chained-call": [
   "error",
   {
    "ignoreChainWithDepth": 4
   }
  ],
  "indent": [
   "error",
   2
  ],
  "jsx-quotes": [
   "off",
   "prefer-double"
  ],
  "key-spacing": [
   "error",
   {
    "beforeColon": false,
    "afterColon": true
   }
  ],
  "keyword-spacing": [
   "error",
   {
    "before": true,
    "after": true,
    "overrides": {
     "return": {
      "after": true
     },
     "throw": {
      "after": true
     },
     "case": {
      "after": true
     }
    }
   }
  ],
  "linebreak-style": [
   "error",
   "unix"
  ],
  "lines-around-comment": "off",
  "array-bracket-newline": [
   "off",
   {
    "multiline": true,
    "minItems": 3
   }
  ],
  "array-element-newline": [
   "off",
   {
    "multiline": true,
    "minItems": 3
   }
  ],
  "array-bracket-spacing": [
   "error",
   "never"
  ],
  "block-spacing": [
   "error",
   "always"
  ],
  "no-delete-var": "error",
  "no-undef": "error",
  "strict": "error",
  "comma-dangle": [
   "error",
   {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "never"
   }
  ],
  "comma-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "comma-style": [
   "error",
   "last"
  ],
  "semi": [
   "error",
   "always"
  ],
  "semi-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "semi-style": [
   "error",
   "last"
  ],
  "no-constant-condition": "warn",
  "getter-return": [
   "error",
   {
    "allowImplicit": true
   }
  ],
  "no-await-in-loop": "error",
  "no-with": "error",
  "no-useless-call": "off",
  "no-return-await": "error",
  "no-self-compare": "error",

  "no-new-wrappers": "error",
  "no-new-func": "error",
  "no-extend-native": "error",
  "class-methods-use-this": [
   "error",
   {
    "exceptMethods": [
     "getChildContext",
     "componentDidMount",
     "componentWillMount",
     "componentWillUpdate",
     "componentWillReceiveProps"
    ]
   }
  ],
  "eqeqeq": [
   "error",
   "always",
   {
    "null": "ignore"
   }
  ],
  "array-callback-return": "error",
  "no-alert": "warn",
  "no-empty-pattern": "error",
  "no-floating-decimal": "error",
  "no-iterator": "error",
  "no-multi-spaces": [
   "error",
   {
    "ignoreEOLComments": false
   }
  ],
  "no-proto": "error",
  "no-void": "error",
  "wrap-iife": [
    "error",
    "outside",
    {
    "functionPrototypeMethods": false
    }
  ],
  "no-compare-neg-zero": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-parens": [
   "off",
   "all",
   {
    "conditionalAssign": true,
    "nestedBinaryExpressions": false,
    "returnAssign": false,
    "ignoreJSX": "all",
    "enforceForArrowConditionals": false
   }
  ],
  "no-extra-semi": "error",
  "no-regex-spaces": "error",
  "no-unsafe-negation": "error",
  "dot-location": [
   "error",
   "property"
  ],
  "dot-notation": [
   "error",
   {
    "allowKeywords": true
   }
  ],
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-implicit-coercion": [
   "off",
   {
    "boolean": false,
    "number": true,
    "string": true,
    "allow": []
   }
  ],
  "brace-style": [
   "error",
   "1tbs",
   {
    "allowSingleLine": true
   }
  ],
  "capitalized-comments": [
   "off",
   "never",
   {
    "line": {
     "ignorePattern": ".*",
     "ignoreInlineComments": true,
     "ignoreConsecutiveComments": true
    },
    "block": {
     "ignorePattern": ".*",
     "ignoreInlineComments": true,
     "ignoreConsecutiveComments": true
    }
   }
  ],

  "computed-property-spacing": [
   "error",
   "never"
  ],
  "eol-last": [
   "error",
   "always"
  ],
  "func-call-spacing": [
   "error",
   "never"
  ],
  "no-lonely-if": "error",
  "no-multiple-empty-lines": [
   "error",
   {
    "max": 2,
    "maxEOF": 1
   }
  ],
  "no-trailing-spaces": [
   "error",
   {
    "skipBlankLines": false,
    "ignoreComments": false
   }
  ],
  "no-unneeded-ternary": [
   "error",
   {
    "defaultAssignment": false
   }
  ],
  "no-whitespace-before-property": "error",
  "nonblock-statement-body-position": "off",
  "object-curly-spacing": [
   "error",
   "always"
  ],
  "object-curly-newline": 0,
  "object-property-newline": [
   "error",
   {
    "allowMultiplePropertiesPerLine": true
   }
  ],
  "one-var-declaration-per-line": [
   "error",
   "always"
  ],
  "operator-assignment": [
   "error",
   "always"
  ],
  "operator-linebreak": "off",
  "padded-blocks": [
   "warn",
   "never"
  ],
  "padding-line-between-statements": "off",
  "quote-props": [
   "error",
   "as-needed",
   {
    "keywords": false,
    "unnecessary": true,
    "numbers": false
   }
  ],
  "quotes": [
   "warn",
   "single",
   {
    "avoidEscape": true,
    "allowTemplateLiterals": true
   }
  ]
}
