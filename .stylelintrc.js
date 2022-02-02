module.exports = {
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-recess-order', 'stylelint-config-standard'],
      plugins: 'stylelint-scss',
      rules: {
        'string-quotes': 'single',
        'alpha-value-notation': 'number',
        'at-rule-empty-line-before': null,
        'at-rule-name-case': 'lower',
        'at-rule-no-unknown': null,
        'at-rule-semicolon-newline-after': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'block-opening-brace-newline-after': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'block-closing-brace-newline-after': [
          'always-multi-line',
          {
            severity: 'warning',
          },
        ],
        'block-closing-brace-newline-before': [
          'always-multi-line',
          {
            severity: 'warning',
          },
        ],
        'block-no-empty': true,
        'comment-no-empty': [
          true,
          {
            severity: 'warning',
          },
        ],
        'comment-whitespace-inside': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'color-hex-case': [
          'lower',
          {
            severity: 'warning',
          },
        ],
        'color-hex-length': [
          'short',
          {
            severity: 'warning',
          },
        ],
        'color-named': 'never',
        'declaration-colon-newline-after': null,
        'declaration-block-no-duplicate-custom-properties': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': [
          1,
          {
            severity: 'warning',
          },
        ],
        'declaration-empty-line-before': null,
        'font-family-no-missing-generic-family-keyword': null,
        'function-calc-no-unspaced-operator': [
          true,
          {
            severity: 'warning',
          },
        ],
        indentation: [
          2,
          {
            severity: 'warning',
          },
        ],
        'length-zero-no-unit': [
          true,
          {
            severity: 'warning',
          },
        ],
        'max-empty-lines': [
          1,
          {
            severity: 'warning',
          },
        ],
        'max-nesting-depth': [
          6,
          {
            severity: 'warning',
          },
        ],
        'media-feature-name-no-unknown': true,
        'media-feature-range-operator-space-after': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'media-feature-range-operator-space-before': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'no-descending-specificity': null,
        'no-duplicate-at-import-rules': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'number-leading-zero': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'number-no-trailing-zeros': true,
        'no-unknown-animations': true,
        'no-missing-end-of-source-newline': [
          true,
          {
            severity: 'warning',
          },
        ],
        'property-no-unknown': true,
        'rule-empty-line-before': [
          'always-multi-line',
          {
            except: ['after-single-line-comment', 'first-nested'],
            severity: 'warning',
          },
        ],
        'selector-attribute-quotes': [
          'always',
          {
            severity: 'warning',
          },
        ],
        'selector-max-empty-lines': [
          0,
          {
            severity: 'warning',
          },
        ],
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-pseudo-element-colon-notation': null,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': [
          true,
          {
            severity: 'warning',
          },
        ],
        'string-no-newline': [
          true,
          {
            severity: 'warning',
          },
        ],
        'time-min-milliseconds': [
          100,
          {
            severity: 'warning',
          },
        ],
        'unit-no-unknown': true,
        'value-list-comma-space-before': 'never',

        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': '^.[a-z]+(-[a-z0-9])*',
        'scss/at-rule-no-unknown': true,
        'scss/comment-no-empty': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-first-in-block': true,
        'scss/dollar-variable-pattern': '^.[a-z]+(-[a-z0-9])*',
        'scss/double-slash-comment-empty-line-before': 'always',
        'scss/no-duplicate-mixins': true,
        'scss/operator-no-unspaced': true,
        'scss/percent-placeholder-pattern': '^.[a-z]+(-[a-z0-9])*',
      },
    },
  ],
};
