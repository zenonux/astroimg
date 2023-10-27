# equal-height-waterfall

- break line when sum of aspect ratio > 2
- item's min width > 1/4 container's width
- item's max width < 2/3 container's width
- item's max height < 300

## Install

```bash
npm install @astroimg/equal-height-waterfall -S
```

## Usage

```ts
import { EqualHeightWaterfall } from '@urcloud/equal-height-waterfall'
const ins = new EqualHeightWaterfall({
  containerWidth: window.screen.width,
  breakLineAspectRatioSum: 2,
  itemFallbackAspectRatio: 1,
  itemMinWidthPercent: 1 / 4,
  itemMaxWidthPercent: 2 / 3,
  itemMaxHeight: 400,
  gutter: 4
})
const { items, renderTotalHeight } = ins.add()
```
