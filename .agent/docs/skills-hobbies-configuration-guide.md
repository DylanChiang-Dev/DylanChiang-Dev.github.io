# Skills & Hobbies 區塊配置指南

## 1. 問題背景

在 Hugo Blox 主題中，Experience 頁面的 Skills & Hobbies 區塊可能會遇到以下顯示問題：

- **原始問題**：使用 `features` 區塊類型配合 `username` 參數無法正確讀取作者配置文件中的技能數據
- **樣式問題**：自定義 CSS 樣式可能與主題不兼容，導致顯示效果不佳
- **維護困難**：過度自定義的配置增加了維護成本和兼容性風險

## 2. 解決方案

### 2.1 推薦方案：使用 Markdown 區塊

將 `/content/experience.md` 中的 Skills & Hobbies 區塊配置修改為：

```yaml
- block: markdown
  id: skills
  content:
    title: Skills & Hobbies
    subtitle: 以下是我在學術研究和技術應用發展方面的核心技能，以及持續學習的專業領域。
    text: |
      ## 🐍 Python
      熟練掌握 Python 程式設計，包含數據分析、機器學習和知識圖譜建構
      
      ## 📊 R
      精通 R 語言統計分析，擅長數據視覺化和統計計算建模
      
      ## 📈 Statistics
      具備紮實的統計學基礎，熟悉各種統計方法和假設檢定
      
      ## 🗄️ SQL
      熟練使用 SQL 進行資料庫查詢、數據整理和分析
      
      ## ✍️ 學術論文寫作
      具備學術寫作能力，熟悉論文撰寫和學術規範
  design:
    columns: '1'
```

### 2.2 替代方案：修正 Features 區塊

如果堅持使用 `features` 區塊，需要移除 `username` 參數並直接定義 items：

```yaml
- block: features
  id: skills
  content:
    title: Skills & Hobbies
    subtitle: 以下是我在學術研究和技術應用發展方面的核心技能
    items:
      - name: Python
        description: 熟練掌握 Python 程式設計，包含數據分析、機器學習和知識圖譜建構
        icon: python
        icon_pack: fab
      - name: R
        description: 精通 R 語言統計分析，擅長數據視覺化和統計計算建模
        icon: r-project
        icon_pack: fab
      - name: Statistics
        description: 具備紮實的統計學基礎，熟悉各種統計方法和假設檢定
        icon: chart-line
        icon_pack: fas
      - name: SQL
        description: 熟練使用 SQL 進行資料庫查詢、數據整理和分析
        icon: database
        icon_pack: fas
      - name: 學術論文寫作
        description: 具備學術寫作能力，熟悉論文撰寫和學術規範
        icon: pen-fancy
        icon_pack: fas
  design:
    columns: '2'
    view: card
```

## 3. 最佳實踐

### 3.1 使用項目標準配置

- **參考現有區塊**：查看 `/content/_index.md` 和 `/content/projects.md` 中的成功配置
- **使用已驗證的 design 參數**：如 `view: card`、`columns: 2`、`spacing` 等
- **避免自定義 CSS**：優先使用主題內建的樣式系統

### 3.2 區塊類型選擇指南

| 區塊類型 | 適用場景 | 優點 | 缺點 |
|---------|---------|------|------|
| `markdown` | 簡單文字展示 | 靈活、易維護、兼容性好 | 樣式選項有限 |
| `features` | 結構化技能展示 | 支持圖標、卡片視圖 | 配置複雜、易出錯 |
| `collection` | 大量內容展示 | 支持篩選、多種視圖 | 需要額外內容文件 |

### 3.3 設計參數說明

```yaml
design:
  columns: '1'        # 列數：'1' 或 '2'
  view: card          # 視圖類型：card, compact, citation
  spacing:
    padding: ['20px', '0', '20px', '0']  # 內邊距設置
```

## 4. 配置選項對比

### 4.1 Markdown 區塊優勢

✅ **優點**：
- 與項目整體風格一致
- 使用已驗證的設計模式
- 無需維護額外代碼
- 響應式設計自動適配
- 載入速度快且樣式穩定

❌ **缺點**：
- 樣式自定義選項較少
- 無法使用 Font Awesome 圖標

### 4.2 Features 區塊特點

✅ **優點**：
- 支持豐富的圖標系統
- 卡片式布局美觀
- 結構化數據展示

❌ **缺點**：
- 配置複雜容易出錯
- 需要手動定義所有項目
- 與主題兼容性問題

## 5. 注意事項

### 5.1 避免的做法

- ❌ 不要使用 `username` 參數嘗試自動讀取作者數據
- ❌ 不要添加自定義 CSS 到 `/assets/scss/custom.scss`
- ❌ 不要使用未經測試的 design 參數組合

### 5.2 推薦的做法

- ✅ 參考項目中其他頁面的成功配置
- ✅ 使用項目內建的區塊類型和視圖
- ✅ 保持配置簡潔明了
- ✅ 定期測試不同設備上的顯示效果

### 5.3 故障排除

如果區塊不顯示或樣式異常：

1. **檢查 YAML 語法**：確保縮進和格式正確
2. **驗證區塊 ID**：確保 `id` 唯一且符合命名規範
3. **查看控制台錯誤**：使用瀏覽器開發者工具檢查錯誤
4. **重啟 Hugo 服務器**：配置更改後重新啟動服務

## 6. 版本控制建議

在進行配置修改前：

```bash
# 創建備份分支
git checkout -b backup-skills-config
git add .
git commit -m "Backup current skills configuration"

# 切回主分支進行修改
git checkout main
```

修改完成後測試無誤再提交：

```bash
git add content/experience.md
git commit -m "Update Skills & Hobbies section configuration"
```

---

**文檔版本**：v1.0  
**最後更新**：2024年12月  
**適用主題**：Hugo Blox Academic