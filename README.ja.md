# beep

Web用のシンプルなビープ音ライブラリ。

## デモ
https://code4fukui.github.io/beep/

## 特徴
- Web Audio APIを使用してビープ音を生成
- ビープ音の周波数、持続時間、音量を制御可能
- 単発のビープ音や連続したビープ音を再生する関数を提供

## 使い方
`beep`ライブラリを使用するには、`beep.js`ファイルから`beep`関数をインポートします。

```javascript
import { beep } from "https://code4fukui.github.io/beep/beep.js";
```

その後、`beep`関数を呼び出してビープ音を再生できます。

```javascript
beep(440, 0.5, 0.5); // 440Hz、0.5秒間、音量0.5でビープ音を再生
```

デモに用意されているボタンを使用して、さまざまなビープ音を再生することもできます。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
