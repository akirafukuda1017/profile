# プロフィール Webサイト

福田旭さんの個人プロフィールサイトです。静的な HTML/CSS/JS で構成されています。

## 構成

- `index.html` メインページ
- `style.css` スタイルシート
- `script.js` インタラクション用（必要に応じて）
- 画像類: `profile.jpg`, `project*.jpg`, `photo*.jpg` など

## ローカルでの表示方法

1. このフォルダを開く
2. `index.html` をブラウザで開く（ダブルクリックでOK）

## 編集ガイド

### ヒーロー（トップ）
- テキスト: `index.html` の `#home .hero-description`
- プロフィール画像: `profile.jpg` を差し替え

### プロフィール
- 本文: `#about .about-description`

### スキル
- カードの追加/削除: `#skills .skills-grid` 内の `.skill-card`

### プロジェクト
- 各カードは `#projects .projects-grid` の `.project-card`
- ステータスバッジ:
  - 進行中: `<span class="badge badge-inprogress">進行中</span>`
  - 中止: `<span class="badge badge-cancelled">中止</span>`
  - エンド: `<span class="badge badge-ended">エンド</span>`
- タグ(使用技術): `.project-tech span` を編集
- 画像差し替え: 各カードの `<img src="...">` のファイルを同名で置き換え
  - 例: グループ加入のECカード → `project4-ec-group.jpg`

### 最近の写真（ギャラリー）
- セクション: `#gallery`
- 画像: `photo1.jpg` ～ `photo4.jpg` を同じフォルダに配置
- 縦横比を変えたい場合: `style.css` の `.frame img { aspect-ratio: 4/3; }` を編集
- 額縁の光沢アニメーション: `.frame.luxe`（ホバーで発動）

### 連絡先
- 表示情報: `#contact .contact-methods`
- 配置・中央寄せ: `style.css` の `.contact-content`, `.contact-info`, `.contact-method`

## デザイン・スタイルのポイント

- 背景切り替え: ギャラリーはグレー (`#f5f5f7`)、連絡先は白 (`#ffffff`)
- レスポンシブ: `style.css` のメディアクエリ（768px/1024px）で文字や列数を拡大
- 額縁デザイン: `.frame.luxe`（金縁＋マット＋光沢アニメーション）

## 画像の追加・差し替え

1. 同フォルダに新しい画像ファイルを置く
2. 対応する `<img src="...">` のファイル名を変更（もしくは同名差し替え）

推奨サイズの目安:
- ヒーロー画像(プロフィール): 正方形〜 800px 程度
- プロジェクト/ギャラリー: 横長 1200×900px 程度（4:3）

## 公開（デプロイ）

GitHub Pages や Netlify などの静的ホスティングに `index.html` をアップロードするだけで公開できます。

### GitHub Pages（簡易）
1. リポジトリを作成してこのフォルダをコミット/プッシュ
2. GitHub の Settings → Pages → Branch を `main` / `/ (root)` に設定
3. 数分で公開URLが発行されます

---

質問や更新依頼があれば、この README の「編集ガイド」該当箇所を参照しつつ変更してください。


