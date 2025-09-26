import { default as MoonPhaseCanvas } from './MoonPhaseCanvas.vue';
declare function getMoonDay(): number;
declare function isUpMoon(moonDay: number): boolean;
declare enum MoonPhaseType {
    NewMoon = "NewMoon",// 新月
    WaxingCrescent = "WaxingCrescent",// 娥眉月（上弦前）
    FirstQuarter = "FirstQuarter",// 上弦月
    WaxingGibbous = "WaxingGibbous",// 盈凸月
    FullMoon = "FullMoon",// 满月
    WaningGibbous = "WaningGibbous",// 亏凸月
    LastQuarter = "LastQuarter",// 下弦月
    WaningCrescent = "WaningCrescent"
}
declare function getMoonPhaseType(moonDay: number): MoonPhaseType;
export { getMoonDay, getMoonPhaseType, isUpMoon, MoonPhaseCanvas, MoonPhaseType, };
