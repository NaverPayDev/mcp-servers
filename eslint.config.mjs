import naverpay from '@naverpay/eslint-config'
import naverpayPlugin from '@naverpay/eslint-plugin'

export default [
    {
        ignores: ['.next/*', 'scripts/*', 'public/script/ntm/*'],
    },
    ...naverpay.configs.react,
    ...naverpay.configs.strict,
    ...naverpay.configs.packageJson,
    {
        plugins: {
            '@naverpay': naverpayPlugin,
        },
    },
]
