# beep

「beep」は、Web Audio APIを使用してビープ音を生成するJavaScriptライブラリです。周波数、持続時間、音量を指定してビープ音を再生できます。

## デモ
https://code4fukui.github.io/beep/

## 機能
- 周波数、持続時間、音量を指定してビープ音を再生
- 単一のビープ音の再生
- 複数のビープ音の連続再生

## 使い方
`beep.js`をインポートして`beep()`関数を呼び出すことで、ビープ音を再生できます。

```javascript
import { beep } from "https://code4fukui.github.io/beep/beep.js";

// 440Hzの音を0.5秒間、50%の音量で再生
beep(440, 0.5, 0.5);
```

## ライセンス
このプロジェクトはMITライセンスの下で公開されています。