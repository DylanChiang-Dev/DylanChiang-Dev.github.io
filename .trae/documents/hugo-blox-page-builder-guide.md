# Hugo Blox 頁面構建器開發指南

## 1. Hugo Blox 區塊系統介紹

Hugo Blox 提供了一個強大的無代碼區塊系統，讓您可以輕鬆構建美觀的頁面。<mcreference link="https://docs.hugoblox.com/getting-started/page-builder/" index="0">0</mcreference>

### 核心特點
- **無需編程**：只需選擇區塊並按您喜歡的方式排列
- **預設模板**：提供預配置的熱門區塊作為首頁區段
- **完全自定義**：內容區塊讓您完全自定義網站
- **靈活重用**：同一區塊可在不同區段中重複使用

### 區塊系統架構
區塊系統使您能夠輕鬆為以下部分選擇不同的區塊設計：
- **頁首**（如導航欄）
- **頁面區段**（主要內容）
- **頁尾**（如版權和連結）

## 2. 如何使用區塊構建頁面

### 基本使用流程
1. 開啟首頁文件 `content/_index.md`
2. 刪除不需要的首頁區段
3. 個性化剩餘區段選項
4. 更新導航選單（如需要）

### 文件結構
```yaml
---
# 頁面標題
title: "我的頁面"
# 頁面類型 - 我們需要一個著陸頁面（如首頁）
type: landing
# 您的著陸頁面區段 - 添加任意數量的不同內容區塊
sections:
  - block: markdown
    id: section-1
    content:
      title: 區段 1
      subtitle: 副標題
      text: 在此添加任何 **markdown** 格式的內容 - 文字、圖片、影片、畫廊 - 甚至 HTML 代碼！
---
```

## 3. 創建、移除和定位區塊

### 創建新區段
要向首頁添加區段，在 `content/_index.md` 的 `sections` 下創建新的 YAML 項目：

```yaml
sections:
  - block: markdown
    id: my-section
    content:
      title: 我的區段
      subtitle: 區段副標題
      text: 區段內容...
```

### 移除區段
如果不需要特定區段，只需從 `content/_index.md` 中刪除相關的區段配置。

移除區段後，記得從 `config/_default/menus.yaml` 中移除相關的導航連結。

### 定位區段
頁面區段按照在頁面前置資料 `sections` 中定義的順序出現。

要重新排列首頁區段：
1. 編輯 `content/_index.md` 文件中的區段
2. 剪切並貼上區段（從 `- block: ...` 開始）到所需順序

### 連結到區段
在 `config/_default/menus.yaml` 中添加導航連結：

```yaml
main:
  - name: 研究
    url: /#research
    weight: 10
```

## 4. 區塊個性化設定

每個區段的參數包含通用選項和區塊特定選項。

### 通用選項
- `id`：區段唯一標識符
- `title`：區段標題
- `subtitle`：區段副標題
- `design`：設計選項（背景、顏色等）

### 設計選項範例
```yaml
design:
  background:
    color: black
    image:
      filename: background.jpg
      filters:
        brightness: 0.8
  spacing:
    padding: ["20px", "0", "20px", "0"]
```

## 5. 常用區塊類型和配置範例

### 5.1 Markdown 區塊
```yaml
- block: markdown
  content:
    title: 標題
    subtitle: 副標題
    text: |
      ## 子標題
      這裡是 **markdown** 內容
```

### 5.2 Features 區塊
```yaml
- block: features
  content:
    title: 技能與愛好
    items:
      - name: Python
        description: 熟練掌握 Python 程式設計
        icon: python
        icon_pack: fab
      - name: 數據分析
        description: 90%
        icon: chart-line
        icon_pack: fas
  design:
    columns: '2'
    view: card
```

### 5.3 Resume 相關區塊
```yaml
# 經歷區塊
- block: resume-experience
  content:
    username: admin
  design:
    date_format: 'January 2006'
    is_education_first: false

# 獎項區塊
- block: resume-awards
  content:
    title: 獎項
    username: admin

# 語言區塊
- block: resume-languages
  content:
    title: 語言
    username: admin
```

### 5.4 Collection 區塊
```yaml
- block: collection
  content:
    title: 最新論文
    filters:
      folders:
        - publication
      featured_only: true
  design:
    view: citation
    columns: 1
```

## 6. 當前項目實際使用案例

### 6.1 首頁配置 (`content/_index.md`)
```yaml
sections:
  - block: resume-biography-3
    content:
      username: admin
    design:
      css_class: dark
      avatar:
        size: medium
        shape: circle
      background:
        color: black
        image:
          filename: stacked-peaks.svg

  - block: markdown
    content:
      title: '我的研究'
      text: |
        我專注於生成式人工智慧在政治工作領域的應用研究...
```

### 6.2 經歷頁面配置 (`content/experience.md`)
```yaml
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      date_format: 'January 2006'
      is_education_first: false

  - block: features
    id: skills
    content:
      title: Skills & Hobbies
      items:
        - name: AI技術研究
          description: 85%
          icon: robot
          icon_pack: fas
    design:
      columns: '2'
      view: card
```

### 6.3 用戶資料配置 (`content/authors/admin/_index.md`)
```yaml
# 工作經歷
work:
  - position: 研究助理
    company_name: 中國文化大學
    date_start: '2023-09-01'
    date_end: '2024-06-30'
    summary: 協助國家發展政策研究，參與學術活動與文獻分析。

# 技能配置（用於 features 區塊）
features:
  - icon: robot
    icon_pack: fas
    name: AI技術研究
    description: 85%
```

## 7. 最佳實踐建議

### 7.1 區塊選擇
- 使用 `features` 區塊展示技能和百分比
- 使用 `markdown` 區塊展示自由格式內容
- 使用 `collection` 區塊展示動態內容列表
- 使用 `resume-*` 區塊展示個人履歷信息

### 7.2 設計一致性
- 保持相似區段的設計風格一致
- 合理使用顏色和間距
- 確保響應式設計在不同設備上的表現

### 7.3 內容管理
- 將個人信息集中在 `content/authors/admin/_index.md`
- 使用 `username: admin` 參數引用用戶資料
- 定期更新和維護內容的準確性

### 7.4 導航設定
- 為重要區段設定 `id` 並在選單中添加連結
- 保持導航結構清晰簡潔
- 確保所有連結都能正確跳轉

## 8. 故障排除

### 常見問題
1. **區塊不顯示**：檢查 YAML 語法和縮排
2. **圖示不顯示**：確認 `icon_pack` 設定正確
3. **百分比不顯示**：確保使用正確的區塊類型和參數
4. **樣式異常**：檢查 CSS 類別和設計參數

### 調試技巧
- 使用 `hugo server` 即時預覽變更
- 檢查瀏覽器開發者工具中的錯誤信息
- 參考官方文檔和範例配置
- 逐步添加區塊以定位問題

## 9. 網站自定義配置

### 9.1 外觀設定

在 `config/_default/params.yaml` 中配置網站外觀：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

```yaml
appearance:
  mode: light  # 選項：light, dark, system
  color: blue  # 選項：blue, cyan, green, indigo, purple, red, rose, sky, teal, zinc
```

#### 明暗模式
- `light`：淺色模式
- `dark`：深色模式
- `system`：自動匹配用戶設備外觀

#### 顏色主題
內建顏色主題包括：blue、cyan、green、indigo、purple、red、rose、sky、teal、zinc

#### 自定義顏色主題
1. 下載現有顏色主題文件
2. 編輯顏色設定
3. 重命名文件（如 `river.css`）
4. 移動到 `assets/css/themes/` 資料夾
5. 在 `params.yaml` 中設定 `color: river`

### 9.2 網站圖標設定

設定網站圖標（favicon）：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

1. 準備 512x512 像素的正方形圖片
2. 命名為 `icon.png`
3. 放置在 `assets/media/` 資料夾中

**注意**：瀏覽器可能會快取圖標，需要清除快取才能看到變更。

### 9.3 字體自定義

使用 Google Fonts 等自定義字體：

1. 透過自定義 CSS 添加字體（參考擴展 Hugo Blox 章節）
2. 在 `assets/scss/custom.scss` 中定義字體樣式

```scss
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

body {
  font-family: 'Noto Sans TC', sans-serif;
}
```

## 10. 頁首導航配置

### 10.1 導航欄基本設定

在 `config/_default/params.yaml` 中配置頁首：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

```yaml
header:
  navbar:
    enable: true              # 是否顯示導航欄
    blox: "navbar"            # 選擇內建導航區塊
    align: "center"           # 選單對齊：left, center, right
    fixed_to_top: true        # 固定在頁面頂部
    logo:
      text: ""              # Logo 文字
      filename: "logo.svg"    # Logo 檔案名稱（在 assets/media/ 中）
    button:
      enable: true
      text: "開始使用"
      url: "https://hugoblox.com/templates/"
    show_theme_chooser: true  # 顯示主題切換按鈕
    show_search: true         # 顯示搜尋功能
    highlight_active_link: true  # 自動高亮當前頁面連結
    show_translations: true   # 顯示語言選擇器
    hide_language_name: false # 隱藏當前語言名稱
```

### 10.2 選單連結配置

在 `config/_default/menus.yaml` 中編輯主選單：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

```yaml
main:
  - name: 首頁
    url: /
    weight: 10
  - name: 關於
    url: about/
    weight: 20
  - name: 經歷
    url: experience/
    weight: 30
  - name: 研究
    url: /#research
    weight: 40
```

#### 權重排序
使用 `weight` 選項排序連結，建議使用 10 的倍數以便未來調整。

#### 連結到頁面區段
使用 `#ID` 格式連結到首頁區段，其中 ID 對應區段的 `id` 欄位。

### 10.3 子選單創建

創建下拉子選單：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

```yaml
main:
  - name: 首頁
    url: /
    weight: 10
  - name: 標籤
    identifier: tags
    weight: 20
  - name: 學術
    parent: tags
    url: tags/academic/
    weight: 10
  - name: 技術
    parent: tags
    url: tags/tech/
    weight: 20
```

**步驟**：
1. 為父項目添加 `identifier: 唯一標識`
2. 為子項目添加 `parent: 唯一標識`

## 11. 頁尾配置

### 11.1 自定義頁尾訊息

在 `config/_default/params.yaml` 中添加頁尾訊息：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

```yaml
footer:
  notice: "© {year} 我的網站. 版權所有."
```

**動態變數**：
- `{year}`：自動顯示當前年份

### 11.2 頁尾區塊自定義

頁尾區塊可在 `config/_default/params.yaml` 中的特殊區段進行自定義。

## 12. 個人化 URL 設定

### 12.1 自定義域名

為網站設定專業域名（如 `your-name.com`），避免被鎖定在特定主機：<mcreference link="https://docs.hugoblox.com/getting-started/customize/" index="0">0</mcreference>

- GitHub Pages：`your-name.github.io`
- Netlify：`your-name.netlify.app`

**建議**：使用自定義域名提升專業形象並保持靈活性。

### 12.2 域名配置步驟

1. 購買域名
2. 在域名提供商設定 DNS 記錄
3. 在部署平台配置自定義域名
4. 更新網站配置文件中的 `baseURL`

## 13. 當前項目自定義配置範例

### 13.1 外觀配置

```yaml
# config/_default/params.yaml
appearance:
  mode: system
  color: blue
```

### 13.2 導航配置

```yaml
# config/_default/menus.yaml
main:
  - name: 首頁
    url: /
    weight: 10
  - name: 經歷
    url: experience/
    weight: 20
  - name: 研究
    url: /#research
    weight: 30
  - name: 論文
    url: /#papers
    weight: 40
  - name: 演講
    url: /#speaking
    weight: 50
```

### 13.3 頁首設定

```yaml
# config/_default/params.yaml
header:
  navbar:
    enable: true
    align: center
    fixed_to_top: true
    show_theme_chooser: true
    show_search: true
    highlight_active_link: true
```

### 13.4 自定義 CSS

```scss
// assets/scss/custom.scss
/* Skills & Hobbies 字體大小調整 */
#skills {
  .markdown-content {
    font-size: 1.1rem;
    
    h2 {
      font-size: 1.4rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
}
```

## 14. 進階自定義技巧

### 14.1 區塊替換

可以將導航欄區塊替換為不同的佈局：
- 從區塊儲存庫選擇
- 從本地 `layouts/partials/components/headers/` 資料夾選擇

### 14.2 響應式設計

確保自定義配置在不同設備上的表現：
- 測試手機和平板顯示效果
- 檢查導航選單在小螢幕上的行為
- 驗證主題切換功能

### 14.3 效能優化

- 優化圖標檔案大小
- 合理使用自定義字體
- 避免過多的 CSS 覆寫

---

*本文檔基於 Hugo Blox 官方文檔編寫，結合實際項目使用經驗整理而成。*