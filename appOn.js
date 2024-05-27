const addStyle = (() => {
  const style = document.createElement("style");
  document.head.append(style);
  return (styleString) => (style.textContent = styleString);
})();

if (
  window.location.href.startsWith("https://leetcode.com/assessment/1") ||
  window.location.href.startsWith("https://leetcode.com/assessment/2")
) {
  addStyle(`
  .header__2ivW {
    background: #0f0f0f;
    border-bottom: None;
  }

  .css-1t8he9u-Root-StyledTimer {
    color: #f5f5f5;
  }
  
  .container__2zYY {
    box-shadow: inset 0 -1px #333333;
    background: #333333;
  }

  .container__14Na {
    background: #262626;
  }

  .css-1lexzqe-TabHeaderContainer {
    background: #333333;
  }

  .content__u3I1 pre {
    color: var(--opacity-white-80);
    background: #262626;
  }

  .b, strong {
    color: white;
  }

  .content__u3I1 code{
    color: #eff1f6bf;
    background: #f7faff1f;
  }

  .css-19j86kk-TabHeader::after {
    background: #333333 !important;
  }

  .css-5wdlwo-TabViewHeader::after {
    border-bottom: #333333 !important;
  }
  .question-fast-picker-wrapper__39zK{
    background: #333333;
  }
  .interactive-area__1JbC {
    padding: 0px 2px;
    background: #0f0f0f;
  }

  .tab-pane__ncJk{
    border-right: none;
  }

  .question-fast-picker-wrapper__39zK{
    border-top: none;
  }

  .cm-s-monokai .CodeMirror-gutters{
    background: none;
  }

  .container__2WTi {
    border-top: none;
    background: #333333;
  }
  
  .select__2iyW {
    padding-left: 15px;
  }

  .content__u3I1 {
    color: white;
  }

  .title__3f2k {
    color: white;
  }

  .css-19j86kk-TabHeader::before {
    background: none !important;
  }
  .picker-pagination-handlers__3448 {
    padding-right: 10px;
}

.panel__2QyZ {
    color: white;
}

.header__21e7 {
    border-top: none;
    background: #333333;
}

.css-79pre8 {
    color: white;
}

.e5i1odf0, .custom-testcase__2ah7, .page-select__1LgN {
    color: white !important;
}

.css-nok86h-TabViewHeader::after {
    border-bottom: none !important;
}

.css-1kuaqiy-TabHeader::before, .css-qndcpp-TabHeader::after, .css-qndcpp-TabHeader::before {
    background: none !important;
}

.ace_content {
    background: #333333;
    color: white;
}

.ant-modal-content, .lc-modal__3L7G .lc-modal-with-type__1EJ2, .lc-modal-footer__3N1B {
    background: #333333;
    color: white;
}
.lc-modal__3L7G .lc-modal-no-title-header__3e_8 .lc-modal-title__y-1f, .lc-modal__3L7G .lc-modal-with-title-header__ld4- .lc-modal-title__y-1f, .lc-modal__3L7G .lc-modal-with-type__1EJ2 .lc-modal-title__y-1f {
    color: white;
}
.css-1nefimn {
    background: rgb(69 90 100);
}

.css-1uwsqgo-TabHeaderRow, .css-1l22uh0-TabHeaderRow {
    background: #333333;
    color: white;
}

.css-i03q4h-ValueContainer {
    border: 1px solid white;
    background: none;
    color: white;
}

.header__2ivW .question-select-button__21ly:not(:disabled).active__gSC2 {
    background: #333333;
}

.css-1km43m6-BtnContent {
    background: none;
}

.header__2ivW .question-select-button__21ly:not(:disabled) {
    background: #333333;
}
.info__2oQ9 .data__HC-i, .ant-select-selection-selected-value {
    color: white;
}

.ant-select-dropdown-light {
    background: #333333;
}

.ant-select-dropdown-light .ant-select-dropdown-menu-item {
    color: white;
}
  `);

  function setup() {
    // Change the top left logo
    document.getElementsByClassName("logo__3n_5")[0].src =
      "/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png";

    // Change <p> textcolor
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = "white";
    });

    // Remove autocomplete
    document.getElementsByClassName("css-10fxeud")[0].remove();

    // Open console
    document.getElementsByClassName("custom-testcase__2ah7")[0].click();

    // Remove debugger
    document
      .getElementsByClassName(
        "debugger-tab-header__qIb0 css-1kuaqiy-TabHeader e5i1odf4"
      )[0]
      .remove();
  }
  setTimeout(setup, 3000);
}
