import lincy from '@lincy/eslint-config'

const config = lincy(
    {
        stylistic: {
            indent: 4,
            quotes: 'single',
        },
        formatters: true,
        overrides: {
            stylistic: {
                'antfu/consistent-list-newline': 'off',
            },
        },
    },
    {
        files: ['src/**/*.ts'],
        rules: {
            'perfectionist/sort-objects': 'error',
        },
    },
)

export default config
