// ==UserScript==
// @name        Youtube ( New Layout & Downloader )
// @name:zh-CN  Youtube ( New Layout & Downloader )
// @name:zh-TW  Youtube ( New Layout & Downloader )
// @name:ar     Youtube ( New Layout & Downloader )
// @name:bg     Youtube ( New Layout & Downloader )
// @name:cs     Youtube ( New Layout & Downloader )
// @name:da     Youtube ( New Layout & Downloader )
// @name:de     Youtube ( New Layout & Downloader )
// @name:el     Youtube ( New Layout & Downloader )
// @name:en     Youtube ( New Layout & Downloader )
// @name:eo     Youtube ( New Layout & Downloader )
// @name:es     Youtube ( New Layout & Downloader )
// @name:es-419 Youtube ( New Layout & Downloader )
// @name:fi     Youtube ( New Layout & Downloader )
// @name:fr     Youtube ( New Layout & Downloader )
// @name:fr-CA  Youtube ( New Layout & Downloader )
// @name:he     Youtube ( New Layout & Downloader )
// @name:hr     Youtube ( New Layout & Downloader )
// @name:hu     Youtube ( New Layout & Downloader )
// @name:id     Youtube ( New Layout & Downloader )
// @name:it     Youtube ( New Layout & Downloader )
// @name:ja     Youtube ( New Layout & Downloader )
// @name:ka     Youtube ( New Layout & Downloader )
// @name:ko     Youtube ( New Layout & Downloader )
// @name:nb     Youtube ( New Layout & Downloader )
// @name:nl     Youtube ( New Layout & Downloader )
// @name:pl     Youtube ( New Layout & Downloader )
// @name:pt-BR  Youtube ( New Layout & Downloader )
// @name:ro     Youtube ( New Layout & Downloader )
// @name:ru     Youtube ( New Layout & Downloader )
// @name:sv     Youtube ( New Layout & Downloader )
// @name:th     Youtube ( New Layout & Downloader )
// @name:tr     Youtube ( New Layout & Downloader )
// @name:uk     Youtube ( New Layout & Downloader )
// @name:ug     Youtube ( New Layout & Downloader )
// @name:vi     Youtube ( New Layout & Downloader )
// @description       Optimize the video playback page by placing the comments section on the right side of the video player for a more comfortable and convenient browsing experience. At the same time, the script can also skip video ads~
// @description:zh-CN 优化视频播放页面，将评论区放在视频播放器右侧，可以边看视频边浏览评论，体验更加舒适；自动移除广告，跳过视频广告；视频下载；其他界面优化等~
// @description:zh-TW 優化視頻播放頁面，將評論區放在視頻播放器右側，可以邊看視頻邊瀏覽評論，體驗更加舒適；自動移除廣告，跳過視頻廣告；視頻下載；其他界面優化等~
// @description:ar    قم بتحسين صفحة تشغيل الفيديو من خلال وضع قسم التعليقات على الجانب الأيمن من مشغل الفيديو لتجربة تصفح أكثر راحة ومريحة.في الوقت نفسه ، يمكن للنص أيضًا تخطي إعلانات الفيديو ~
// @description:bg    Оптимизирайте страницата за възпроизвеждане на видео, като поставите секцията за коментари от дясната страна на видео плейъра за по -удобно и удобно изживяване на сърфиране.В същото време скриптът може да пропусне и видеореклами ~
// @description:cs    Optimalizujte stránku přehrávání videa umístěním sekce komentářů na pravé straně přehrávače videa pro pohodlnější a pohodlnější zážitek z prohlížení.Současně může skript také přeskočit videoreklamy ~
// @description:da    Optimer videospilningssiden ved at placere kommentarfeltet på højre side af videoafspilleren for en mere behagelig og praktisk browsingoplevelse.På samme tid kan scriptet også springe videoannoncer over ~
// @description:de    Optimieren Sie die Video -Wiedergabeseite, indem Sie den Kommentarbereich auf der rechten Seite des Videoplayers für ein komfortableres und bequemeres Browsing -Erlebnis platzieren.Gleichzeitig kann das Skript auch Videoanzeigen überspringen ~
// @description:el    Βελτιστοποιήστε τη σελίδα αναπαραγωγής βίντεο τοποθετώντας την ενότητα σχολίων στη δεξιά πλευρά της αναπαραγωγής βίντεο για μια πιο άνετη και βολική εμπειρία περιήγησης.Ταυτόχρονα, το σενάριο μπορεί επίσης να παραλείψει διαφημίσεις βίντεο ~
// @description:en    Optimize the video playback page by placing the comments section on the right side of the video player for a more comfortable and convenient browsing experience. At the same time, the script can also skip video ads~
// @description:eo    Optimumigu la video -reproduktan paĝon metante la sekcion de komentoj dekstre de la videoludilo por pli komforta kaj oportuna foliumada sperto.Samtempe la skripto ankaŭ povas preterlasi filmetajn reklamojn ~
// @description:es    Optimice la página de reproducción de video colocando la sección de comentarios en el lado derecho del reproductor de video para una experiencia de navegación más cómoda y conveniente.Al mismo tiempo, el script también puede omitir anuncios de video ~
// @description:fi    Optimoi videotoistosivu asettamalla videosoittimen oikealle puolelle kommenttiosa mukavamman ja kätevämmän selauskokemuksen saamiseksi.Samanaikaisesti komentosarja voi myös ohittaa videomainokset ~
// @description:fr    Optimisez la page de lecture vidéo en plaçant la section des commentaires sur le côté droit du lecteur vidéo pour une expérience de navigation plus confortable et plus pratique.En même temps, le script peut également sauter des annonces vidéo ~
// @description:fr-CA Optimisez la page de lecture vidéo en plaçant la section des commentaires sur le côté droit du lecteur vidéo pour une expérience de navigation plus confortable et plus pratique.En même temps, le script peut également sauter des annonces vidéo ~
// @description:he    ערוך אופטימיזציה של דף הפעלת הווידיאו על ידי הצבת קטע התגובות בצד ימין של נגן הווידיאו לחוויית גלישה נוחה ונוחה יותר.יחד עם זאת, התסריט יכול גם לדלג על מודעות וידאו ~
// @description:hr    Optimizirajte stranicu za reprodukciju videozapisa postavljanjem odjeljka s komentarima na desnu stranu video playera za ugodnije i prikladnije iskustvo pregledavanja.Istodobno, skripta također može preskočiti video oglase ~
// @description:hu    Optimalizálja a Video lejátszási oldalt azáltal, hogy a megjegyzés részt a videolejátszó jobb oldalára helyezi a kényelmesebb és kényelmesebb böngészési élmény érdekében.Ugyanakkor a szkript kihagyhatja a videohirdetéseket ~
// @description:id    Optimalkan halaman pemutaran video dengan menempatkan bagian komentar di sisi kanan pemutar video untuk pengalaman penelusuran yang lebih nyaman dan nyaman.Pada saat yang sama, skrip juga dapat melewati iklan video ~
// @description:it    Ottimizza la pagina di riproduzione video posizionando la sezione commenti sul lato destro del lettore video per un'esperienza di navigazione più comoda e conveniente.Allo stesso tempo, lo script può anche saltare gli annunci video ~
// @description:ja    ビデオプレーヤーの右側にコメントセクションを配置して、より快適で便利なブラウジングエクスペリエンスを提供して、ビデオ再生ページを最適化します。同時に、スクリプトはビデオ広告をスキップすることもできます〜
// @description:ka    ვიდეო აღწარმოების გვერდის ოპტიმიზაცია ვიდეო პლეერის მარჯვენა მხარეს კომენტარების განყოფილების განთავსებით უფრო კომფორტული და მოსახერხებელი დათვალიერების გამოცდილებისთვის.ამავე დროს, სკრიპტს ასევე შეუძლია გამოტოვოთ ვიდეო რეკლამები
// @description:ko    보다 편안하고 편리한 탐색 경험을 위해 비디오 플레이어의 오른쪽에 댓글 섹션을 배치하여 비디오 재생 페이지를 최적화하십시오.동시에 스크립트는 비디오 광고를 건너 뛸 수 있습니다 ~
// @description:nb    Optimaliser videoavspillingssiden ved å plassere kommentarfeltet på høyre side av videospilleren for en mer behagelig og praktisk nettleseropplevelse.Samtidig kan manuset også hoppe over videoannonser ~
// @description:nl    Optimaliseer de video -afspeelpagina door het commentaargedeelte aan de rechterkant van de videospeler te plaatsen voor een comfortabelere en handiger browse -ervaring.Tegelijkertijd kan het script ook videoadvertenties overslaan ~
// @description:pl    Zoptymalizuj stronę odtwarzania wideo, umieszczając sekcję komentarzy po prawej stronie odtwarzacza wideo, aby uzyskać wygodniejsze i wygodniejsze przeglądanie.Jednocześnie skrypt może również pominąć reklamy wideo ~
// @description:pt-BR Otimize a página de reprodução de vídeo colocando a seção de comentários no lado direito do player de vídeo para uma experiência de navegação mais confortável e conveniente.Ao mesmo tempo, o script também pode pular anúncios de vídeo ~
// @description:ro    Optimizați pagina de redare video, plasând secțiunea de comentarii în partea dreaptă a playerului video pentru o experiență de navigare mai confortabilă și mai convenabilă.În același timp, scenariul poate sări și reclame video ~
// @description:ru    Оптимизируйте страницу воспроизведения видео, поместив раздел комментариев в правую сторону видеоплеере для более удобного и удобного опыта просмотра.В то же время, сценарий также может пропустить видеообъявления ~
// @description:sv    Optimera sidan av videouppspelning genom att placera kommentarsavsnittet på höger sida av videospelaren för en mer bekväm och bekväm surfupplevelse.Samtidigt kan skriptet också hoppa över videoannonser ~
// @description:th    เพิ่มประสิทธิภาพหน้าการเล่นวิดีโอโดยวางส่วนความคิดเห็นทางด้านขวาของเครื่องเล่นวิดีโอเพื่อประสบการณ์การท่องเว็บที่สะดวกสบายและสะดวกสบายยิ่งขึ้นในเวลาเดียวกันสคริปต์ยังสามารถข้ามโฆษณาวิดีโอ ~
// @description:tr    Daha rahat ve kullanışlı bir tarama deneyimi için video oynatıcının sağ tarafına yorum bölümünü yerleştirerek video oynatma sayfasını optimize edin.Aynı zamanda, komut dosyası video reklamları da atlayabilir ~
// @description:uk    Оптимізуйте сторінку відтворення відео, розмістивши розділ коментарів у правій частині відеоплеєра для більш комфортного та зручного досвіду перегляду.У той же час, сценарій також може пропустити відеорекламу ~
// @description:ug    سىن بۆلەكلىرىنى تېخىمۇ راھەت ۋە قۇلايلىق كۆرۈش تەجرىبىسىنىڭ ئوڭ تەرىپىدە سىناش تاختىسىنى ئەلالاشتۇرۇش بېتىنى ئەلالاشتۇرۇش ئارقىلىق سىناش بېتىنى ئەلالاشتۇرۇش ئارقىلىق سىن ئويناش بېتىنى ئەلالاشتۇرۇش.شۇنىڭ بىلەن بىر ۋاقىتتا, بۇ seal should سىن ئېلانىنى ئاتلاپ كەتتى
// @description:vi    Tối ưu hóa trang phát lại video bằng cách đặt phần bình luận ở phía bên phải của trình phát video để có trải nghiệm duyệt web thoải mái và thuận tiện hơn.Đồng thời, tập lệnh cũng có thể bỏ qua quảng cáo video ~
// @namespace FunnyMonkey_NameScope
// @version   2.0.2
// @author    FunnyMonkey & xkabctt
// @icon      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwRJREFUaEPtWUtOAzEMTQZRcQkqlnCKlpO1PRnlFLBEcAkEao0c4siTyceTDNMG6AraJPbL8z9aNf7Rjeuv/gaAp5urtToe17Oy1XX7u5f3fU5mkoGn5WKrldrkDvnJ30Gp3d3rxzYmIwgAb1wfDhul9by3HtMSYA8XF7sQI0EAz9eXDznloevu8UC3FmB/+/Z5b8Afjw+Ts2LP988dABCbjacwUS3eX4AwZE4DAM/LBYjO9gEQI9L9IiHDRbevHz2de/+Mpd+Z0XIBdLC7AGu3GL1cILDfkX/hflRxjMmRTILWBzA26hALy8UWIwWZjzOnm6s1+om7GLYeQQ1AC1jxzWgSACSXHJozw/9WZwdAKcUpJfPBm6Vbpxsz4JRSJlJZpk/PAAPAo09bAGym/AcgcGBcMq0TswN/FQPk2AiKCjHj4Cz5YX7o/XZODJCipJNjh9UzGKWoOBNn/58wIaMkwHfdzqtX+s7/ntbj2tC+DBOT+4CQ+cmW1QPAekbrR9V10W4p1kmZzi70Yd1eroGqAuAXUpNdq3dQqh8pBpBr7aYEk6qKywB44S+kbKxvdQMBYZPuF4a+rCIA2W4r0u6hcL/EljIVM6M6AHa8ogFWJmQyh446rq08x5pgrDWtAuAnJolSEgZ4UnMyIsOBMgC2300B4KUC0W/KauryMGnZRNfrIdgEhCsXc+STAsD8YeK815mhUmSWro46NwZcZ8aKuh5TVuEmAZjphJ1e8IFAaFpxMhNKMcBDa5MA/GGVyR9N+sDhsKEh7ux5gMIoKkC2y8NoyoSCPhAZspX5gDejDyWnUFfVywOskUnZOW9HQ6V1EYBBi2jfDzCuUxFnQAGskAETUQBWbtyOpoE9BDZtdg2VHrTP4GNvAGW1UGy2nyjWpMXZ2HWxPjk53EUh0Y2Zp56xCqbWp94YkuN1Xv6GBEiKt1ogKeVFDxyGhdwTk50mkF3XKG1qIPqk3uSkT0wuibT8yOeXzTU3XLs3Z7ail/pmH7prb2+O/SIG5lCkVEbzAL4A07+gbQ8x85sAAAAASUVORK5CYII=
// @include   *://www.youtube.com/**
// @exclude   *://accounts.youtube.com/*
// @exclude   *://www.youtube.com/live_chat_replay*
// @exclude   *://www.youtube.com/persist_identity*
// @connect   www.google-analytics.com
// @license   MIT
// @run-at    document-start
// @grant     GM_registerMenuCommand
// @grant     GM_openInTab
// @grant     GM.openInTab
// @grant     GM_addStyle
// @grant     GM_setValue
// @grant     GM_getValue
// @grant     GM_xmlhttpRequest
// @grant     GM_download
// @grant     GM_setClipboard
// @grant     GM_info
// @grant     unsafeWindow
// @downloadURL https://raw.githubusercontent.com/ahtungko/tampScript/main/youtube.user.js
// @updateURL https://raw.githubusercontent.com/ahtungko/tampScript/main/youtube.user.js
// ==/UserScript==
var css_248z$1 = "@keyframes relatedElementProvided{0%{background-position-x:3px}to{background-position-x:4px}}html[tabview-loaded=icp] #related.ytd-watch-flexy{animation:relatedElementProvided 1ms linear 0s 1 normal forwards}html[tabview-loaded=icp] #right-tabs #related.ytd-watch-flexy,html[tabview-loaded=icp] #right-tabs ytd-expander#expander,html[tabview-loaded=icp] [hidden] #related.ytd-watch-flexy,html[tabview-loaded=icp] [hidden] ytd-expander#expander,html[tabview-loaded=icp] ytd-comments ytd-expander#expander{animation:initial}#secondary.ytd-watch-flexy{position:relative}#secondary-inner.style-scope.ytd-watch-flexy{height:100%}secondary-wrapper{border:0;box-sizing:border-box;contain:strict;flex-wrap:nowrap;height:100%;left:0;max-height:calc(100vh - var(--ytd-toolbar-height, 56px));padding:0;padding-bottom:var(--ytd-margin-6x);padding-right:var(--ytd-margin-6x);padding-top:var(--ytd-margin-6x);position:absolute;right:0;top:0}#right-tabs,secondary-wrapper{display:flex;flex-direction:column;margin:0}#right-tabs{flex-grow:1;padding:0;position:relative}[tyt-tab=\"\"] #right-tabs{flex-grow:0}[tyt-tab=\"\"] #right-tabs .tab-content{border:0}#right-tabs .tab-content{flex-grow:1}ytd-watch-flexy[hide-default-text-inline-expander] #primary.style-scope.ytd-watch-flexy ytd-text-inline-expander{display:none}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden{--comment-pre-load-sizing:90px;border:0;contain:strict;display:block!important;height:var(--comment-pre-load-sizing)!important;left:2px;margin:0;overflow:hidden;padding:0;pointer-events:none!important;position:fixed!important;top:2px;visibility:collapse;width:var(--comment-pre-load-sizing)!important;z-index:-1}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>*{display:none!important}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections{border:0;contain:strict;display:block!important;height:var(--comment-pre-load-sizing);margin:0;overflow:hidden;padding:0;width:var(--comment-pre-load-sizing)}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>*{display:none!important}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents{border:0;contain:strict;display:flex!important;flex-direction:row;gap:60px;height:var(--comment-pre-load-sizing);margin:0;overflow:hidden;padding:0;width:var(--comment-pre-load-sizing)}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents>*{border:0;box-sizing:content-box;contain:strict;display:block!important;height:var(--comment-pre-load-sizing);margin:calc(var(--comment-pre-load-sizing)*2)!important;overflow:hidden;padding:0;visibility:collapse!important;width:var(--comment-pre-load-sizing)}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents>:empty{box-sizing:content-box;contain:strict;display:none!important;height:0;margin:0!important;overflow:hidden;visibility:collapse!important;width:0}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents>ytd-continuation-item-renderer{box-sizing:initial;contain:strict;display:block!important;height:1px;margin:0!important;overflow:initial;visibility:collapse!important;width:1px}ytd-watch-flexy:not([keep-comments-scroller]) #tab-comments.tab-content-hidden ytd-comments#comments>ytd-item-section-renderer#sections>#contents>*>*{box-sizing:content-box;contain:strict;display:none!important;height:0;margin:0!important;overflow:hidden;visibility:collapse!important;width:0}#right-tabs #material-tabs{border:1px solid var(--ytd-searchbox-legacy-border-color);display:flex;overflow:hidden;padding:0;position:relative}[tyt-tab] #right-tabs #material-tabs{border-radius:var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1) var(--tyt-rounded-a1)}[tyt-tab^=\"#\"] #right-tabs #material-tabs{border-radius:var(--tyt-rounded-a1) var(--tyt-rounded-a1) 0 0}ytd-watch-flexy[flexy]:not([is-two-columns_]) #right-tabs #material-tabs{outline:0}#right-tabs #material-tabs a.tab-btn[tyt-tab-content]>*{pointer-events:none}#right-tabs #material-tabs a.tab-btn[tyt-tab-content]>.font-size-right{display:none;pointer-events:auto}ytd-watch-flexy #right-tabs .tab-content{border:1px solid var(--ytd-searchbox-legacy-border-color);border-radius:0 0 var(--tyt-rounded-a1) var(--tyt-rounded-a1);border-top:0;box-sizing:border-box;display:block;display:flex;flex-direction:row;overflow:hidden;padding:0;position:relative;top:0}ytd-watch-flexy:not([is-two-columns_]) #right-tabs .tab-content{height:100%}ytd-watch-flexy #right-tabs .tab-content-cld{--tab-content-padding:var(--ytd-margin-4x);box-sizing:border-box;contain:layout paint;display:block;overflow:auto;padding:var(--tab-content-padding);position:relative;width:100%}#right-tabs,.tab-content,.tab-content-cld{animation:none;transition:none}ytd-watch-flexy[is-two-columns_] #right-tabs .tab-content-cld{contain:size layout paint style;height:100%;position:absolute;width:100%}ytd-watch-flexy #right-tabs .tab-content-cld.tab-content-hidden{contain:size layout paint style;display:none;width:100%}@supports (color:var(--tabview-tab-btn-define )){ytd-watch-flexy #right-tabs .tab-btn{background:var(--yt-spec-general-background-a)}html{--tyt-tab-btn-flex-grow:1;--tyt-tab-btn-flex-basis:0%;--tyt-tab-bar-color-1-def:#ff4533;--tyt-tab-bar-color-2-def:var(--yt-brand-light-red);--tyt-tab-bar-color-1:var(--main-color,var(--tyt-tab-bar-color-1-def));--tyt-tab-bar-color-2:var(--main-color,var(--tyt-tab-bar-color-2-def))}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]{--tyt-tab-btn-color:var(--yt-spec-text-secondary);background-color:var(--ytd-searchbox-legacy-button-color);border:0;border-bottom:4px solid transparent;color:var(--tyt-tab-btn-color);cursor:pointer;display:inline-block;flex-basis:0%;flex-basis:var(--tyt-tab-btn-flex-basis);flex-grow:1;flex-grow:var(--tyt-tab-btn-flex-grow);flex-shrink:1;font-size:12px;font-weight:500;line-height:18px;overflow:hidden;padding:14px 8px 10px;position:relative;text-align:center;text-decoration:none;text-overflow:clip;text-transform:uppercase;text-transform:var(--yt-button-text-transform,inherit);transition:border .2s linear .1s;white-space:nowrap}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg{fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);color:var(--yt-button-color,inherit);height:18px;margin-right:0;opacity:.5;padding-right:0;vertical-align:bottom}ytd-watch-flexy #right-tabs .tab-btn{--tabview-btn-txt-ml:8px}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"]{--tabview-btn-txt-ml:0px}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]>svg+span{margin-left:var(--tabview-btn-txt-ml)}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content] svg{pointer-events:none}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active{--tyt-tab-btn-color:var(--yt-spec-text-primary);background-color:var(--ytd-searchbox-legacy-button-focus-color);border-bottom-color:var(--tyt-tab-bar-color-1);border-bottom:2px solid var(--tyt-tab-bar-color-2);font-weight:500;outline:0}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].active svg{opacity:.9}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover{--tyt-tab-btn-color:var(--yt-spec-text-primary);background-color:var(--ytd-searchbox-legacy-button-hover-color)}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]:not(.active):hover svg{opacity:.9}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content]{user-select:none!important}ytd-watch-flexy #right-tabs .tab-btn[tyt-tab-content].tab-btn-hidden{display:none}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"],ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"]:hover{--tyt-tab-btn-color:var(--yt-spec-icon-disabled)}ytd-watch-flexy[tyt-comment-disabled] #right-tabs .tab-btn[tyt-tab-content=\"#tab-comments\"] span#tyt-cm-count:empty{display:none}ytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty:after{color:currentColor;display:inline-block;font-size:inherit;text-align:left;transform:scaleX(.8);width:4em}}@supports (color:var(--tyt-cm-count-define )){ytd-watch-flexy{--tyt-x-loading-content-letter-spacing:2px}html{--tabview-text-loading:\"Loading\";--tabview-text-fetching:\"Fetching\";--tabview-panel-loading:var(--tabview-text-loading)}html:lang(ja){--tabview-text-loading:\"読み込み中\";--tabview-text-fetching:\"フェッチ..\"}html:lang(ko){--tabview-text-loading:\"로딩..\";--tabview-text-fetching:\"가져오기..\"}html:lang(zh-Hant){--tabview-text-loading:\"載入中\";--tabview-text-fetching:\"擷取中\"}html:lang(zh-Hans){--tabview-text-loading:\"加载中\";--tabview-text-fetching:\"抓取中\"}html:lang(ru){--tabview-text-loading:\"Загрузка\";--tabview-text-fetching:\"Получение\"}ytd-watch-flexy #right-tabs .tab-btn span#tyt-cm-count:empty:after{content:var(--tabview-text-loading);letter-spacing:var(--tyt-x-loading-content-letter-spacing)}}@supports (color:var(--tabview-font-size-btn-define )){.font-size-right{align-content:space-evenly;bottom:0;display:inline-flex;flex-direction:column;justify-content:space-evenly;padding:4px 0;pointer-events:none;position:absolute;right:0;top:0;width:16px}html body ytd-watch-flexy.style-scope .font-size-btn{user-select:none!important}.font-size-btn{--tyt-font-size-btn-display:none;background-color:var(--yt-spec-badge-chip-background);box-sizing:border-box;color:var(--yt-spec-text-secondary);cursor:pointer;display:var(--tyt-font-size-btn-display,none);font-family:Menlo,Lucida Console,Monaco,Consolas,monospace;font-weight:900;height:12px;line-height:100%;margin:0;padding:0;pointer-events:all;position:relative;transform-origin:left top;transition:background-color 90ms linear,color 90ms linear;width:12px}.font-size-btn:hover{background-color:var(--yt-spec-text-primary);color:var(--yt-spec-general-background-a)}@supports (zoom:0.5){.tab-btn .font-size-btn{--tyt-font-size-btn-display:none}.tab-btn.active:hover .font-size-btn{--tyt-font-size-btn-display:inline-block}}}body ytd-watch-flexy:not([is-two-columns_]) #columns.ytd-watch-flexy{flex-direction:column}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy{box-sizing:border-box;display:block;width:100%}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper{contain:content;height:auto;padding-left:var(--ytd-margin-6x)}body ytd-watch-flexy:not([is-two-columns_]) #secondary.ytd-watch-flexy secondary-wrapper #right-tabs{overflow:auto}[tyt-chat=\"+\"] secondary-wrapper>[tyt-chat-container]{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0}[tyt-chat=\"+\"] secondary-wrapper>[tyt-chat-container]>#chat{flex-grow:1}ytd-watch-flexy[is-two-columns_]:not([theater]) #columns.style-scope.ytd-watch-flexy{min-height:calc(100vh - var(--ytd-toolbar-height, 56px))}ytd-watch-flexy[is-two-columns_] ytd-live-chat-frame#chat{height:auto!important;min-height:auto!important}ytd-watch-flexy[tyt-tab^=\"#\"]:not([is-two-columns_]):not([tyt-chat=\"+\"]) #right-tabs{min-height:var(--ytd-watch-flexy-chat-max-height)}body ytd-watch-flexy:not([is-two-columns_]) #chat.ytd-watch-flexy{margin-top:0}body ytd-watch-flexy:not([is-two-columns_]) ytd-watch-metadata.ytd-watch-flexy{margin-bottom:0}ytd-watch-metadata.ytd-watch-flexy ytd-metadata-row-container-renderer{display:none}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#left-arrow-container.ytd-video-description-infocards-section-renderer>#left-arrow,#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#right-arrow-container.ytd-video-description-infocards-section-renderer>#right-arrow{border:6px solid transparent;opacity:.65}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#left-arrow-container.ytd-video-description-infocards-section-renderer>#left-arrow:hover,#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>#right-arrow-container.ytd-video-description-infocards-section-renderer>#right-arrow:hover{opacity:1}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>div#left-arrow-container:before{background:transparent;content:\"\";display:block;height:40px;left:-20px;position:absolute;top:0;width:40px;z-index:-1}#tab-info #social-links.style-scope.ytd-video-description-infocards-section-renderer>div#right-arrow-container:before{background:transparent;content:\"\";display:block;height:40px;position:absolute;right:-20px;top:0;width:40px;z-index:-1}body ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0}body ytd-watch-flexy[is-two-columns_][tyt-egm-panel_] #columns.style-scope.ytd-watch-flexy #panels.style-scope.ytd-watch-flexy ytd-engagement-panel-section-list-renderer[target-id][visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED]{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0;height:auto;max-height:none;min-height:auto}secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] #body.ytd-transcript-renderer:not(:empty),secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] #content.ytd-transcript-renderer:not(:empty),secondary-wrapper [visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED] ytd-transcript-renderer:not(:empty){flex-grow:1;height:auto;max-height:none;min-height:auto}secondary-wrapper #content.ytd-engagement-panel-section-list-renderer{position:relative}@supports (contain:strict){secondary-wrapper #content.ytd-engagement-panel-section-list-renderer>[panel-target-id]:only-child{contain:strict;max-height:100%}}@supports not (contain:strict){secondary-wrapper #content.ytd-engagement-panel-section-list-renderer>[panel-target-id]:only-child{max-height:100%;position:absolute}}body ytd-watch-flexy[theater] #secondary.ytd-watch-flexy{margin-top:0;padding-top:var(--ytd-margin-2x)}body ytd-watch-flexy[theater] secondary-wrapper{padding-top:var(--ytd-margin-2x)}body ytd-watch-flexy[theater] #chat.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}#tab-comments ytd-comments#comments [field-of-cm-count]{margin-top:0}#tab-info [class]:last-child{margin-bottom:0;padding-bottom:0}#tab-info ytd-rich-metadata-row-renderer ytd-rich-metadata-renderer{max-width:none}ytd-watch-flexy[is-two-columns_] secondary-wrapper #chat.ytd-watch-flexy{margin-bottom:var(--ytd-margin-3x)}ytd-watch-flexy[tyt-tab] tp-yt-paper-tooltip{contain:content;white-space:nowrap}ytd-watch-info-text tp-yt-paper-tooltip.style-scope.ytd-watch-info-text{margin-bottom:-300px;margin-top:-96px}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata{font-size:1.2rem;line-height:1.8rem}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata yt-animated-rolling-number{font-size:inherit}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata #info-container.style-scope.ytd-watch-info-text{align-items:center}ytd-watch-flexy[hide-default-text-inline-expander]{--tyt-bottom-watch-metadata-margin:6px}[hide-default-text-inline-expander] #bottom-row #description.ytd-watch-metadata>#description-inner.ytd-watch-metadata{margin:6px 12px}[hide-default-text-inline-expander] ytd-watch-metadata[title-headline-xs] h1.ytd-watch-metadata{font-size:1.8rem}ytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-merch-shelf-renderer{border:0;margin:0;padding:0}ytd-watch-flexy[is-two-columns_][hide-default-text-inline-expander] #below.style-scope.ytd-watch-flexy ytd-watch-metadata.ytd-watch-flexy{margin-bottom:6px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--horizontal .yt-video-attribute-view-model__link-container .yt-video-attribute-view-model__hero-section{flex-shrink:0}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model__overflow-menu{background:var(--yt-emoji-picker-category-background-color);border-radius:99px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-square.yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{max-height:128px}#tab-info yt-video-attribute-view-model .yt-video-attribute-view-model--image-large .yt-video-attribute-view-model__hero-section{max-width:128px}#tab-info ytd-reel-shelf-renderer #items.yt-horizontal-list-renderer ytd-reel-item-renderer.yt-horizontal-list-renderer{max-width:142px}ytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #date-text.style-scope.ytd-watch-info-text,ytd-watch-info-text#ytd-watch-info-text.style-scope.ytd-watch-metadata #view-count.style-scope.ytd-watch-info-text{align-items:center}ytd-watch-info-text:not([detailed]) #info.ytd-watch-info-text a.yt-simple-endpoint.yt-formatted-string{pointer-events:none}body ytd-app>ytd-popup-container>tp-yt-iron-dropdown>#contentWrapper>[slot=dropdown-content]{backdrop-filter:none}#tab-info [tyt-clone-refresh-count]{overflow:visible!important}#tab-info #items.ytd-horizontal-card-list-renderer yt-video-attribute-view-model.ytd-horizontal-card-list-renderer{contain:layout}#tab-info #thumbnail-container.ytd-structured-description-channel-lockup-renderer,#tab-info ytd-media-lockup-renderer[is-compact] #thumbnail-container.ytd-media-lockup-renderer{flex-shrink:0}secondary-wrapper ytd-donation-unavailable-renderer{--ytd-margin-6x:var(--ytd-margin-2x);--ytd-margin-5x:var(--ytd-margin-2x);--ytd-margin-4x:var(--ytd-margin-2x);--ytd-margin-3x:var(--ytd-margin-2x)}[tyt-no-less-btn] #less{display:none}.tyt-metadata-hover-resized #analytics-button,.tyt-metadata-hover-resized #purchase-button,.tyt-metadata-hover-resized #sponsor-button,.tyt-metadata-hover-resized #subscribe-button{display:none!important}.tyt-metadata-hover #upload-info{flex-basis:100vw;flex-shrink:0;max-width:max-content;min-width:max-content}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #playlist-thumbnail.style-scope.ytd-structured-description-playlist-lockup-renderer{max-width:100%}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #lockup-container.ytd-structured-description-playlist-lockup-renderer{padding:1px}#tab-info ytd-structured-description-playlist-lockup-renderer[collections] #thumbnail.ytd-structured-description-playlist-lockup-renderer{outline:1px solid hsla(0,0%,50%,.5)}ytd-live-chat-frame#chat[collapsed] ytd-message-renderer~#show-hide-button.ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";scription-pla
ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";
ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";


ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";

ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";


ytd-live-chat-frame>ytd-toggle-button-renderer.ytd-live-chat-frame{padding:0}.tyt-info-invisible{display:none}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist{flex-grow:1;flex-shrink:1;max-height:unset!important;overflow:auto}[tyt-playlist-expanded] secondary-wrapper>ytd-playlist-panel-renderer#playlist>#container{max-height:unset!important}secondary-wrapper ytd-playlist-panel-renderer{--ytd-margin-6x:var(--ytd-margin-3x)}ytd-watch-flexy[theater] ytd-playlist-panel-renderer[collapsible][collapsed] .header.ytd-playlist-panel-renderer{padding:6px 8px}ytd-watch-flexy[theater] #playlist.ytd-watch-flexy{margin-bottom:var(--ytd-margin-2x)}ytd-watch-flexy[theater] #right-tabs .tab-btn[tyt-tab-content]{border-bottom:0 solid transparent;padding:8px 4px 6px}ytd-watch-flexy{--tyt-bottom-watch-metadata-margin:12px}ytd-watch-flexy[rounded-info-panel],ytd-watch-flexy[rounded-player-large]{--tyt-rounded-a1:${VAL_ROUNDED_A1}px}#bottom-row.style-scope.ytd-watch-metadata .item.ytd-watch-metadata{margin-right:var(--tyt-bottom-watch-metadata-margin,12px);margin-top:var(--tyt-bottom-watch-metadata-margin,12px)}";