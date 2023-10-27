var d = Object.defineProperty;
var _ = (h, t, e) => t in h ? d(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var r = (h, t, e) => (_(h, typeof t != "symbol" ? t + "" : t, e), e);
class m {
  constructor(t) {
    r(this, "_items", []);
    r(this, "_breakLineAspectRatioSum");
    r(this, "_containerWidth");
    r(this, "_itemFallbackAspectRatio");
    r(this, "_itemMaxWidthPercent");
    r(this, "_itemMinWidthPercent");
    r(this, "_itemMaxHeight");
    r(this, "_gutter");
    r(this, "_lastLine", []);
    r(this, "_lastLineTop", 0);
    this._breakLineAspectRatioSum = t.breakLineAspectRatioSum || 2, this._containerWidth = t.containerWidth, this._gutter = t.gutter || 4, this._itemFallbackAspectRatio = t.itemFallbackAspectRatio || 1, this._itemMaxWidthPercent = t.itemMaxWidthPercent || 2 / 3, this._itemMinWidthPercent = t.itemMinWidthPercent || 1 / 4, this._itemMaxHeight = t.itemMaxHeight || 300;
  }
  _getLineRenderAspectRatioTotal(t) {
    return t.length ? t.map((e) => this._getRenderItemAspectRatio(e)).reduce(function(e, s) {
      return e + s;
    }, 0) : 0;
  }
  _getItemAspectRatio(t) {
    return t.height ? t.width / t.height : this._itemFallbackAspectRatio;
  }
  _getRenderItemAspectRatio(t) {
    return t.renderWidth / t.renderHeight;
  }
  _resizeItem(t, e) {
    if (!e.length) {
      const n = this._getRenderWidthContainGutter(t);
      let i = n / this._getItemAspectRatio(t) - this._gutter;
      i > this._itemMaxHeight && (i = this._itemMaxHeight);
      const a = !this._lastLineTop;
      return this._lastLineTop = a ? i : this._lastLineTop + i + this._gutter, {
        ...t,
        renderLeft: 0,
        renderTop: this._lastLineTop - i,
        renderWidth: n,
        renderHeight: i
      };
    } else {
      let n = this._getRenderWidthContainGutter(t);
      const i = this._getLineUsedWidth(e), a = this._containerWidth - i;
      return a < n && (n = a), a - n < this._itemMinWidthPercent * this._containerWidth && (n = a), {
        ...t,
        renderHeight: e[0].renderHeight,
        renderWidth: n - this._gutter,
        renderLeft: i + this._gutter,
        renderTop: e[0].renderTop
      };
    }
  }
  _getRenderWidthContainGutter(t) {
    const e = this._getItemAspectRatio(t) / this._breakLineAspectRatioSum, s = e < this._itemMinWidthPercent ? this._itemMinWidthPercent : e > this._itemMaxWidthPercent ? this._itemMaxWidthPercent : e;
    return this._containerWidth * s;
  }
  _getLineUsedWidth(t) {
    const e = t[t.length - 1];
    return e ? e.renderLeft + e.renderWidth : 0;
  }
  _getRandomBetween(t, e) {
    const s = Math.random(), n = t + s * (e - t + 1);
    return Math.floor(n);
  }
  add(t) {
    for (let e = 0; e < t.length; e++) {
      const s = t[e];
      this._lastLine.length && this._getLineRenderAspectRatioTotal(this._lastLine) + this._getItemAspectRatio(s) > this._breakLineAspectRatioSum && this._getLineUsedWidth(this._lastLine) >= this._containerWidth && (this._lastLine = []);
      const i = this._resizeItem(s, this._lastLine);
      this._lastLine.push(i), this._items.push(i);
    }
    return {
      items: this._items,
      renderTotalHeight: this._items[this._items.length - 1].renderTop + this._items[this._items.length - 1].renderHeight
    };
  }
  clear() {
    this._items = [], this._lastLine = [], this._lastLineTop = 0;
  }
}
export {
  m as EqualHeightWaterfall
};
