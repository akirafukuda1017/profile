# profile
# Apple風プロフィールWebサイト

Apple のiPhone紹介サイトにインスパイアされた、モダンで美しいプロフィールWebサイトです。

## 🎨 特徴

- **Apple風デザイン**: シンプルで洗練されたデザイン
- **滑らかなアニメーション**: CSS3とJavaScriptを使用した美しいアニメーション効果
- **レスポンシブデザイン**: すべてのデバイスで最適化された表示
- **パララックス効果**: スクロールに連動したパララックス効果
- **インタラクティブ要素**: ホバーエフェクトとクリック効果
- **スムーズスクロール**: 滑らかなページナビゲーション
- **モバイル対応**: タッチデバイスでの最適化されたUI

## 📱 デモ

ブラウザで `index.html` を開くだけで、すぐにサイトを確認できます。

## 🚀 使い方

1. **ファイルをダウンロード**
   ```bash
   git clone https://github.com/yourusername/apple-style-portfolio.git
   cd apple-style-portfolio
   ```

2. **ブラウザで開く**
   ```bash
   open index.html
   ```

3. **ライブサーバーを使用（推奨）**
   ```bash
   # Live Server拡張機能を使用
   # またはPythonのHTTPサーバーを使用
   python -m http.server 8000
   ```

## 🛠️ カスタマイズ方法

### 1. 基本情報の変更

`index.html` の以下の部分を編集：

```html
<h1 class="hero-title">田中太郎</h1>
<p class="hero-subtitle">フロントエンドエンジニア</p>
<p class="hero-description">あなたの紹介文をここに入力</p>
```

### 2. 連絡先情報の更新

```html
<div class="contact-method">
    <span class="contact-icon">📧</span>
    <span>your-email@example.com</span>
</div>
```

### 3. プロジェクト情報の追加

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">あなたのプロジェクト名</div>
    </div>
    <div class="project-info">
        <h3>プロジェクト名</h3>
        <p>プロジェクトの説明</p>
        <div class="project-tech">
            <span>使用技術1</span>
            <span>使用技術2</span>
        </div>
    </div>
</div>
```

### 4. 色とスタイルの変更

`style.css` の以下の変数を変更：

```css
:root {
    --primary-color: #007aff;
    --secondary-color: #667eea;
    --text-color: #1d1d1f;
    --background-color: #fafafa;
}
```

### 5. アニメーションの調整

`script.js` でアニメーション効果を調整：

```javascript
// アニメーション速度の調整
const animationDuration = 1000; // ミリ秒
const animationDelay = 200; // ミリ秒
```

## 📁 ファイル構成

```
プロフィール　Webサイト/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
└── README.md           # プロジェクト説明
```

## 🎯 含まれる機能

### アニメーション効果
- **フェードイン**: 要素が画面に入ったときのアニメーション
- **パララックス**: 背景のスクロール効果
- **ホバーエフェクト**: マウスオーバー時の効果
- **カウントアップ**: 統計数値のアニメーション

### インタラクション
- **スムーズスクロール**: ナビゲーションリンクのスムーズスクロール
- **レスポンシブメニュー**: モバイル対応のハンバーガーメニュー
- **フォーム送信**: 連絡フォームのアニメーション
- **キーボードナビゲーション**: 矢印キーでのナビゲーション

### レスポンシブデザイン
- **デスクトップ**: 1200px以上
- **タブレット**: 768px〜1199px
- **モバイル**: 767px以下

## 🎨 デザイン要素

### カラーパレット
- **プライマリ**: #007aff (Apple Blue)
- **セカンダリ**: #667eea (Gradient Blue)
- **テキスト**: #1d1d1f (Apple Black)
- **背景**: #fafafa (Light Gray)

### フォント
- **メイン**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **サイズ**: 16px (Base)
- **ウェイト**: 300, 400, 500, 600, 700

### アニメーション
- **イージング**: ease-out, ease-in-out
- **期間**: 0.3s〜1s
- **遅延**: 0.2s間隔

## 🔧 カスタマイズのヒント

### 1. 背景画像の追加
```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('your-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### 2. アイコンの変更
```html
<div class="skill-icon">🎨</div> <!-- 好きなアイコンに変更 -->
```

### 3. 新しいセクションの追加
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">新しいセクション</h2>
        <!-- コンテンツを追加 -->
    </div>
</section>
```

## 💡 開発のヒント

### パフォーマンス最適化
- 画像の圧縮
- CSSの最小化
- JavaScriptの最適化
- レンダリングの最適化

### アクセシビリティ
- セマンティックHTML
- キーボードナビゲーション
- スクリーンリーダー対応
- 色のコントラスト比

### SEO対策
- メタタグの最適化
- 構造化データ
- ページ速度の最適化
- モバイル対応

## 🌟 今後の拡張アイデア

- **ダークモード**: テーマ切り替え機能
- **多言語対応**: 国際化サポート
- **コンタクトフォーム**: 実際のメール送信機能
- **ブログセクション**: 記事投稿機能
- **プロジェクトギャラリー**: 画像スライダー
- **アナリティクス**: Google Analytics統合

## 🛡️ ブラウザサポート

- Chrome (推奨)
- Firefox
- Safari
- Edge
- Opera

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

1. プロジェクトをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📞 サポート

質問やサポートが必要な場合は、GitHubのIssuesセクションからお気軽にお問い合わせください。

---

**作成者**: [あなたの名前]  
**最終更新**: 2024年  
**バージョン**: 1.0.0 
