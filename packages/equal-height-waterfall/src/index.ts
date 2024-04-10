interface EqualHeightItem {
  width: number
  height: number
}

type EqualHeightRenderItem = EqualHeightItem & {
  renderHeight: number
  renderWidth: number
  renderTop: number
  renderLeft: number
}

interface EqualHeightWaterfallOptions {
  breakLineAspectRatioSum?: number
  itemFallbackAspectRatio?: number
  itemMaxHeight?: number
  itemMinWidthPercent?: number
  itemMaxWidthPercent?: number
  containerWidth: number
  gutter?: number
}

export class EqualHeightWaterfall {
  _items: EqualHeightRenderItem[] = []
  _breakLineAspectRatioSum: number
  _containerWidth: number
  _itemFallbackAspectRatio: number
  _itemMaxWidthPercent: number
  _itemMinWidthPercent: number
  _itemMaxHeight: number
  _gutter: number
  _lastLine: EqualHeightRenderItem[] = []
  _lastLineTop = 0

  constructor(opts: EqualHeightWaterfallOptions) {
    this._breakLineAspectRatioSum = opts.breakLineAspectRatioSum || 2
    this._containerWidth = opts.containerWidth
    this._gutter = opts.gutter || 4
    this._itemFallbackAspectRatio = opts.itemFallbackAspectRatio || 1
    this._itemMaxWidthPercent = opts.itemMaxWidthPercent || 2 / 3
    this._itemMinWidthPercent = opts.itemMinWidthPercent || 1 / 4
    this._itemMaxHeight = opts.itemMaxHeight || 300
  }
  _getLineRenderAspectRatioTotal(list: EqualHeightRenderItem[]) {
    return list.length
      ? list
          .map((v) => this._getRenderItemAspectRatio(v))
          .reduce(function (prev, curr) {
            return prev + curr
          }, 0)
      : 0
  }
  _getItemAspectRatio(item: EqualHeightItem) {
    return item.height ? item.width / item.height : this._itemFallbackAspectRatio
  }
  _getRenderItemAspectRatio(item: EqualHeightRenderItem) {
    return item.renderWidth / item.renderHeight 
  }
  _resizeItem(item: EqualHeightItem, lastLine: EqualHeightRenderItem[]): EqualHeightRenderItem {
    const isBreakLine = !lastLine.length
    if (isBreakLine) {
      const renderWidthContainGutter = this._getRenderWidthContainGutter(item)
      let renderHeight = renderWidthContainGutter / this._getItemAspectRatio(item) - this._gutter
      if (renderHeight > this._itemMaxHeight) {
        renderHeight = this._itemMaxHeight
      }
      const isFirstLine = !this._lastLineTop
      // remove top value of first line
      this._lastLineTop = isFirstLine
        ? renderHeight
        : this._lastLineTop + renderHeight + this._gutter
      return {
        ...item,
        renderLeft: 0,
        renderTop: this._lastLineTop - renderHeight,
        renderWidth: renderWidthContainGutter,
        renderHeight
      }
    } else {
      let renderWidthContainGutter = this._getRenderWidthContainGutter(item)
      const lineUsedWidth = this._getLineUsedWidth(lastLine)
      const maxCanUsedWidth = this._containerWidth - lineUsedWidth
      if (maxCanUsedWidth < renderWidthContainGutter) {
        renderWidthContainGutter = maxCanUsedWidth
      }
      const lastItemCanUseWidth = maxCanUsedWidth - renderWidthContainGutter
      if (lastItemCanUseWidth < this._itemMinWidthPercent * this._containerWidth) {
        renderWidthContainGutter = maxCanUsedWidth
      }
      return {
        ...item,
        renderHeight: lastLine[0].renderHeight,
        renderWidth: renderWidthContainGutter - this._gutter,
        renderLeft: lineUsedWidth + this._gutter,
        renderTop: lastLine[0].renderTop
      }
    }
  }
  _getRenderWidthContainGutter(item: EqualHeightItem) {
    const shouldWidthPercent = this._getItemAspectRatio(item) / this._breakLineAspectRatioSum
    const canWidthPercent =
      shouldWidthPercent < this._itemMinWidthPercent
        ? this._itemMinWidthPercent
        : shouldWidthPercent > this._itemMaxWidthPercent
        ? this._itemMaxWidthPercent
        : shouldWidthPercent

    return this._containerWidth * canWidthPercent
  }
  _getLineUsedWidth(list: EqualHeightRenderItem[]) {
    const lastItem = list[list.length - 1]
    return lastItem ? lastItem.renderLeft + lastItem.renderWidth : 0
  }
  _getRandomBetween(min: number, max: number) {
    const randomFraction = Math.random()

    const randomInRange = min + randomFraction * (max - min + 1)

    return Math.floor(randomInRange)
  }

  add(list: EqualHeightItem[]) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const isBreakLine =
        this._lastLine.length &&
        (this._getLineRenderAspectRatioTotal(this._lastLine) + this._getItemAspectRatio(item) >
          this._breakLineAspectRatioSum ||
        this._getLineUsedWidth(this._lastLine) >= this._containerWidth)
      if (isBreakLine) {
        this._lastLine = []
      }
      const renderItem = this._resizeItem(item, this._lastLine)
      this._lastLine.push(renderItem)
      this._items.push(renderItem)
    }
    return {
      items: this._items,
      renderTotalHeight:
        this._items[this._items.length - 1].renderTop +
        this._items[this._items.length - 1].renderHeight
    }
  }
  clear() {
    this._items = []
    this._lastLine = []
    this._lastLineTop = 0
  }
}
