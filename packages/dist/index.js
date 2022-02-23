function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var Title = styled.h1(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"])));
var Title$1 = (function (_ref) {
  var children = _ref.children;
  return React.createElement(Title, null, children);
});

var _templateObject$1;
var Wrapper = styled.section(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  padding: 4em;\n  background: papayawhip;\n"])));

exports.Title = Title$1;
exports.Wrapper = Wrapper;
//# sourceMappingURL=index.js.map
