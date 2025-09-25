<script setup lang="ts">
import { watch, onMounted, ref } from "vue";

interface Props {
  size?: number;
  illumination: number;
  textureUrl: string;
  moonOrient: number; // 月亮方向角度（0-360）
  isUpMoon: boolean; // 上旬/月亮阴影方向
}

const props = withDefaults(defineProps<Props>(), { size: 200 });
const dpr = window.devicePixelRatio || 1;
const canvasRef = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

const mData = ref<number[]>(Array.from<number>({ length: 8 }).fill(0));
const mCtrl = ref<number[]>(Array.from<number>({ length: 16 }).fill(0));
const mDataNew = ref<number[]>(Array.from<number>({ length: 8 }).fill(0));
const mCtrlNew = ref<number[]>(Array.from<number>({ length: 16 }).fill(0));
const C = 0.552284749831;

const center = ref({ x: props.size  / 2, y: props.size  / 2 });
const radius = ref(props.size  / 2);
const texture = ref<HTMLImageElement | null>(null);

// 封装 save/restore
function withContext(fn: () => void) {
  if (!ctx.value) return;
  ctx.value.save();
  try {
    fn();
  } finally {
    ctx.value.restore();
  }
}

function initData() {
  const r = radius.value;
  mData.value = [0, r, r, 0, 0, -r, -r, 0];
  const diff = r * C;
  mCtrl.value = [
    mData.value[0] + diff,
    mData.value[1],
    mData.value[2],
    mData.value[3] + diff,
    mData.value[2],
    mData.value[3] - diff,
    mData.value[4] + diff,
    mData.value[5],
    mData.value[4] - diff,
    mData.value[5],
    mData.value[6],
    mData.value[7] - diff,
    mData.value[6],
    mData.value[7] + diff,
    mData.value[0] - diff,
    mData.value[1],
  ];
}

function refreshDataNew(process: number) {
  mDataNew.value[0] = mData.value[0];
  mDataNew.value[1] = mData.value[1];
  mDataNew.value[2] =
    mData.value[6] + (mData.value[2] - mData.value[6]) * process;
  mDataNew.value[3] = mData.value[3];
  mDataNew.value[4] = mData.value[4];
  mDataNew.value[5] = mData.value[5];
  mDataNew.value[6] = mData.value[6];
  mDataNew.value[7] = mData.value[7];

  mCtrlNew.value[0] =
    mCtrl.value[14] + (mCtrl.value[0] - mCtrl.value[14]) * process;
  mCtrlNew.value[1] = mCtrl.value[1];
  mCtrlNew.value[2] =
    mCtrl.value[12] + (mCtrl.value[2] - mCtrl.value[12]) * process;
  mCtrlNew.value[3] = mCtrl.value[3];
  mCtrlNew.value[4] =
    mCtrl.value[10] + (mCtrl.value[4] - mCtrl.value[10]) * process;
  mCtrlNew.value[5] = mCtrl.value[5];
  mCtrlNew.value[6] =
    mCtrl.value[8] + (mCtrl.value[6] - mCtrl.value[8]) * process;
  mCtrlNew.value[7] = mCtrl.value[7];

  for (let i = 8; i < 16; i++) {
    mCtrlNew.value[i] = mCtrl.value[i];
  }
}

// 绘制阴影
function drawShadow( process: number, moonOrient: number, isUpMoon: boolean) {
  if (!ctx.value) return;
  const ctxValue = ctx.value;

  withContext(() => {
    initData();
    refreshDataNew(process);

    ctxValue.translate(center.value.x, center.value.y);

    const angle = moonOrient + (isUpMoon ? 180 : 0);
    ctxValue.rotate((angle * Math.PI) / 180);

    // 设置模糊滤镜
    ctxValue.filter = `blur(${props.size / 100 * dpr}px)`;

    const path = new Path2D();
    path.moveTo(mDataNew.value[0], mDataNew.value[1]);
    path.bezierCurveTo(
      mCtrlNew.value[0],
      mCtrlNew.value[1],
      mCtrlNew.value[2],
      mCtrlNew.value[3],
      mDataNew.value[2],
      mDataNew.value[3],
    );
    path.bezierCurveTo(
      mCtrlNew.value[4],
      mCtrlNew.value[5],
      mCtrlNew.value[6],
      mCtrlNew.value[7],
      mDataNew.value[4],
      mDataNew.value[5],
    );
    path.bezierCurveTo(
      mCtrlNew.value[8],
      mCtrlNew.value[9],
      mCtrlNew.value[10],
      mCtrlNew.value[11],
      mDataNew.value[6],
      mDataNew.value[7],
    );
    path.bezierCurveTo(
      mCtrlNew.value[12],
      mCtrlNew.value[13],
      mCtrlNew.value[14],
      mCtrlNew.value[15],
      mDataNew.value[0],
      mDataNew.value[1],
    );


    const grad = ctxValue.createLinearGradient(
      -radius.value,
      0,
      radius.value,
      0,
    );
    grad.addColorStop(0, "rgba(0,0,0,1)"); // 暗面最深
    grad.addColorStop(1, "rgba(0,0,0,0.6)"); // 亮面透明
    ctxValue.fillStyle = grad;


    ctxValue.fill(path);
  });
}

function drawMoon(process: number, moonOrient: number, isUpMoon: boolean) {
  if (!ctx.value) return;
  const ctxValue = ctx.value;
  const size = props.size;

  ctxValue.clearRect(0, 0, size, size);

  // 底图
  withContext(() => {
    if (texture.value) {
      ctxValue.drawImage(texture.value, 0, 0, size, size);
    }
  });

  // 阴影
  drawShadow(process, moonOrient, isUpMoon);
}

function loadTexture(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}


onMounted(async () => {
  if (!canvasRef.value) return;
  ctx.value = canvasRef.value.getContext("2d");

  const canvas = canvasRef.value;
  canvas.width = props.size! * dpr;
  canvas.height = props.size! * dpr;
  canvas.style.width = props.size! + 'px';
  canvas.style.height = props.size! + 'px';
  ctx.value?.scale(dpr, dpr);

  texture.value = await loadTexture(props.textureUrl);
  const process = 1 - props.illumination;
  drawMoon(process, props.moonOrient, props.isUpMoon);
});

watch(
  () =>
    [props.illumination, props.moonOrient, props.isUpMoon] as [
      number,
      number,
      boolean,
    ],
  ([illumination, moonOrient, isUpMoon]) => {
    const process = 1 - illumination;
    drawMoon(process, moonOrient, isUpMoon);
  },
);
</script>

<template>
  <canvas ref="canvasRef"  />
</template>
