# code4okinawa-org-nuxt

https://code4okinawa.org のWebページ。Nuxt.jsで静的サイトとして生成する。

## 開発環境構築
VSCode devcontainer 構築する方法とLocalに入ったNode.jsで構築する方法がある。

### VSCode devcontainerで構築する(推奨)
リポジトリをクローンしたディレクトリでVS Codeを開くと `Reopen in Container` のポップアップが出るのでそれを選択する。

起動後、ターミナルを開き以下のコマンドでNuxt.jsを起動する。

```
$ yarn dev
```

### ローカル環境で構築する
ローカルにNode.js, yarnをインストールし、以下のコマンドを実行

```bash
$ yarn install
$ yarn dev
```

## 技術スタック
- Node 14.x
- Nuxt.js 2.x
- TypeScript@~4.2
- Netlify(デプロイ環境)
