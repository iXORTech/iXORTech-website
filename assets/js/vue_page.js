/* Inspired from solution by Sttot (https://github.com/gk0wk), */

var footerHTML =
    '<footer>' +
    '   <hr>' +
    '   <a href="https://github.com/iXORTech" title="GitHub"><i data-feather="github"></i></a>' +
    '   | Copyright &copy; 2022 iXOR Technology. All rights reserved.' +
    '   <br/>' +
    '   HTML theme designed by <a href="https://github.com/athul/archie" rel="nofollow noopener noreferrer">Archie Theme</a>, modified by <a href="https://github.com/KevinZonda" rel="nofollow noopener noreferrer">@KevinZonda</a>.' +
    '</footer>';

var zhFooterHTML =
    '<footer>' +
    '   <hr>' +
    '   <a href="https://github.com/iXORTech" title="GitHub"><i data-feather="github"></i></a>' +
    '   | Copyright &copy; 2022 iXOR Technology. 保留所有权利' +
    '   <br/>' +
    '   HTML 主题由 <a href="https://github.com/athul/archie" rel="nofollow noopener noreferrer">Archie Theme</a> 设计，并由 <a href="https://github.com/KevinZonda" rel="nofollow noopener noreferrer">@KevinZonda</a> 制作' +
    '</footer>';

function buildOnce(genApp, hookDom) {
  var vueInstance = Vue.createApp(
    Object.assign(
      {
        mounted() {
          vueInstance.unmount();
        },
      },
      genApp()
    )
  );
  vueInstance.mount(hookDom);
}

buildOnce(function () {
  return {
    data() {
      return {
        footer: footerHTML,
        zhFooter: zhFooterHTML
      };
    },
  };
}, "#page-wrapper");
