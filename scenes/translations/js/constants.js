/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.Constants');

/**
 * @typedef {{
 *   distancePx: number,
 *   durationDown: number,
 *   durationDelay: number,
 *   durationUp: number,
 *   easingDown: string,
 *   easingUp: string
 * }}
 */
var TranslationsSceneAnimationOptions;

goog.scope(function() {

  /**
   * Scene constants
   * @const
  */
  app.Constants = {

    TTS_DOMAIN: 'https://translate.googleapis.com/translate_tts',
    TTS_QUERY: '?ie=UTF-8&client=santa-tracker&tl={TL}&q={Q}',

    KLANG_EVENT_KEY: 'elvish_klang_event',

    PHRASES: [
      {
        'elvish': '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="57" viewBox="0 0 256 57"><g><g fill="#fff"><path d="M176.2 39h7.6l-8.4-12.5h5L168.7 9 157 26.5h5L153.6 39h7.6l-7.6 11.7h13.1v4.8h4v-4.8h13L176.2 39zm-12.8 1.4l2.7-4.2h-7.5l5.5-8.3 2.8-4.2h-5l6.6-9.9 6.6 9.9h-5l2.8 4.2 5.5 8.3h-7.5l2.7 4.2 4.8 7.5h-20.1l5.1-7.5zM168.6 1l1.2 2.4 2.6.4-1.9 1.9.5 2.6-2.4-1.2-2.4 1.2.4-2.6-1.9-1.9 2.7-.4z"/></g><path fill="none" d="M213.4 19.9h39.4V29h-39.4z"/><path fill="#fff" d="M247.5 18.4c.4-1 .6-2 .6-3.1 0-4.5-3.7-8.3-8.3-8.3-2.8 0-5.2 1.4-6.7 3.5-1.5-2.1-4-3.5-6.7-3.5-4.5 0-8.2 3.7-8.2 8.3 0 1.1.2 2.1.6 3.1H213v12.1h2.9v25.1h34.6V30.5h2.9V18.4h-5.9zm-26.4-3.1c0-2.9 2.4-5.3 5.2-5.3 2.9 0 5.2 2.3 5.2 5.1v.1h3v-.1c.1-2.8 2.4-5.1 5.2-5.1 2.9 0 5.3 2.4 5.3 5.3 0 1.1-.4 2.2-1 3.1h-21.9c-.6-.9-1-2-1-3.1zm10 37.2h-12.3v-22h12.3v22zm0-25h-15.2v-6.1h15.2v6.1zm16.3 25h-12.3v-22h12.3v22zm2.9-25h-15.2v-6.1h15.2v6.1z"/><g fill="#fff"><circle cx="104.2" cy="10.9" r="3"/><path d="M107.9 25.2c-.1 0-.2 0-.2-.1 2.6-3.2 6.5-8.8 6.5-14 0-5.5-4.5-9.9-9.9-9.9s-9.9 4.5-9.9 9.9c0 5.2 3.8 10.8 6.5 14-.2 0-.4.1-.6.1-.1 0-.2 0-.3.1-.4.1-.8.3-1.2.4-.1 0-.2.1-.3.1-.4.2-.7.3-1.1.5-.1 0-.2.1-.3.1-.3.2-.7.4-1 .6-.1.1-.2.1-.3.2-.3.2-.6.4-.9.7-.1.1-.2.1-.3.2-.3.2-.6.5-.8.7l-.3.3c-.3.3-.5.5-.7.8l-.3.3c-.2.3-.4.6-.7.8l-.3.3-.6.9c-.1.1-.1.2-.2.3-1.3 2.3-2.1 4.9-2.1 7.8 0 8.6 7 15.6 15.6 15.6h.6c1.4-.1 2.8-.3 4.1-.7 1.7-.5 3.3-1.3 4.7-2.4 3.8-2.8 6.3-7.4 6.3-12.5-.1-7.3-5.2-13.4-12-15.1zm-3.7-21c3.8 0 6.9 3.1 6.9 6.9 0 5-4.8 11-7 13.5-2.2-2.5-6.9-8.4-6.9-13.5 0-3.8 3.1-6.9 7-6.9zm.5 49h-.6c-7.1 0-12.9-5.8-12.9-12.9 0-1.6.3-3 .8-4.4.8 1.7 1.9 3.3 3.1 4.7 1.5 1.7 3.2 3.1 5.1 4.2l2.1 1.3v2.1c0 .6.5 1 1 1h1.3v4zm8.8-4V47c0-.7-.5-1.2-1.2-1.2h-4.1v-4.4c0-.6-.5-1-1-1H98v-3.9h3.9v-4.1h1.5c2.4 0 4.3-1.9 4.4-4.3 5.3 1.6 9.2 6.5 9.2 12.3 0 3.4-1.3 6.5-3.5 8.8z"/></g><path fill="#fff" d="M56.8 40.5h-3.3C47 29 33.1 16 17.5 15.2c0-4.8-3.9-8.7-8.7-8.7C4 6.5.1 10.4.1 15.2c0 4.8 3.9 8.7 8.7 8.7 3 0 5.6-1.5 7.2-3.8v20.4h-2.4c-2.2 0-3.9 1.7-3.9 3.9v7.2c0 2.2 1.8 3.9 3.9 3.9h43.2c2.2 0 3.9-1.8 3.9-3.9v-7.2c0-2.1-1.7-3.9-3.9-3.9zm-48-19.6c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7c0 3.2-2.5 5.7-5.7 5.7zM19 18.4c13.3 1.5 25.1 12.5 31.1 22.1H19V18.4zm38.7 33.2c0 .5-.4.9-.9.9H13.6c-.5 0-.9-.4-.9-.9v-7.2c0-.5.4-.9.9-.9h43.2c.5 0 .9.4.9.9v7.2z"/></g></svg>',
        'elvish_klang_event': 'translations_elf_santaclaus',
        'ar': 'بَابَا نُوِيل',
        'zh-CN': '圣诞老人',
        'zh-TW': '聖誕老人',
        'cs': 'Santa Klaus',
        'da': 'Julemanden',
        'nl': 'Kerstman',
        'en': 'Santa Claus',
        'fr': 'Père Noël',
        'de': 'Weihnachtsmann',
        'el': 'Άγιος Βασίλης',
        'hi': 'सांता क्लॉज़',
        'hu': 'Mikulás',
        'it': 'Babbo Natale',
        'ja': 'サンタクロース',
        'ko': '산타 클로스',
        'no': 'julenissen',
        'pl': 'Święty Mikołaj',
        'pt': 'Papai Noel',
        'ru': 'Дед Мороз',
        'sk': 'Santa Claus',
        'es': 'Papá Noel',
        'sv': 'Jultomten',
        'th': 'ซานตาคลอส',
        'tr': 'Noel Baba'
      },
      {
        'elvish': '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="57" viewBox="0 0 256 57"><g><path fill="#fff" d="M86.8 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1C81.4 17.8 91.7 9 104.2 9c12.6 0 22.8 8.7 22.8 19.5S116.8 48 104.2 48c-1.5 0-3.1-.1-4.6-.4L86.8 54zm17.4-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5L90 49l9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S115.1 12 104.2 12zM151.2 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1 0-10.7 10.2-19.5 22.8-19.5s22.8 8.7 22.8 19.5S181.2 48 168.7 48c-1.5 0-3.1-.1-4.6-.4L151.2 54zm17.5-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5-.4 8.7 9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S179.6 12 168.7 12zM214.5 54l.6-12.4c-3.8-3.6-5.9-8.2-5.9-13.1C209.2 17.8 219.4 9 232 9c12.6 0 22.8 8.7 22.8 19.5S244.5 48 231.9 48c-1.5 0-3.1-.1-4.6-.4L214.5 54zm17.4-42c-10.9 0-19.8 7.4-19.8 16.5 0 4.2 1.9 8.3 5.5 11.3l.5.5-.4 8.7 9.1-4.6.5.1c1.5.3 3.1.5 4.6.5 10.9 0 19.8-7.4 19.8-16.5S242.8 12 231.9 12zM56.8 40.5h-3.3C47 29 33.1 16 17.5 15.2c0-4.8-3.9-8.7-8.7-8.7C4 6.5.1 10.4.1 15.2c0 4.8 3.9 8.7 8.7 8.7 3 0 5.6-1.5 7.2-3.8v20.4h-2.4c-2.2 0-3.9 1.7-3.9 3.9v7.2c0 2.2 1.8 3.9 3.9 3.9h43.2c2.2 0 3.9-1.8 3.9-3.9v-7.2c0-2.1-1.7-3.9-3.9-3.9zm-48-19.6c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7c0 3.2-2.5 5.7-5.7 5.7zM19 18.4c13.3 1.5 25.1 12.5 31.1 22.1H19V18.4zm38.7 33.2c0 .5-.4.9-.9.9H13.6c-.5 0-.9-.4-.9-.9v-7.2c0-.5.4-.9.9-.9h43.2c.5 0 .9.4.9.9v7.2z"/></g></svg>',
        'elvish_klang_event': 'translations_elf_hohoho',
        'ar': 'هو هو هو',
        'zh-CN': '嗬嗬嗬',
        'zh-TW': '嗬嗬嗬',
        'cs': 'Ho Ho Ho',
        'da': 'Ho Ho Ho',
        'nl': 'Ho Ho Ho',
        'en': 'Ho Ho Ho',
        'fr': 'Ho Ho Ho',
        'de': 'Ho Ho Ho',
        'el': 'Χο χο χο',
        'hi': 'हो हो हो',
        'hu': 'Ho Ho Ho',
        'it': 'Ho Ho Ho',
        'ja': 'ホーホーホー',
        'ko': '호 호 호',
        'no': 'Ho Ho Ho',
        'pl': 'Ho Ho Ho',
        'pt': 'Ho Ho Ho',
        'ru': 'Хо-хо-хо',
        'sk': 'Ho Ho Ho',
        'es': 'Ho Ho Ho',
        'sv': 'Ho ho ho',
        'th': 'โฮ โฮ โฮ',
        'tr': 'Ho Ho Ho'
      },
      {
        'elvish': '<svg xmlns="http://www.w3.org/2000/svg" width="181.2" height="57" viewBox="0 0 181.2 57"><g><path fill="#fff" d="M24.2 55.5C12.4 55.5 2.7 45.9 2.7 34s9.6-21.5 21.5-21.5S45.7 22.2 45.7 34s-9.6 21.5-21.5 21.5zm0-40C14 15.5 5.7 23.8 5.7 34S14 52.5 24.2 52.5 42.7 44.2 42.7 34s-8.3-18.5-18.5-18.5z"/><circle fill="#fff" cx="17.6" cy="25.3" r="2.5"/><circle fill="#fff" cx="31.7" cy="25.3" r="2.5"/><path fill="#fff" d="M24.2 47.4c-7.4 0-13.3-6.3-13.3-13.3h26.7c0 7-6 13.3-13.4 13.3z"/><g fill="#fff"><path d="M104.1 12.1h-3.6v-2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2h-18v-2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2h-2.6c-3 0-5.4 2.4-5.4 5.4v32.3c0 3 2.4 5.4 5.4 5.4h30.3c3 0 5.4-2.4 5.4-5.4V17.5c-.1-3-2.5-5.4-5.5-5.4zm2.4 37.7c0 1.3-1.1 2.4-2.4 2.4H73.8c-1.3 0-2.4-1.1-2.4-2.4V22.1h35v27.7zM83.5 27.3v4h4v16h4v-20z"/></g><path fill="#fff" d="M149.2 24.6c-.7 0-1.4-.5-1.5-1.3-.1-.8.4-1.6 1.3-1.7 1-.1 1.9-.4 2.8-.8h-.1c-1-.5-2-1.1-3-2-.3-.3-.7-.8-1-1.4-.3-.9-.2-1.8.3-2.4.4-.5.9-.8 1.6-1 .6-.1 1.2-.1 1.8-.1-.5-.6-1-1.4-1.2-2.4-.1-.8.5-1.6 1.3-1.7.8-.1 1.6.5 1.7 1.3.1.4.4.8.8 1.3.2.2.4.5.6.7.2.3.8 1.1.7 2.1-.1.5-.3.9-.5 1.1-.4.5-1 .6-1.1.6-.8.1-1.5.1-2.1 0h-.6c.6.5 1.2.8 2 1.2.3.2.6.3.9.5.3.2 1.2.7 1.4 1.6.2.8 0 1.6-.6 2.2-.4.4-.8.6-1.2.8-1.3.6-2.7 1-4.2 1.3 0 .1 0 .1-.1.1zM158.7 10.6c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM170.4 19.7c-1.8 1.8 1 4.6 2.8 2.8 1.8-1.8-1-4.7-2.8-2.8zM138.2 14.2c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM162.1 41.1c-1.8 1.8 1 4.6 2.8 2.8 1.8-1.8-1-4.7-2.8-2.8zM167.2 28.2c-1.8 1.8 1 4.6 2.8 2.8 1.9-1.8-1-4.6-2.8-2.8zM173.8 34.6c-2.7-.5-10.6-1.4-19.2 1.5-1-1.3-2.1-2.7-3.4-4-1.5-1.5-3-2.7-4.4-3.8-.1-3.1-.9-6.2-3-8.7-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1 1.2 1.4 1.8 3 2.1 4.8-1.4-.7-2.6-1-3.6-1-1.2 0-2 .5-2.4.9-.3.3-.6.8-.7 1.2L129 50.7c-.4 1.3-.1 2.7.9 3.7.7.6 1.5 1 2.4 1 .4 0 .9-.1 1.3-.3l22.4-8.8c.4-.2.8-.4 1-.6.9-.9 1.6-2.7-.2-6.3-.1-.3-.3-.5-.4-.8 7.6-2.4 14.5-1.6 17-1.1.8.1 1.6-.4 1.7-1.2.1-.8-.5-1.6-1.3-1.7zm-22.1 2.6c-1.5.7-3 1.4-4.5 2.4-.6-.5-1.2-1.1-1.8-1.7l-.1-.1c.5-1.6 1-3.6 1.3-5.8.8.7 1.6 1.4 2.5 2.2 1 1.1 1.9 2.1 2.6 3zm-7.9-7.3c-.1 1.9-.4 3.7-.8 5.2-2.6-3.2-3.5-5.7-3.4-6.5l.1-.2h.3c.8 0 2.1.5 3.8 1.5zm-11.4 22.6c-.3.1-.4 0-.5-.1-.1-.1-.2-.3-.1-.5l6.3-18.6c1.2 2.3 3.2 4.7 5.2 6.8 2.4 2.4 4.9 4.2 7.1 5.4l-18 7zm22.5-8.9h-.3c-1 0-2.7-.7-4.8-2.2 1.2-.7 2.5-1.3 3.7-1.8 1.2 2.2 1.6 3.7 1.4 4zM153.2 31.6c-.7 0-1.2-.4-1.4-1.1-.2-.8-.4-1.6-.5-2.4 0-.4-.2-1.4.6-2.3.9-1 2.5-.9 3.8.2l.9.9c.4.4.7.7 1.1 1 .6.4 1.1.7 1.6.6.3 0 .6-.3.6-.3 0-.1-.1-.4-.6-.9l-.4-.4c-.5-.4-1-.9-1.5-1.5-.8-1.1-.8-2.5.1-3.4.8-.9 2.4-1.3 4.1-.2l.3.2c.6.4 1.1.7 1.6.9v-.6c0-.9-.3-1.9-.9-2.9-.4-.7-.1-1.6.6-2 .7-.4 1.6-.1 2 .6.5 1 1.2 2.5 1.2 4.2 0 .6.1 2.4-1 3.3-.5.5-1.3.6-2 .5-.7-.1-1.4-.4-2-.7 1.2 1.2 1.4 2.4 1.3 3.2-.2 1.6-1.6 2.9-3.3 3.1-1.2.1-2.4-.3-3.6-1.3-.5-.4-.9-.8-1.3-1.2 0 .2.1.4.2.6.2.8-.2 1.6-1 1.9h-.5z"/></g></svg>',
        'elvish_klang_event': 'translations_elf_happynewyear',
        'ar': 'كل عام وأنتم بخير',
        'zh-CN': '新年快乐',
        'zh-TW': '新年快樂',
        'cs': 'Šťastný Nový Rok',
        'da': 'Godt Nytår',
        'nl': 'Gelukkig Nieuwjaar',
        'en': 'Happy New Year',
        'fr': 'Bonne année',
        'de': 'Frohes neues Jahr',
        'el': 'Ευτυχισμένο το Νέο Έτος',
        'hi': 'नया साल मुबारक हो',
        'hu': 'Boldog új évet!',
        'it': 'Buon anno',
        'ja': '明けましておめでとうございます',
        'ko': '새해 복 많이 받으세요',
        'no': 'Godt nytt år',
        'pl': 'Szczęśliwego Nowego Roku',
        'pt': 'Feliz Ano Novo',
        'ru': 'С Новым годом',
        'sk': 'Šťastný Nový Rok',
        'es': 'Feliz Año Nuevo',
        'sv': 'Gott Nytt År',
        'th': 'สวัสดีปีใหม่',
        'tr': 'Mutlu Yıllar'
      },
      {
        'elvish': '<svg xmlns="http://www.w3.org/2000/svg" width="181.2" height="57" viewBox="0 0 181.2 57"><g><path fill="#fff" d="M89.3 52.4c-11.9 0-21.5-9.6-21.5-21.5S77.4 9.4 89.3 9.4s21.5 9.6 21.5 21.5-9.6 21.5-21.5 21.5zm0-40c-10.2 0-18.5 8.3-18.5 18.5s8.3 18.5 18.5 18.5 18.5-8.3 18.5-18.5-8.3-18.5-18.5-18.5z"/><circle fill="#fff" cx="82.6" cy="22.2" r="2.5"/><circle fill="#fff" cx="96.8" cy="22.2" r="2.5"/><path fill="#fff" d="M89.3 44.2c-7.4 0-13.3-6-13.3-13.3h26.7c-.1 7.3-6 13.3-13.4 13.3zM46.1 40.7l-5-2.9 4.3-2.7-1.5-2.4-5.6 3.5-4.2-2.4 5.1-3.8-5-3.8 4.1-2.4 5.6 3.6 1.5-2.4-4.4-2.8 5-2.9-1.4-2.5-5 2.9-.2-5.1-2.9.1.2 6.6-3.9 2.3-.4-7-6.4 3.1v-4.6l6-3.1-1.3-2.6-4.6 2.4V6h-2.9v5.8l-4.5-2.4-1.3 2.6 5.8 3.1v4.6l-6.3-3.1-.4 7-4-2.3.3-6.7-2.9-.1-.2 5.2-5.1-2.9-1.4 2.5 5 2.9-4.3 2.7 1.5 2.4 5.6-3.5 4.2 2.4-5 3.8 5 3.8-4.2 2.4-5.6-3.6L3.9 35l4.4 2.8-5.1 2.9 1.4 2.5 5.1-2.9.2 5.1 2.9-.1-.2-6.6 4.1-2.3.4 7 6.3-3.2V45l-6.1 3 1.3 2.6 4.6-2.4V54h2.9v-5.9l4.5 2.4L32 48l-5.8-3.1v-4.8l6.4 3.3.4-7 4 2.3-.3 6.7 2.9.1.2-5.2 5.1 2.9 1.2-2.5zM34.4 30l-3 2.3-3.9-2.3 3.9-2.3 3 2.3zm-4.5-8.9l.3 4.1-4 2.3v-4.6l3.7-1.8zm-10.4 0l3.7 1.8v4.6l-3.9-2.3.2-4.1zM15 30l2.9-2.2 3.9 2.2-3.8 2.2-3-2.2zm4.5 8.8l-.2-4.1 3.9-2.3v4.4l-3.7 2zm10.3 0L26 36.9v-4.4l4 2.3-.2 4zM164.3 19.9c-.6 0-1.1-.3-1.4-.9-1.2-2.9-2.8-5.6-4.6-8.2-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4c1.9 2.7 3.5 5.6 4.9 8.7.3.8 0 1.6-.8 2-.2.1-.4.1-.6.1zM169.1 16.6c-.7 0-1.3-.5-1.5-1.2-.4-1.9-1.5-4.2-2.5-5.7-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5.5.8 2.3 3.8 2.9 6.7.2.8-.4 1.6-1.2 1.8h-.3zM175.6 23.3l-.1-1.1c-.1-.5-.3-1-.5-1.4-1.2-2.1-3.8-2.8-5.9-1.6-1.3.7-2.1 2-2.2 3.5-.1 1.3-.4 5.1-1.2 7.2 0 0-.1-.1-.1-.2-1.7-2.1-3-4.7-4.2-7.1l-5.9-11.8-.2-.5c-1.2-2.1-3.8-2.8-5.9-1.6-.5.3-.8.6-1.2 1-.5-.5-1.1-.9-1.8-1.1-1.1-.3-2.3-.1-3.3.4-1 .6-1.7 1.5-2 2.6-.2.7-.2 1.4 0 2.1-.5.1-1 .2-1.5.5-1.9 1.1-2.6 2.8-2 4.7-.5.1-1 .3-1.5.5-2.1 1.2-2.7 3.3-1.7 5.8 2.6 5.8 5.4 12 9 18.6 2.2 4.1 5.3 6.7 9.2 7.8 1.4.4 2.9.6 4.2.6 3.6 0 6.6-1.2 7.6-1.7 9.7-5.5 12.1-17.8 11.2-27.2zm-12.8 24.8c-.8.5-5.1 2.1-9.5.9-3.1-.9-5.6-3-7.4-6.4-3.5-6.5-6.3-12.6-8.8-18.3-.6-1.4-.1-1.7.4-2 .5-.3 1.2-.2 1.6.2 1.7 3.1 4.8 8.9 6.3 11.8.3.5.8.8 1.3.8.2 0 .5-.1.7-.2.7-.4 1-1.3.7-2-2.1-4.2-7.3-13.7-7.5-14-.5-1.1-.3-1.5.4-1.9.3-.2.7-.2 1-.1.3.1.6.3.8.6 1.8 3.1 4.9 8.6 7 12.5.3.5.8.8 1.3.8.2 0 .5-.1.7-.2.7-.4 1-1.3.6-2-2.1-3.9-5.2-9.3-7-12.4V16c-.8-1.4-1.3-2.4-1.4-2.4-.2-.3-.2-.7-.1-1 .1-.3.3-.6.6-.8s.7-.2 1-.1c.3.1.6.3.8.6.1.1 5.8 9.9 8.3 15.4.3.8 1.2 1.1 2 .7.8-.3 1.1-1.2.7-2-1.8-3.9-5.1-9.9-7-13.2-.2-.3-.2-.7-.1-1 .1-.3.3-.6.6-.8.6-.4 1.4-.1 1.8.4l6.1 12.2c1.3 2.6 2.6 5.3 4.6 7.7 1.1 1.4 2.2 1.5 2.9 1.4 1.3-.2 2-1.3 2.2-1.8 1.2-3 1.4-8.2 1.5-8.4 0-.4.3-.8.7-1.1.6-.4 1.4-.1 1.8.5.1.1.1.2.1.4.2 1.9 2.1 18.7-9.7 25.4zM138.6 44.5c-.5 0-1-.3-1.3-.7-1.4-2.3-3.1-5.4-5-9.6-.4-.7 0-1.6.7-2 .7-.4 1.6 0 2 .7 1.9 4 3.5 7.1 4.9 9.3.4.7.2 1.6-.5 2.1-.2.1-.5.2-.8.2zM134.8 48.1c-.5 0-.9-.2-1.2-.6-2.8-3.8-5.6-8.7-6.3-10.8-.3-.8.2-1.6.9-1.9.8-.3 1.6.2 1.9.9.6 1.7 3.1 6.2 5.9 10 .5.7.3 1.6-.3 2.1-.3.2-.6.3-.9.3z"/></g></svg>',
        'elvish_klang_event': 'translations_elf_seasonsgreetings',
        'ar': 'تهاني الموسم',
        'zh-CN': '节日问候',
        'zh-TW': '節慶祝賀',
        'cs': 'Šťastné svátky',
        'da': 'Glædelig jul',
        'nl': 'Prettige kerstdagen',
        'en': 'Season\'s Greetings',
        'fr': 'Bonnes fêtes',
        'de': 'Frohes Fest',
        'el': 'Θερμές ευχές',
        'hi': 'नवऋतु की शुभकामनाएं',
        'hu': 'Karácsonyi üdvözlet',
        'it': 'Auguri',
        'ja': '季節のご挨拶',
        'ko': '즐거운 성탄절',
        'no': 'God jul og godt nytt år',
        'pl': 'Wesołych Świąt i szczęśliwego Nowego Roku',
        'pt': 'Saudações festivas',
        'ru': 'С Новым годом и Рождеством',
        'sk': 'Šťastné sviatky',
        'es': '¡Felices Fiestas!',
        'sv': 'God Jul och Gott Nytt År',
        'th': 'ส่งความสุขช่วงเทศกาล',
        'tr': 'Tatil Kutlamaları'
      }
    ],

    DEFAULT_LANGUAGE: 'en',

    CLASS_PLAYING: 'playing-phrase',

    EASE_IN_QUAD: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    EASE_OUT_QUAD: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    EASE_IN_OUT_QUAD: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    EASE_IN_QUINT: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    EASE_IN_OUT_CIRC: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',

    /** @type {TranslationsSceneAnimationOptions} */
    ANIMATION_BTN_PAGINATION: {
      distancePx: 4,
      durationDown: 200,
      durationDelay: 0,
      durationUp: 300,
      easingDown: 'EASE_OUT_QUAD',
      easingUp: 'EASE_OUT_QUAD'
    },

    /** @type {TranslationsSceneAnimationOptions} */
    ANIMATION_BTN_PLAY: {
      distancePx: 8,
      durationDown: 200,
      durationDelay: 1000,
      durationUp: 850,
      easingDown: 'EASE_OUT_QUAD',
      easingUp: 'EASE_IN_QUINT'
    }

  };

});
