"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SpriteAnimator = _ref => {
  let {
    sheet,
    columns,
    size,
    fps = 16,
    play = true
  } = _ref;
  const imgRef = (0, _react.useRef)(null);
  const [imgWidth, setImgWidth] = (0, _react.useState)(0);
  const [spriteIndex, setSpriteIndex] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (imgRef.current && imgWidth == 0) {
      setImgWidth(_ => size * columns);
    }
  }, [imgRef, imgWidth]);
  (0, _react.useEffect)(() => {
    if (play) {
      if (spriteIndex < columns - 1) {
        setTimeout(() => {
          setSpriteIndex(prev => prev + 1);
        }, 1000 / fps);
      } else {
        setTimeout(() => {
          setSpriteIndex(0);
        }, 1000 / fps);
      }
    } else if (!play && spriteIndex > 0) {
      setSpriteIndex(0);
    }
  }, [spriteIndex]);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "sprite-animator",
    style: {
      height: size,
      width: imgWidth / columns,
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    ref: imgRef,
    src: sheet,
    style: {
      position: "relative",
      right: spriteIndex * imgWidth / columns,
      height: size,
      width: imgWidth
    }
  }));
};
var _default = SpriteAnimator;
exports.default = _default;