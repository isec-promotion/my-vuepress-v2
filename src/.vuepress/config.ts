import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';

import { docsearchPlugin } from '@vuepress/plugin-docsearch';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: '/',
  lang: 'ja-JP',

  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'オンライン取説',
      description: 'A docs demo for vuepress-theme-hope',
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    registerComponentsPlugin({
      // options
      componentsDir: path.resolve(__dirname, './components'),
    }),
    docsearchPlugin({
      appId: 'QDFAGFTOVQ',
      apiKey: 'daab5033f238b100d0af3bd40572f9e3',
      indexName: 'sample001',
      searchParameters: {
        // facetFilters: ["tags:v2"],
      },
      locales: {
        '/': {
          placeholder: 'ドキュメント検索',
          translations: {
            button: {
              buttonText: 'ドキュメント検索',
              buttonAriaLabel: 'ドキュメント検索',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'リセット',
                resetButtonAriaLabel: 'リセット',
                cancelButtonText: 'キャンセル',
                cancelButtonAriaLabel: 'キャンセル',
              },
              startScreen: {
                recentSearchesTitle: '検索履歴',
                noRecentSearchesText: '検索履歴がありません',
                saveRecentSearchButtonTitle: '検索履歴を保存',
                removeRecentSearchButtonTitle: '検索履歴から削除',
                favoriteSearchesTitle: 'お気に入り',
                removeFavoriteSearchButtonTitle: 'お気に入りから削除',
              },
              errorScreen: {
                titleText: '結果を取得できませんでした',
                helpText: 'インターネット接続を確認してください',
              },
              footer: {
                selectText: '選択',
                navigateText: '切替',
                closeText: '閉じる',
                searchByText: 'Powered by',
              },
              noResultsScreen: {
                noResultsText: '関連する結果が見つかりませんでした',
                suggestedQueryText: '提案された検索キーワード',
                reportMissingResultsText:
                  'この検索キーワードには結果が必要だと思いますか?',
                reportMissingResultsLinkText: 'フィードバック',
              },
            },
          },
        },
      },
    }),
  ],
});
