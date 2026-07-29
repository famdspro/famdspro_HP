/* ============================================================
   Vfam タレントデータ（仮データ）
   ------------------------------------------------------------
   ★ 現在は仮の2名のみ登録しています。
     正式な名称・立ち絵・SNSが決まったら、この配列を書き換えるだけで
     一覧ページ（talents.html）と詳細ページ（talent.html）の両方に反映されます。

   各項目の意味：
     id          … 詳細ページのURL（talent.html?id=◯◯）に使う識別子。半角英数
     name        … 表示名（日本語）
     ruby        … よみがな
     enName      … ローマ字表記
     debut       … デビュー時期
     unit        … 所属ユニット／期生
     catch       … 一言キャッチコピー
     description … プロフィール本文（\n で改行できます）
     tags        … 配信内容などのタグ
     themeColor  … イメージカラー（詳細ページの背景・装飾に使用）
     iconImage   … 一覧用の丸アイコン画像
     standImage  … 詳細ページ用の立ち絵画像
     sns         … SNSリンク。未定のものは null にすると非表示になります
============================================================ */

var VFAM_TALENTS = [
  {
    id: 'talent01',
    name: '仮名称 A',
    ruby: 'かりめいしょう えー',
    enName: 'Placeholder A',
    debut: '2026年 デビュー予定',
    unit: 'Vfam 1期生',
    catch: 'ここにキャッチコピーが入ります',
    description:
      'ここにプロフィール文章が入ります。仮のテキストです。\n' +
      '正式な設定・自己紹介文が決まり次第、talents.js の description を書き換えてください。\n' +
      '趣味や特技、配信スタイルなどを2〜4行程度で紹介する想定です。',
    tags: ['雑談配信', 'ゲーム実況', '歌'],
    themeColor: '#4bb8e0',
    iconImage: 'images/placeholder_icon.svg',
    standImage: 'images/placeholder_stand.svg',
    sns: {
      youtube: null,
      x: null,
      tiktok: null,
      instagram: null
    }
  },
  {
    id: 'talent02',
    name: '仮名称 B',
    ruby: 'かりめいしょう びー',
    enName: 'Placeholder B',
    debut: '2026年 デビュー予定',
    unit: 'Vfam 1期生',
    catch: 'ここにキャッチコピーが入ります',
    description:
      'ここにプロフィール文章が入ります。仮のテキストです。\n' +
      '正式な設定・自己紹介文が決まり次第、talents.js の description を書き換えてください。\n' +
      '趣味や特技、配信スタイルなどを2〜4行程度で紹介する想定です。',
    tags: ['歌配信', 'ASMR', 'イラスト'],
    themeColor: '#e46ba8',
    iconImage: 'images/placeholder_icon.svg',
    standImage: 'images/placeholder_stand.svg',
    sns: {
      youtube: null,
      x: null,
      tiktok: null,
      instagram: null
    }
  }
];

/* ------------------------------------------------------------
   絞り込みタブの定義（にじさんじの affiliation フィルタ相当）
   タレントが増えて期生で分けたくなったら items を増やしてください。
   key は VFAM_TALENTS の unit と照合されます（'all' は全件表示）。
------------------------------------------------------------ */
var VFAM_FILTERS = [
  { key: 'all',        label: 'ALL' },
  { key: 'Vfam 1期生', label: '1期生' }
];
