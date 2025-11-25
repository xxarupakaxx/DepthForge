import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  eslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Google TypeScript Style Guide ベースのルール
      
      // type を優先（interface は禁止）
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      
      // 命名規則
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      
      // any の使用を禁止
      '@typescript-eslint/no-explicit-any': 'error',
      
      // 未使用変数を禁止
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      
      // 型推論を優先
      '@typescript-eslint/no-inferrable-types': 'error',
      
      // require を禁止（import を使用）
      '@typescript-eslint/no-require-imports': 'error',
      
      // 配列の型は T[] を優先
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      
      // === を強制
      eqeqeq: ['error', 'always'],
      
      // セミコロンを必須
      semi: ['error', 'always'],
      
      // シングルクォートを優先
      quotes: ['error', 'single', { avoidEscape: true }],
      
      // インデントは2スペース
      indent: ['error', 2, { SwitchCase: 1 }],
      
      // 末尾カンマを推奨
      'comma-dangle': ['error', 'always-multiline'],
      
      // console.log を警告（本番環境では削除すべき）
      'no-console': 'warn',
      
      // var を禁止（const/let を使用）
      'no-var': 'error',
      
      // const を優先
      'prefer-const': 'error',
      
      // アロー関数を優先
      'prefer-arrow-callback': 'error',
      
      // テンプレートリテラルを優先
      'prefer-template': 'error',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'src/data/tags/', 'public/'],
  },
];
