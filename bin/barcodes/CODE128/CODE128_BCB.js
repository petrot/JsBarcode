'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE2 = require('./CODE128');

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto_bcb = require('./auto_bcb');

var _auto_bcb2 = _interopRequireDefault(_auto_bcb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128BCB = function (_CODE) {
	_inherits(CODE128BCB, _CODE);

	function CODE128BCB(data, options) {
		_classCallCheck(this, CODE128BCB);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128BCB.__proto__ || Object.getPrototypeOf(CODE128BCB)).call(this, (0, _auto_bcb2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128BCB.__proto__ || Object.getPrototypeOf(CODE128BCB)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128BCB;
}(_CODE3.default);

exports.default = CODE128BCB;