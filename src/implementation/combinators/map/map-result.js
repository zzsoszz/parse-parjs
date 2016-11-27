"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var parser_action_1 = require("../../../base/parser-action");
/**
 * Created by lifeg on 24/11/2016.
 */
var PrsMapResult = (function (_super) {
    __extends(PrsMapResult, _super);
    function PrsMapResult(inner, _result) {
        _super.call(this);
        this.inner = inner;
        this._result = _result;
        this.displayName = "result";
        this.isLoud = true;
    }
    PrsMapResult.prototype._apply = function (ps) {
        var _a = this, inner = _a.inner, _result = _a._result;
        if (!inner.apply(ps)) {
            return false;
        }
        ps.result = _result;
        return true;
    };
    return PrsMapResult;
}(parser_action_1.JaseParserAction));
exports.PrsMapResult = PrsMapResult;
//# sourceMappingURL=map-result.js.map