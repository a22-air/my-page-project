# Sawada Airi Portfolio

沢田愛利のポートフォリオサイトです。  
iOSアプリ開発とWeb制作のスキルを紹介するために、Next.jsを使って構築しています。

## 🔧 使用技術

- **Next.js** – Reactベースのフレームワークで静的サイトとして構築
- **TypeScript** – 型安全な開発を実現
- **Tailwind CSS** – ユーティリティファーストなCSSフレームワーク
- **microCMS** – ヘッドレスCMSでProjectやSkillsのデータを管理
- **Vercel** – デプロイ・ホスティングに使用

## 💡 主な機能

- 自己紹介・スキル・経歴の紹介ページ
- ProjectページではmicroCMSから取得したデータをタブで切り替え表示
- SkillsページもCMS連携でスキルを柔軟に管理可能
- コンタクトフォームにはバリデーションとreCAPTCHAを実装し、セキュリティにも配慮

## 工夫した点

- **microCMSとの連携**  
  SkillsページやProjectsページのデータはmicroCMSで管理しています。特に、配列形式のデータ登録には苦戦しましたが、スキーマ設計と構造を見直すことで解決しました。

- **ページ全体のデザイン**  
  デザインに自信がなかったため、参考になるWebサイトを多数調査し、自分なりにわかりやすく洗練されたレイアウトを心がけました。

- **Projectページのタブ切り替えアニメーション**  
  タブ切り替え時にスムーズなアニメーションを追加し、ユーザーにとって心地よい操作感を意識しました。

- **フォームのバリデーションとreCAPTCHAの導入**  
  コンタクトページでは、ユーザーからの入力内容のチェックとreCAPTCHAによるスパム対策を実装しました。

## セットアップ

```bash
# パッケージインストール
npm install

# 開発サーバー起動
npm run dev

環境変数
以下の .env.local をルートディレクトリに作成し、必要な環境変数を設定してください。
MICROCMS_API_KEY=your_key
MICROCMS_SERVICE_DOMAIN=your_domain
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_ID=your_form_id
```
