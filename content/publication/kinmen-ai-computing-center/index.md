---
title: '面對技術封鎖下的兩岸AI硬體協同創新：金門AI算力中心合作模型研究'
authors:
  - admin
date: '2024-01-20T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-01-20T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article-journal']

# Publication name and optional abbreviated publication name.
publication: ''
publication_short: ''

abstract: '在全球科技競爭日益激烈的背景下，美國對中國大陸實施了嚴格的AI晶片技術封鎖，這對中國的科技發展構成了重大挑戰。台灣作為全球半導體製造的重要參與者，擁有生產高端AI晶片的能力，並在國際科技封鎖格局中佔據著獨特的戰略地位。金門因其特殊的地理位置和政治背景，被視為兩岸科技合作的潛在窗口。本研究提出在金門建立AI算力中心的構想，旨在探索一種新的合作模式，以突破技術封鎖的局限，並促進兩岸科技創新與產業發展。研究深入探討了金門AI算力中心在技術轉移、知識產權保護、資金籌集、數據安全與隱私保護、以及兩岸關係不確定性和法律法規遵循等方面所面臨的挑戰。通過系統性分析，本研究評估了金門AI算力中心的可行性，並提出了具體的策略建議，以促進兩岸在高科技領域的合作，推動區域經濟共同繁榮。'

# Summary. An optional shortened abstract.
summary: '本研究提出在金門建立AI算力中心的構想，探索兩岸科技合作新模式，以突破技術封鎖局限，促進科技創新與產業發展。'

tags:
  - 金門AI算力中心
  - 兩岸科技合作
  - AI晶片技術封鎖
  - 技術轉移
  - 知識產權保護
  - 資金籌集
  - 數據安全
  - 隱私保護
  - 兩岸關係
  - 法律法規遵循

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder name, e.g. `internal-project`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ''
---



# 壹、 緒論

## 1.1美國對AI晶片技術封鎖的國際背景與對兩岸影響

在當今由科技創新帶動的全球經濟體系中，人工智慧（AI）與半導體技術無疑站在了時代的前沿。然而，近年來，美國政府基於地緣政治考量以及科技競爭的態度，對中國在這些先進領域實施了一連串的技術封鎖和出口管制措施。這種情勢不但對中國的科技發展構成直接挑戰，也引發了對全球科技創新格局潛在變遷的關注與思考。
特別是在AI晶片技術領域，美國以國家安全為由，自2022年起對包括Nvidia和AMD在內的領先企業實行了嚴格的出口限制，阻止這些公司將其最先進的AI晶片銷往中國。這些晶片對於人工智慧的發展至關重要，因為它們為高性能計算提供了基礎，是大數據分析和智能製造等應用不可或缺的部分。封鎖措施顯示了美國在維護其技術霸權地位上的堅定立場，以及對於遏制中國科技快速崛起的決心。
這種封鎖對於中國的影響是深遠的。它不僅對中國企業的技術創新能力造成了壓制，也影響到了中國政府推動的重要發展戰略，例如“製造2025”計劃。為了應對這些限制，中國不得不尋找替代的技術來源，或者加快國內相關技術的自主研發。

## 1.2金門在此格局中的獨特角色

對台灣地區來說，美國的封鎖政策則意味著機遇與挑戰的同時到來。作為全球半導體製造業的重要參與者，台灣地區能夠訪問這些先進技術，並且擁有生產高端AI晶片的能力。這一優勢使得台灣地區有潛力成為大陸地區突破技術封鎖的合作伙伴。特別是，金門因其靠近大陸的特殊地理位置，作者提出在金門建立AI算力中心的構想，並提出金門AI算力中心作為一個可能的合作平台，以解決技術封鎖帶來的挑戰，這不僅對於兩岸關係的發展具有深遠的意義，同時也為全球科技創新趨勢提供了新的視角。

在當前全球科技競爭中，台灣地區在面對複雜的國際科技格局中所扮演的角色顯得尤為獨特。台灣地區一直是全球半導體產業的重要據點，憑藉其先進的製程技術和晶片設計能力，在國際上佔有一席之地。而近年來，隨著美國對大陸地區進行AI晶片技術的封鎖，台灣地區的戰略重要性被進一步推高。

由於台灣企業可以合法獲得並生產這些在大陸地區受限的高階AI晶片，台灣地區成為了大陸地區在這方面的潛在合作夥伴，此情況為兩岸在高科技領域的合作開啟了新的可能性。透過這樣的協同作用，不但可以緩解大陸地區在特定技術範疇內的發展瓶頸，也有助於維持台灣地區在全球半導體產業中的地位與經濟利益。

金門則因其地理與歷史的特殊性，成為了這種合作的理想場所。作為兩岸的前沿島嶼，金門地處台灣海峽，與大陸隔海相望，具有濃厚的閩南文化背景且政治上屬於台灣地區的管轄範圍。其獨特的地理位置使其在政治、經濟和文化上都扮演著兩岸橋樑的角色，不僅是兩岸人民交流的紐帶，也是潛在的科技合作窗口。

在美國對AI晶片技術封鎖的大背景下，提出在金門建立AI算力中心可以視為一種策略性的部署。這樣的中心將利用台灣地區的技術優勢和金門的地理優勢，旨在形成一個科技合作的新模式。金門AI算力中心不僅能夠為大陸地區提供必要的計算資源與技術支援，同時也能夠為台灣地區創造新的經濟增長點和提升其在國際科技競爭中的影響力。

然而，這種合作模式的建立與運營將面臨諸多挑戰，包括技術轉移、知識產權保護、政治風險等等。因此，本研究接下來將探討在這種獨特國際科技與地緣政治架構下，如何平衡各方利益，並以和平與穩定的方式推動兩岸的科技合作與經濟共同繁榮。

## 1.3金門AI算力中心如何協助突破封鎖，促進兩岸合作
在美國對AI晶片進行技術封鎖的當前國際形勢中，探尋有效的突破途徑成為兩岸科技合作的一大課題。本論文將聚焦於金門AI算力中心這一概念，探索其如何成為兩岸合作的關鍵樞紐，並具體明確以下研究問題：
1. 金門AI算力中心的可行性
鑑於國際技術封鎖的背景，探討在金門建立AI算力中心的可行性及其在兩岸科技合作中的戰略位置。考慮到現有的政策、法律框架，以及必要的技術基礎設施和人力資源，分析這一構想是否踏實可行。
2. 對抗技術封鎖的機制
研究金門AI算力中心如何作為一個多功能平台，為大陸地區提供必要的AI計算資源，同時確保符合兩岸法律和規範。詳細探討如何通過合作避免封鎖帶來的負面影響，並促進科技發展。
3. 促進兩岸合作的策略
分析金門AI算力中心能夠如何加強兩岸在科技領域的合作，並研究所需的策略和措施來促進長期的合作關係。這包括兩岸如何在保護知識產權和技術轉移方面進行有效協調。
4. 經濟與政治影響
評估金門AI算力中心的建立和運營對兩岸經濟關係的影響，以及其可能對區域乃至全球科技創新格局帶來的變化。探討這種合作是否會在政治層面有所影響，並如何管理這些潛在的影響。
5. 潛在風險與挑戰
識別在建立和維護金門AI算力中心過程中可能遇到的風險和挑戰，包括技術秘密泄露、網路安全保護、以及可能的政治敏感性問題。

# 貳、 文獻回顧

## 2.1AI技術封鎖的相關研究與案例
在當今的全球經濟格局中，AI技術與半導體產業成為了科技創新的核心。美國與大陸在AI晶片領域的競爭愈加激烈，導致了一系列的技術封鎖與出口管制措施的產生。
Chang和Yeh（2018）在他們的研究中探討了台灣公司面對工業4.0轉型過程中對人才的需求，特別強調了AI和半導體領域專業技能的重要性。 Cho（2023）分析了美中在半導體與AI技術供應鏈上的脫鉤模式，這一模式對全球技術創新產生了深遠的影響。 Danilin（2022）將美中科技戰視為新地緣政治時代的開端，其影響可能會重塑國際秩序。 Fang（2002）的案例研究強調了台灣半導體產業的競爭優勢，尤其在創新與市場響應方面。  
Malkin和He（2023）的研究則分析了全球半導體價值鏈的地緣經濟學以及美中科技競爭如何影響相關價值鏈的擴展。

## 2.2兩岸科技合作的歷史與現狀
兩岸科技合作的發展歷程與當前動態，是在長期的經濟文化交流與複雜的國際政治環境中逐步形成的。從早期的信息技術領域合作到當下涵蓋更廣泛的高科技領域，兩岸科技合作經歷了不斷的深化與擴展。
1. 歷史回顧
Tsai（2012）通過對LED產業的兩岸合作案例研究，揭示了早期兩岸科技合作集中於特定高科技領域，並強調在ECFA框架下，兩岸應加強產業合作以共同提升競爭力。 此外，Hung（2009）的研究則從競爭與合作的角度，評估了台灣資訊技術產業如何通過與大陸的合作促進創新和提高績效。 
2. 結構性變化
進入21世紀，兩岸科技合作出現了結構性變化。Chen（2011）指出，台灣高技術公司在大陸地區的投資不僅促進了兩岸經濟合作，也促成了產業集群的形成和發展。 此外，Yang、Sun和Huang（2018）的研究則探討了新形勢下兩岸能源合作的可能性，提出能源領域尤其是離岸風電，是兩岸合作的新領域。 
3. 當前挑戰與現狀
儘管兩岸科技合作具有豐富的歷史基礎和巨大的發展潛力，但當前面臨著不少挑戰。Clough（2001）從政治角度分析了儘管存在政治僵局，但兩岸科技合作仍在持續發展的情況，突顯了科技合作領域的獨特性和相對獨立性。 
總體而言，兩岸科技合作從早期的資訊技術和電子製造業合作，逐漸擴展到能源、生物技術，以及人工智慧等新興領域。雖然面臨國際政治經濟環境變化和兩岸關係波動的挑戰，兩岸科技合作的潛力依然巨大，為未來合作提供了新的契機。

# 參、研究方法
## 3.1研究設計
本章旨在介紹本研究的總體架構，包括研究的目的、範圍及問題陳述。透過深入分析金門AI算力中心構想，本研究將探討中心在推動科技創新、籌集必要資金、遵守相關法律法規以及應對兩岸政治環境變化等方面所面臨的挑戰。同時，研究將尋找和提出潛在的策略與解決方案，以促進該中心在不確定的兩岸關係中穩定及有效地發展。
1. 研究目的
本研究旨在深入了解金門AI算力中心構想的可行性，並評估其在當前國際科技趨勢和兩岸關係脈絡下的實施挑戰與機遇。此外，研究亦旨在提供一套系統性的分析框架，以促進該中心成為兩岸科技創新和產業發展的加速器。
2. 研究範圍
本研究將聚焦於以下幾個核心領域：
	- 科技創新：分析金門AI算力中心在推動兩岸尤其是在AI領域的科技創新所扮演的角色和潛力。
	- 資金籌集：探討中心在當前經濟和政治環境中籌集資金的挑戰，以及面對這些挑戰的策略。
	- 法律合規：評估兩岸以及國際法律對算力中心運營可能帶來的影響，以及如何確保中心在多變法律環境中的合法運營。
兩岸政治關係：研究兩岸政治關係的波動對於中心穩定運作的影響，並尋求能夠適應這些波動的策略。
3. 問題陳述
本研究將探討的問題包括：
	- 金門AI算力中心在推動兩岸科技創新和產業發展方面能扮演什麼角色？
	- 在複雜的兩岸政治環境下，中心將如何克服籌資等挑戰？
	- 中心如何確保在動態變化的法規框架下，維持合法合規的運營？
	- 針對兩岸關係不確定性，中心應該如何規劃和執行相應的應對策略？
	- 綜上所述，本章節將為整體研究奠定基礎，並為後續各章節深入探討提供清晰的方向和方法論基礎。

## 3.2資料收集方法
為了滿足本研究對金門AI算力中心進行全面分析的多元需求，我們採取了如下的資料收集方法：
1. 文獻回顧
為深入瞭解金門AI算力中心的背景、發展現狀以及所處的宏觀環境，文獻回顧在本研究中扮演著基礎角色。這包括但不限於：
	- 政府報告與規劃文件：搜集兩岸政府關於科技計劃、經濟發展戰略以及AI政策的正式文檔。
	- 學術文章和期刊：廣泛閱讀與AI技術、算力中心運營管理、兩岸經濟合作等相關的學術文章，匯總最新的研究成果和理論進展。
	- 新聞報導與行業分析：收集來自科技、經濟和政治領域的新聞報導，以及專業機構對於AI算力中心相關技術和市場發展的分析報告。
2. 技術輔助分析
鑑於現代研究中大量數據的處理和分析需求，作者在研究過程中引入了人工智慧輔助工具，即ChatGPT-4。
使用這一工具主要應用與資料的前處理，使用ChatGPT-4進行文獻資料的歸納整理，包括關鍵信息提取和初步分類整理，以提高資料整理的效率和完整性。

## 3.3資料分析方法
為了提高研究的效率和品質，在本研究中，我們利用了ChatGPT-4這一人工智慧工具作為撰寫論文的輔助工具。ChatGPT-4的運用範圍涵蓋從初步構想發展、文獻資料的整合，到研究建議的形成等多個方面。
1. 初步分析
ChatGPT-4在初步分析階段，為我們提供了有見地的參考意見和分析角度。透過與之對話，我們得以從不同視角檢視問題，並在討論中揭示潛在的研究方向和分析框架。
2. 語言表達與草稿撰寫
在論文撰寫階段，ChatGPT-4被用於提升語言表達的質量及草稿的初步構建。它的能力涵蓋文案生成、寫作風格的調整，以及文本的校對與編輯。
3. 數據驗證
值得一提的是，所有利用ChatGPT-4產生的分析和建議，均經由作者進行人工驗證。確保提出的觀點精確、數據可靠，並符合學術研究的規範。

## 3.4倫理考量
在本研究過程中，我們充分利用了ChatGPT-4這個大語言模型作為撰寫論文的輔助工具。在此過程中，我們特別關注並嚴格遵守了幾項關鍵的倫理考量，以確保研究的進行不僅高效而且符合學術倫理標準。
1. 透明性
在本研究過程中，我們充分利用了ChatGPT-4這一先進的人工智慧工具，以輔助資料的整理、初步分析以及論文的撰寫過程。為了確保研究過程的透明性，我們在此明確聲明：本論文的撰寫過程中確實得到了大語言模型（LLM）的協助，特別是在處理龐大資料集、生成初步分析建議以及草擬論文文本等方面。
作者在使用大語言模型的同時，充分認識到作為作者和研究者對最終提交論文內容的責任。我們確保所有的研究成果和結論均基於充分的數據分析、批判性思考以及科學的論證過程，並且努力使本研究的所有相關資訊和方法盡可能透明和清晰。
2. 原創性和歸屬
在使用大語言模型協助撰寫過程中，我們嚴格保證研究成果的原創性。任何由大語言模型生成的內容都將進行人工審核和重構，以確保最終論文的內容是獨特的並且歸屬於研究作者。同時，我們也註意避免在不恰當的情況下直接引用生成內容，以保護知識產權。
3. 責任
使用ChatGPT-4進行研究撰寫的過程中，作者認識到最終的研究成果和任何相關決策的責任仍然由研究者承擔。這意味著，對於大語言模型所提供的任何分析和建議，研究者需進行批判性的評估和適當的選擇，確保研究成果的準確性和可靠性。
管我們無法具體標註每一處由大語言模型輔助生成的內容，但我們承諾提供的所有研究成果均經過嚴格的人工審核和整合，以確保其符合學術研究的標準和要求。
4. 遵守學術標準
在整個研究過程中，從資料收集到論文撰寫，我們堅持遵守學術倫理和標準。這包括但不限於對參考資料的準確引用、對研究過程的全面記錄以及對研究結果的客觀呈現。

## 3.5研究限制
在進行本研究的過程中，我們面臨了幾項不可避免的限制，這些限制可能影響了研究結果的完整性與可擴展性。以下是我們確認的主要研究限制：
1. 資料收集的可及性
雖然我們盡力搜集了廣泛的相關文獻和資料，但由於資源的限制以及某些資訊的不公開性，我們無法獲取到所有潛在的資料。特別是某些最新的研究成果、兩岸政策的動態更新，或是特定技術細節的缺乏，都可能對我們的研究結果造成一定程度的影響。
2. 技術輔助的侷限性
雖然ChatGPT-4作為一種先進的人工智慧技術，對我們的研究提供了巨大的支持，但它在理解複雜問題、捕捉文化和地域細節上的侷限性，以及對於某些專業領域知識的解讀可能不夠精準，這些因素都限制了我們僅依賴此類技術工具進行分析與資訊整理的程度。
3. 研究結果的可推廣性
本研究主要集中於金門AI算力中心的設立及其對兩岸科技合作的影響，因此研究的範圍和背景具有特定的地域性和時效性。這也意味著，我們的研究結果可能受到特定時期兩岸關係狀態、技術發展階段以及政策環境等因素的限制，對於其他地區或不同時期的可推廣性與適用性可能有所限制。

雖然我們在研究過程中盡可能克服這些限制，以提高研究的準確性和可靠性，但這些研究限制的存在提醒我們在解讀和應用研究結果時需要保持謹慎。未來的研究可以在獲取更全面的資料、使用更進階的技術工具，以及探索更廣泛的應用場景上進行擴展和深入，以克服現階段研究的限制。

# 肆、 政策、經濟與技術背景分析
## 4.1美國封鎖政策的具體措施與其對大陸的影響
1. 美國封鎖政策的措施
	-  出口限制：
近年來，隨著技術競爭的加劇，美國政府實施了一系列針對AI晶片和相關技術的出口限制措施，旨在限制這些技術被輸送到大陸。這些限制措施包括對特定產品和技術的出口規則更新、對特定企業的實體清單限制，以及對投資的限制。這些措施對中國大陸的科技進步和產業發展產生了重大影響。
根據CSIS的報告（2022年），美國對AI晶片的出口規則進行了更新，限制包括大陸地區在內的特定地區的公司購買美國製造的AI晶片（Center for Strategic and International Studies, 2022）。 這些規則的更新旨在防止美國先進技術被用於增強中國的軍事能力或被用於不公平的競爭行為。
同時，The Diplomat（2024年）報道稱，2022年10月首次實施的一系列出口控制措施，目的是限制大陸地區訪問由美國製造的進階AI晶片（Cho, 2024）。 這些控制措施的目標是削弱大陸地區在AI領域的能力發展。
此外，根據Reuters的報導（2024年），新的規則旨在阻止向大陸地區出口由Nvidia及其他企業設計的更進階AI晶片（Reuters, 2024）。 這些出口限制對於AI技術的研究發展和應用推廣產生了明顯的影響。
因此，美國的出口限制措施已經對大陸地區的科技產業和全球AI晶片市場產生了深遠的影響，這不僅影響到了大陸企業獲得關鍵技術的能力，也對全球科技創新和合作產生了廣泛的影響。
	- 實體清單（Entity List）：
美國政府為了保護國家安全與經濟利益，針對特定的外國實體、組織和個人實施了所謂的「實體清單」。這份清單包括了那些被認為可能威脅美國國家安全或利用美國技術進行不公平競爭的實體。被列入清單的公司將受到限制，禁止購買美國製造的技術和設備，除非有特殊許可。
根據美國商務部工業與安全局(Bureau of Industry and Security, BIS)的官方資訊，「實體清單」明確指出每個列入名單的公司或個人所面臨的許可要求（Bureau of Industry and Security, n.d.）。 
近期，根據聯邦公報(Federal Register)，美國出口管理委員會(Export Control Review Committee, ERC)決定新增數家大陸公司至「實體清單」中，其中包括Dennex Enterprises Limited、Exeya Co.，Limited等（Federal Register, 2024a; Federal Register, 2023）。   這些新增的實體涵蓋了從高科技電子產品到貿易投資等不同領域，反映了美國對於技術出口控制的嚴格態度。
	- 投資限制：
近年來，美國政府採取了一系列措施，限制美國企業對大陸科技公司的直接投資，特別是在敏感技術領域。這些限制旨在防止美國的科技和資金被用於增強大陸的軍事能力和科技競爭力。
行政命令限制投資：據美國對外關係委員會(Council on Foreign Relations, 2023)報導，拜登總統發布了一項行政命令，限制美國在敏感技術領域對大陸的直接投資。這旨在防止這些技術幫助北京提高其軍事實力。 
新程序限制對華投資：根據白宮案件(White & Case, 2023)，拜登命令建立了一個新的程序來限制美國對中國特定技術領域的外向投資。這包括在人工智慧、先進半導體等領域的投資限制。 
禁止特定高科技投資：一項行政命令特別針對三個高科技領域：人工智慧、先進半導體和量子計算，禁止了美國在這些領域對中國的新投資。（China Briefing, 2023） 

2. 對大陸的影響
	- 科技發展的挑戰：
近年來，美國對大陸的出口控制和投資限制對大陸的科技公司產生了重大影響，特別是在獲取關鍵技術和吸引國際投資方面。
研發投資增加：根據CSIS的報告，西方的出口控制措施導致被列入名單的大陸公司反彈，迫使它們增加研發投資（Center for Strategic & International Studies, n.d.）。 雖然這可以看作是一種積極的自主創新推動，但在短期內可能因缺乏成熟技術而面臨發展瓶頸。
國際貿易關係的影響：據Access Partnership報告，美中貿易緊張局勢對全球供應鏈和法規環境產生了複雜的影響，使得與全球供應鏈相關的公司面臨更加複雜的監管環境（Access Partnership, 2024）。 
安全顧慮與技術領導：據East Asia Forum分析，美國對大陸的出口控制和投資限制在關鍵領域旨在保持技術領導並解決安全顧慮（East Asia Forum, 2024）。 這直接限制了大陸科技公司對關鍵和先進技術的訪問，增加了技術創新的難度。
對全球貿易的長期影響擔憂：與此同時，美國企業也對對華出口過於寬泛的限制表示擔憂，擔心這可能對中國的長期科技發展產生影響，並對全球貿易造成負面後果（Pillsbury Winthrop Shaw Pittman, n.d.）。 
	- 市場與供應鏈的調整：
面對美國的技術封鎖和貿易限制，大陸已採取綜合措施來調整其市場策略和重組供應鏈。這些策略旨在減少對外國技術的依賴，同時加快國內技術創新和自主生產能力的發展。
	- 促進國內創新：
根據國際戰略研究中心(CSIS)的報告，大陸正在推動國內創新戰略，逐步減少對高端晶片等進口技術的依賴（Kennedy & Johnson, 2023）。這包括重點投資半導體和人工智慧等關鍵領域的研究與開發。 
擴大大陸內部生產能力：為應對美國的出口控制，大陸正在加快擴展內部半導體產業的生產能力。如羅森集團(Rhodium Group)研究顯示，大陸在過去幾年中顯著提升了其傳統晶片生產的能力（Rosen, 2024）。 
多元化進口來源：面對特定技術和產品的進口限制，大陸尋求多元化進口來源，減少對單一外部市場的依賴。這包括加強與歐洲、東亞及其他地區國家在科技領域的合作與貿易。
	- 自主創新的推動：
近年來，面對美國的封鎖措施，大陸加快了其自主技術創新的步伐，特別是在半導體和人工智慧(AI)等關鍵技術領域。
		- 半導體自給自足的戰略：據國際戰略研究中心(CSIS)報導，在2010年代中期，大陸就已經積極推進半導體自給自足的戰略。這一戰略的關鍵在於，面對外部封鎖和限制，大陸加大國內半導體產業的投資和支持，以提升國內產能和技術水平（Kennedy & Johnson, 2023）。 
		- 對美國技術封鎖的回應：南華早報(SCMP)報導，大陸對美國的封鎖策略回應是加強創新和自主研發的能力，而不是選擇自我孤立。全國人民代表大會發言人表示，大陸將通過創新和自力更生來克服美國的技術和科學制裁（SCMP, 2024）。 
		- AI領域的發展模式：根據德國墨卡托中國研究所(MERICS)的政策簡報，大陸在AI發展上採取了全國性的計算力基礎設施大型項目，以及全面發展策略。這顯示了大陸對於在AI領域實現技術自立的承諾（MERICS, n.d.）。 
		- 技術政策和發展：根據美國國家亞洲研究局(NBR)的報告，回應美國限制的挑戰，大陸通過鼓勵AI領域的創新，增加研究和開發資金，加強國內努力（NBR, n.d.）。

透過對美國對中國大陸AI技術封鎖政策的具體措施及其影響的分析，本節提供了對當前全球科技競爭環境中一個重要因素的深入理解。這些政策不僅對中國大陸的科技發展構成直接挑戰，也促使其尋求新的市場策略和加強自主創新能力，這將對兩岸科技合作的未來發展產生深遠的影響。

## 4.2台灣的技術與經濟情況

台灣在全球半導體產業中占據重要地位，特別在AI晶片領域表現突出。隨著全球AI技術的迅速發展，台灣公司在設計、製造及供應鏈管理方面表現出強大的競爭力。

1. 台灣的技術發展
台灣在AI晶片技術的創新、研發投資和人才培育方面有顯著的成就，這些努力支援了其在全球高科技產業中的領導地位。
	- AI晶片技術創新：隨著全球科技競爭的加劇，台灣在晶片技術上的創新日益關鍵。政府與產業界合作，推動了一系列的創新計劃，如台灣晶片為基礎的工業創新計劃（Taiwan CbI），著重在升級學術研究與教學基礎架構，以及吸引全球研發人才 (Taiwan Chip-based Industrial Innovation Program)。 
	- 研發投資：台灣持續加大在AI和半導體領域的研發投資。台灣積體電路設計業的成功，得益於政府在技術研發方面的強力投入和支持（EDN Asia, n.d.）。 此外，台灣在追求摩爾定律的同時，投入資源培育人才，為半導體產業帶來新的奈米時代（Taiwan Semiconductor Manufacturing Company Limited, n.d.）。 
	- 人才培育：為了保持其在全球半導體產業中的競爭力，台灣透過提升教育和培訓系統，加強人才培育。這包含了建立高水準的教育機構和研發設施，以及與國際科技社群的積極互動和合作（Runtime, n.d.）。 

2. 台灣的經濟環境對AI硬體及產業鏈的加持作用
台灣的經濟環境為其AI硬體和整個半導體產業鏈提供了堅實的支持，台灣在全球AI供應鏈中扮演關鍵角色，尤其在晶片革命方面影響深遠。
	- 全球AI供應鏈中的關鍵角色：
		- 台灣在AI晶片技術創新和生產上的領先地位，得益於其強健的經濟基礎和深化的科技研發投資，使其成為全球半導體供應鏈中不可或缺的一環。
		- 在高度專業化的經濟體制之下，台灣不僅在創新方面有著獨到的成就，更在全球供應鏈中發揮著重要作用。據CNBC報導，在台灣股票交易所首席執行官的陳述中，台灣已被證明在AI晶片革命及全球半導體產業進程中扮演關鍵角色（CNBC, 2024）。

此外，台灣在推動本地以及全球範圍內的AI晶片技術創新方面，不斷增加研發投資，並著力於科技產業專業人才的培育。這些努力加強了台灣地區在國際市場中的競爭力，並為全球科技發展作出了顯著貢獻。

	- 全球晶片製造能力的邊際：

台灣與韓國的公司穩固了其在全球晶片製造的主導地位，尤其在AI晶片的生產上具有明顯的優勢。這一優勢不僅在技術上卓越，更對台灣地區經濟產生深遠的影響。

Oxford Economics指出，由於台灣和韓國的公司控制著全球大部分的晶片製造能力，這給台灣地區帶來了在製造AI晶片方面的競爭優勢，對其宏观經濟產生顯著的正面影響（Oxford Economics, n.d.）。 這種影響不僅體現在對內在產業的推動，更在於對外在於全球供應鏈和國際市場的貢獻。

台灣地區的經濟發展戰略，特別是在AI晶片領域的製造能力，突顯了其在全球科技產業中的核心作用。在當前全球科技發展急速變化的背景下，台灣地區的這一地位為其經濟帶來了穩定的增長動力和國際商業競爭力。

	- 產業協同效應：

台灣在AI晶片產業鏈的各個環節中展現出顯著的產業協同效應，從前端晶片設計到後端的代工、封裝與測試，形成了一個高效整合的生產網絡，這一「一條龍」的產業鏈獨特於台灣，無法在美國或日本等其他國家找到完全相同的模式。

台灣半導體製造公司（TSMC）是世界上最大的晶片代工企業，為全球超過70％的晶片製造需求提供產品，尤其是在AI領域（Stimson Center, 2022）。這種產業環境使得台灣地區成為全球AI硬體研發和製造的重要樞紐。

台灣地區的產業環境既促進了產業間的緊密合作，也加強了上下遊供應鏈的整合。這種協同效應使得台灣地區在全球半導體市場中具有不可取代的地位，並確保了產業鏈中每個環節的順暢運作和技術進步。

台灣地區的產業鏈強化和產業協同效應，特別在AI晶片領域，已成為其經濟發展的重要支撐點。台灣的產業環境不僅對島內經濟有顯著貢獻，同時也對全球AI硬體與半導體產業的供應和創新產生了深遠影響。

# 伍、金門AI算力中心構想

## 5.1金門AI算力中心的構想與設計原則

隨著全球數位經濟的推動，人工智慧（AI）技術已成為推動未來科技發展的關鍵力量。為了在這一領域佔據先機，金門AI算力中心的構想應運而生，目的在於打造一個集AI研究、數據處理及演算法創新為一體的高性能計算平台。
1. 構想背景
金門AI算力中心的構想基於以下幾個核心目標：促進AI技術的研發、加強數據處理能力、推動演算法創新，以及為AI技術的商業化和實際應用打下堅實基礎。該中心設想作為連接兩岸科技界的橋樑，不僅服務於台灣地區，也面向大陸地區，乃至全球的科研機構和企業。
2. 設計原則
創新驅動：金門AI算力中心將秉承創新為核心的設計原則，通過不斷的技術研發和演算法優化，推動AI領域的前沿發展。
可持續發展：在建設和運營過程中，中心將重視環保和能效，採用綠色能源和高效散熱系統，確保科技進步與環境保護的雙贏。
開放合作：該中心將建立開放的合作機制，鼓勵兩岸以及國際上的科研機構、高校和企業參與，共享資源和成果。
人才培養：中心將與各大學院校合作，設立研究生培養和交流項目，培養AI領域的高端人才。
數據安全與隱私保護：在強化數據處理能力的同時，中心將嚴格遵守數據安全和隱私保護的法律法規，確保所有研究活動的合法性和倫理性。
3. 預期影響
金門AI算力中心的建立預計將對兩岸乃至全球的AI技術發展產生深遠影響。它不僅能加速AI研究成果的產出，促進技術創新，還將吸引更多的科研人員和企業投身於AI技術的探索和應用，進一步推動經濟發展和社會進步。

## 5.2金門地理與政治位置對此構想的影響
金門，位於台灣海峽的前沿，擁有獨特的地理和政治地位。這一位置不僅對其自身的發展具有深遠的影響，也對於構想中的金門AI算力中心具有重要的戰略意義。

1. 地理位置的戰略價值
金門的地理位置使其成為連接中國大陸與台灣的重要橋樑，這一地理優勢為AI算力中心提供了唯一的戰略價值。中心可以充分利用這一地理優勢，成為兩岸科技交流與合作的重要平台，促進科技資源的共享和科研成果的快速轉移。
2. 政治環境的挑戰與機遇
金門特殊的政治地位，處於大陸與台灣之間，使其在兩岸關係中扮演著微妙的角色。一方面，這一位置為兩岸科技合作提供了潛在的機遇；另一方面，也可能因兩岸政治氛圍的變化面臨挑戰。建立AI算力中心需仔細評估這一政治環境，規劃靈活的應對策略，確保中心的平穩運行和長遠發展。
3. 加強兩岸合作的可能性
金門AI算力中心的設立在地理與政治上均具有特殊意義，有潛力成為加強兩岸科技合作的重要紐帶。中心的成功建立和運營，將促使兩岸在人才交流、數據共享及技術標準制定等方面達成更廣泛的共識和合作，為兩岸關係的穩定發展注入積極的科技元素。

金門AI算力中心構想的實現，將深受其地理與政治位置的影響。這一位置為中心提供了獨特的戰略價值，既有機遇也有挑戰。審慎評估並利用金門的地理優勢，以及靈活應對政治環境的變化，將是實現中心構想，促進兩岸科技合作的關鍵。

## 5.3 兩岸在人才、數據與硬體上的協同合作潛力

在全球科技競爭的加劇下，美國對於大陸科技企業的制裁，凸顯了兩岸科技合作的必要性。大陸在人工智慧（AI）領域擁有龐大的數據資源與人才庫，但在算力取得上受到限制。相對而言，台灣在硬件製造全產業鏈中具有優勢，且能夠取得英偉達等公司的高端AI晶片。本章將探討在此背景下，兩岸在AI硬件、數據及技術開發方面的互補合作潛力，以及這種合作如何促進區域科技進步和經濟發展。

### **大陸地區的人才與數據優勢**

大陸地區在人才培養和數據積累方面投資巨大，市場龐大的用戶基數為AI演算法的訓練提供了寶貴資源，眾多高校和研究機構為AI領域培養了大量技術人才。

### **台灣硬體製造的全產業鏈**

台灣擁有從設計、製造到封裝、測試的完整半導體產業鏈，且未受到美國制裁的影響。這意味著台灣可以取得英偉達等國際企業的高端AI晶片，保有製造先進計算硬體的能力。台灣在半導體製造領域的自主性和技術實力，為兩岸合作提供了實質性的硬體基礎。

### **兩岸合作的協同潛力**

在當前背景下，兩岸的協同合作不僅可行且具有明顯的互補性。台灣可以利用其在硬體製造上的優勢，為大陸提供必要的AI計算能力，同時，大陸的數據和人才資源也能促進台灣在AI軟體和演算法開發方面的深化。兩岸通過建立合作機制，共享技術和資源，可以共同克服現有的技術限制，推動區域乃至全球AI技術的發展和應用。

兩岸在AI領域的協同合作具有巨大潛力。透過利用各自的優勢資源和技術能力，兩岸不僅能夠有效應對國際科技競爭和政治因素的挑戰，還能共同推動區域科技創新和經濟繁榮，塑造互補合作的典範。未來，這種合作模式有望成為地區乃至全球科技合作的重要途徑。

# 陸、挑戰

在實施金門AI算力中心的過程中，可能會遇到以下幾方面的挑戰：

## 6.1 數據安全和隱私保護

隨著數據成為現代經濟的核心資產，尤其在人工智慧領域，大規模的數據收集和分析成為不可或缺的部分。金門AI算力中心在此背景下，面臨著確保數據安全和維護用戶隱私的重大挑戰。

### **數據安全的複雜性**

數據安全是AI算力中心運營的首要任務之一。隨著數據量的擴大，尤其是敏感數據的處理，中心必須遵守嚴格的數據保護標準，實施先進的安全技術和協議，如加密傳輸、存取控制和網絡隔離等，以防止數據泄露、濫用或損失。

### **隱私保護的必要性**

用戶隱私的保護同樣重要，這不僅是一個技術問題，也是一個法律和倫理問題。AI算力中心需要建立一個透明的隱私保護政策，讓用戶明白其數據如何被收集、使用和分享。同時，中心還需遵循相關的隱私保護法律法規，如「個人資料保護法」等，並實施隱私影響評估和隱私設計原則。

### **法律合規的框架**

隨著新興技術的發展，相關的法律和監管框架也在不斷進化。金門AI算力中心在建設之初，就必須考慮到遵循國際和兩岸的法律法規，包括數據跨境傳輸法律，並且與法律專業人士合作，確保所有運營活動的合法性和合規性。

### **技術創新與風險管理**

為應對這些挑戰，金門AI算力中心需不斷進行技術創新並實施全面的風險管理策略。這包括使用人工智慧來強化安全監控，開發新型的網絡安全技術，以及建立快速響應機制來處理安全事件。

## 6.2 資金投資的籌集

在實踐金門AI算力中心的構想過程中，籌集足夠的投資資金，並確保資金的有效利用，構成了一項重要而挑戰性的任務。要建設一個達到高標準的AI算力中心，不僅需要龐大的初始投資以建立基礎設施、購置先進的硬件設備和開發軟體，還需要持續的財務支持用於日常運營、技術升級和人才培養。

### **資金籌集的途徑**

- **政府資助與補貼**：作為推動科技發展和區域經濟增長的重要項目，金門AI算力中心可以尋求兩岸政府的資助和補貼。這包括直接的政府投資、科技發展基金和特定科技項目的資金支持。
- **私人投資與合作**：除了政府資金外，私人資本的參與對於資金的籌集亦極為重要。可以透過與科技企業、風險投資和私募基金等私人機構合作，吸引他們對AI算力中心項目的投資。
- **國際合作與資金**：鑑於金門AI算力中心具有的國際合作潛力，應探索與國際科技公司、研究機構以及跨國投資基金的合作，爭取國際資金的支援。

### **投資的有效運用**

- **明確投資優先順序**：在資源有限的情況下，明確投資的優先順序是確保資金有效利用的關鍵。這包括優先投資於基礎設施建設、關鍵技術的研發和人才培養等方面。
- **建立嚴格的財務管理制度**：為確保資金的有效運用，金門AI算力中心需建立嚴格的財務管理和監督機制，包括定期的財務審計、項目進度和預算的嚴格控制等。
- **促進產業協同與生態建設**：通過資金的有效運用，不僅要推動AI算力中心自身的建設和發展，也應促進周邊產業的協同和科技生態的構建，實現資金的倍增效應。

籌集足夠的投資資金和確保其有效利用，對於金門AI算力中心的實施過程來說至關重要。通過多渠道籌集資金，並建立嚴謹的管理和監督機制，金門AI算力中心有望實現其宏偉的建設目標，為兩岸乃至全球的AI發展做出貢獻。

## 6.3 兩岸關係的不確定性

面對全球科技競爭加劇的背景，金門AI算力中心作為位於兩岸政治經濟交界點的重要科技項目，在推進過程中必然受到兩岸關係波動的直接影響。因此，如何在複雜且變化莫測的政治環境中確保中心的穩定與持續發展，成為決定該項目成敗的重要關鍵。

兩岸關係的不確定性主要來自於政治立場的差異、國際經貿環境的變動以及地緣政治格局的影響。由於這些不確定因素，金門AI算力中心面臨著投資風險、合作夥伴變動、技術轉移障礙等一系列挑戰。

### **穩定發展的策略**

- **多元化投資來源**：為降低單一投資來源的風險，中心需尋求多元化的資金和技術支援來源，包括國際合作伙伴、私營部門以及非政府組織。
- **強化合法性基礎**：在法律和合規性方面進行紮實的規劃，包括符合兩岸及國際法律的業務運作，可在政治風險加劇時維持中心的正當性和合法運營。
- **建立彈性運作機制**：中心運作需具備高度的彈性與適應性，以快速響應政治環境的變化，包括臨時調整合作策略或業務焦點。
- **推動兩岸科技溝通**：透過積極的科技外交和溝通，加強兩岸科技界的互信與理解，有助於在政治波動中保持合作的穩定性。
- **風險管理和應急準備**：制定全面的風險管理計劃和應急預案，確保在面對政治危機時，能夠保護資產、人員和知識產權，並迅速恢復正常運營。

金門AI算力中心在實施過程中，兩岸關係的不確定性無疑帶來了嚴峻的挑戰。然而，通過有效的策略規劃與風險管理，可在兩岸政治關係波動中保持中心的穩定發展，進而發揮其在兩岸乃至全球科技與經濟合作中的重要作用。

## 6.4 法律法規的遵循

隨著AI技術和數據使用的快速發展，相關的法律法規也在不斷地進行更新和變化，以適應新的技術發展與社會需求。對於金門AI算力中心這樣一個涵蓋多領域應用的大型項目而言，如何在不同法律環境下確保合法合規地運營，成為了一項持續且複雜的挑戰。

### **法律環境的不確定性**

- **法律法規的地域差異**：由於兩岸及國際間在數據保護、隱私權、知識產權等方面的法律法規存在差異，AI算力中心需精準掌握並遵守不同法域的規範要求，這對其法律策略和業務運營均提出了高要求。
- **技術創新與法規滯後**：科技創新的速度往往超過法律法規的更新速度，導致在新興技術應用、跨境數據流動等領域的法律指導不夠明確，增加了運營風險。

### **合法合規運營的策略**

- **建立專業的法律團隊**：配置專業的法律顧問團隊，對兩岸及國際法律進行持續的監測和分析，以指導中心的法律策略和業務決策。
- **加強合規培訓和意識**：定期對中心的管理層和員工進行法律法規和合規操作的培訓，提升全員的法律意識和合規水平。
- **積極參與法規研討和標準制定**：通過參與相關法律法規的研討和國際標準的制定，不僅可以及時掌握法規動態，也可以為中心爭取更有利的運營條件。
- **建立風險管理和應對機制**：制定包括法律風險評估、預防措施和應急計劃在內的全面風險管理和應對機制，以應對法律法規變動可能帶來的影響。

面對法律環境的不確定性和挑戰，金門AI算力中心必須採取積極主動的態度，建立專業的法律團隊、加強合規培訓、參與法規討論和建立風險應對機制，以確保在快速變化的法律環境中保持合法合規的運營。透過這些策略的實施，金門AI算力中心將能在確保合法合規的同時，穩健地推動技術創新和業務發展。

# 柒、 結論與建議

本研究從金門AI算力中心構想的提出、設計原則、實施過程中可能遇到的挑戰等多個維度進行了深入探討。研究發現，金門AI算力中心作為一項創新的科技發展項目，不僅對於促進地區科技進步、提升經濟發展具有重要的推動作用，更在兩岸科技合作與交流中扮演著橋梁的角色，為兩岸關係的穩定發展提供了新的思路與平台。

兩岸合作在人才、數據與技術上的互補性，為金門AI算力中心的成功實施提供了堅實的基礎。透過深化兩岸在AI領域的合作，不僅能促進技術創新與知識共享，更有助於構建更加緊密的經濟聯繫和人文交流，從而增進互信，促進和平發展。

## 7.1 具體建議與未來研究的方向

基於本研究的發現，對金門AI算力中心的未來發展以及兩岸合作提出以下建議：

### **強化政策支持與投資**

建議兩岸政府提供更多政策支持和資金投資，降低項目實施的門檻和風險，並創建更加友好的投資環境。

### **建立持續的人才交流計畫**

兩岸應共同制定和實施人才培養和交流計畫，為AI算力中心提供充足的科研和技術人才。

### **推動數據共享與技術標準化**

在保證數據安全和個人隱私的前提下，促進兩岸數據資源的共享，並參與制定相關技術標準，提升技術互通性和兼容性。

### **加強法律法規的對接與合作**

兩岸應加強在科技法律法規方面的對接與合作，為AI算力中心的合法運營提供有力保障。

### **未來研究方向**

建議未來的研究可以更深入探討兩岸在特定AI應用領域（如智慧醫療、環境監測等）的合作潛力，並針對克服技術轉移和知識產權保護等方面的挑戰提出具體解決方案。

## 7.2 結論

金門AI算力中心的構想不僅對加強兩岸科技合作、推動地區經濟發展具有重要意義，更在促進兩岸關係和平穩定發展中發揮著不可或缺的作用。通過實施上述建議，並持續探索新的合作模式和機會，兩岸可以共同迎接科技創新帶來的挑戰，攜手共創更加繁榮的未來。

---

## 參考文獻

[1] Chang, Y. H. & Yeh, Y. J. Y. (2018). Industry 4.0 and the need for talent: A multiple case study of Taiwan’s companies. International Journal of Product Development, Inderscience Publishers. https://doi.org/10.1504/IJPD.2018.091150
[2] Cho, E. K. (2023). US-China decoupling patterns in supply chains and ecosystems for semiconductors and AI technologies. Korea Institute for Industrial Economics & Trade. https://ssrn.com/abstract=4429715
[3] Danilin, I. V. (2022). The US-China tech war: A dawn of new geopolitics? In Technological Innovation and Security. https://www.nids.mod.go.jp/event/proceedings/symposium/pdf/2021/NIDS_Symposium%202020_EN_web.pdf#page=102
[4] Fang, J. J. M. (2002). The competitive advantage: A case study of Taiwan’s semiconductor industry. Retrieved from MIT Dspace. https://dspace.mit.edu/handle/1721.1/8506
[5] Malkin, A. & He, T. (2023). The geoeconomics of global semiconductor value chains: Extraterritoriality and the US-China technology rivalry. Review of International Political Economy, 1–23. Taylor & Francis. https://doi.org/10.1080/09692290.2023.2245404
[6] Tsai, C. W. (2012). Cross-strait cooperation of information technology: A case study of LED industry. ICSSSM12. https://doi.org/10.1109/ICSSSM.2012.6252270
[7] Hung, J. H. (2009). Enhancing innovation and performance through cross-strait competition and cooperation: The case of Taiwan's information technology industry. ProQuest Dissertations Publishing.
[8] Chen, H. N. (2011). Political economy of cross-strait investments: The Taiwanese high-tech industry as an example. Seoul Journal of Economics. Retrieved from https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1857279
[9] Yang, F., Sun, C., & Huang, G. (2018). Study on cross-strait energy cooperation under the new circumstance. Journal of Cleaner Production, 187, 591-599. https://doi.org/10.1016/j.jclepro.2018.03.209
[10] Clough, R. N. (2001). Growing cross-strait cooperation despite political impasse. American Foreign Policy Interests, 23(5), 233-244. https://doi.org/10.1080/108039201750463335
[11] Center for Strategic and International Studies. (2022). Updated October 7 semiconductor export controls. Retrieved from https://www.csis.org/analysis/updated-october-7-semiconductor-export-controls
[12] Cho, E. K. (2024). AI chips for China face additional US restrictions. The Diplomat. Retrieved from https://thediplomat.com/2024/04/ai-chips-for-china-face-additional-us-restrictions/
[13] Reuters. (2024). U.S. updates export curbs on AI chips and tools to China. Retrieved from https://www.reuters.com/technology/us-commerce-updates-export-curbs-ai-chips-china-2024-03-29/
[14] Bureau of Industry and Security. (n.d.). Entity list. U.S. Department of Commerce. Retrieved from https://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern/entity-list
[15] Federal Register. (2024a). Additions of entities to the entity list. U.S. Government Publishing Office. Retrieved from https://www.federalregister.gov/documents/2024/02/27/2024-03969/additions-of-entities-to-the-entity-list
[16] Federal Register. (2023). Addition of entities to the entity list. U.S. Government Publishing Office. Retrieved from https://www.federalregister.gov/documents/2023/10/11/2023-22536/addition-of-entities-to-the-entity-list
[17] Council on Foreign Relations. (2023). President Biden has banned some U.S. investment in China: Here’s what to know. Retrieved from https://www.cfr.org/in-brief/president-biden-has-banned-some-us-investment-china-heres-what-know
[18] White & Case. (2023). President Biden orders establishment of new program to restrict US outbound investment in certain tech sectors in China. Retrieved from https://www.whitecase.com/insight-alert/president-biden-orders-establishment-new-program-restrict-us-outbound-investment
[19] China Briefing. (2023). US ban on new investments in targeted high-tech sectors. Retrieved from https://www.china-briefing.com/news/us-executive-order-ban-new-investments-in-china-sensitive-high-tech-sectors/
[20] Center for Strategic & International Studies. (n.d.). Balancing the ledger: Export controls on U.S. chip technology to China. Retrieved from https://www.csis.org/analysis/balancing-ledger-export-controls-us-chip-technology-china
[21] Access Partnership. (2024). Tech policy trends 2024: The US-China rivalry's impact on global trade. Retrieved from https://accesspartnership.com/tech-policy-trends-2024-the-us-china-rivalrys-impact-on-global-trade/
[22] East Asia Forum. (2024). Examining US export controls against China. Retrieved from https://eastasiaforum.org/2024/03/16/examining-us-export-controls-against-china/
[23] Pillsbury Winthrop Shaw Pittman. (n.d.). Recent updates on foreign investment restrictions and export controls. Retrieved from https://www.pillsburylaw.com/en/news-and-insights/semiconductors-quantum-computing-ai-export-controls-foreign-investment.html
[24] Kennedy, S., & Johnson, C. K. (2023). China's new strategy for waging the microchip tech war. Center for Strategic & International Studies. Retrieved from https://www.csis.org/analysis/chinas-new-strategy-waging-microchip-tech-war
[25] Rosen, D. H. (2024). US Pathways to Regulating China-Sourced Legacy Chips. Rhodium Group. Retrieved from https://rhg.com/research/thin-ice-us-pathways-to-regulating-china-sourced-legacy-chips/
[26] Kennedy, S., & Johnson, C. K. (2023). China's new strategy for waging the microchip tech war. Center for Strategic & International Studies. Retrieved from https://www.csis.org/analysis/chinas-new-strategy-waging-microchip-tech-war
[27] SCMP. (2024). China's two sessions 2024: top legislature vows to overcome US tech and science sanctions. Retrieved from https://www.scmp.com/news/china/science/article/3254142/chinas-two-sessions-2024-top-legislature-vows-overcome-us-tech-and-science-sanctions
[28] MERICS. (n.d.). China's AI development model in an era of technological deglobalization. Retrieved from https://merics.org/en/report/chinas-ai-development-model-era-technological-deglobalization
[29] NBR. (n.d.). China's tech policies and development: Responding to great power competition. Retrieved from https://www.nbr.org/publication/chinas-tech-policies-and-development-responding-to-great-power-competition/
[30] Taiwan Chip-based Industrial Innovation Program. (n.d.). Retrieved from https://english.ey.gov.tw/News3/9E5540D592A5FECD/e4e0680d-0ca2-4239-9e14-34716721366f
[31] EDN Asia. (n.d.). Taiwan sets sight on cultivating IC design talent. Retrieved from https://www.ednasia.com/taiwan-sets-sight-on-cultivating-ic-design-talent/
[32] Taiwan Semiconductor Manufacturing Company Limited. (n.d.). Innovation Management. Retrieved from https://esg.tsmc.com/en-US/file/public/e-r1-anInnovationPioneer_1.pdf
[33] Runtime. (n.d.). Chip companies worried about war wanted a new Taiwan – now they're investing in Israel. Retrieved from https://www.runtime.news/chip-companies-worried-about-war-wanted-a-new-taiwan-now-theyre-investing-in-israel/
[34] CNBC. (2024). Taiwan plays a 'very crucial role' in AI supply chain, says TWSE chief. Retrieved from https://www.cnbc.com/2024/04/19/taiwan-plays-very-crucial-role-in-ai-supply-chain-says-twse-chief.html
[35] Oxford Economics. (n.d.). The macro impact of the AI boom in Taiwan and South Korea. Retrieved from https://www.oxfordeconomics.com/resource/the-macro-impact-of-the-ai-boom-in-taiwan-and-south-korea/
[36] Stimson Center. (2022). Semiconductors and Taiwan's “Silicon Shield”. Retrieved from https://www.stimson.org/2022/semiconductors-and-taiwans-silicon-shield/
