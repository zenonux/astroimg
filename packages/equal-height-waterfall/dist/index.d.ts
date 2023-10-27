interface EqualHeightItem {
    width: number;
    height: number;
}
type EqualHeightRenderItem = EqualHeightItem & {
    renderHeight: number;
    renderWidth: number;
    renderTop: number;
    renderLeft: number;
};
interface EqualHeightWaterfallOptions {
    breakLineAspectRatioSum?: number;
    itemFallbackAspectRatio?: number;
    itemMaxHeight?: number;
    itemMinWidthPercent?: number;
    itemMaxWidthPercent?: number;
    containerWidth: number;
    gutter?: number;
}
export declare class EqualHeightWaterfall {
    _items: EqualHeightRenderItem[];
    _breakLineAspectRatioSum: number;
    _containerWidth: number;
    _itemFallbackAspectRatio: number;
    _itemMaxWidthPercent: number;
    _itemMinWidthPercent: number;
    _itemMaxHeight: number;
    _gutter: number;
    _lastLine: EqualHeightRenderItem[];
    _lastLineTop: number;
    constructor(opts: EqualHeightWaterfallOptions);
    _getLineRenderAspectRatioTotal(list: EqualHeightRenderItem[]): number;
    _getItemAspectRatio(item: EqualHeightItem): number;
    _getRenderItemAspectRatio(item: EqualHeightRenderItem): number;
    _resizeItem(item: EqualHeightItem, lastLine: EqualHeightRenderItem[]): EqualHeightRenderItem;
    _getRenderWidthContainGutter(item: EqualHeightItem): number;
    _getLineUsedWidth(list: EqualHeightRenderItem[]): number;
    _getRandomBetween(min: number, max: number): number;
    add(list: EqualHeightItem[]): {
        items: EqualHeightRenderItem[];
        renderTotalHeight: number;
    };
    clear(): void;
}
export {};
