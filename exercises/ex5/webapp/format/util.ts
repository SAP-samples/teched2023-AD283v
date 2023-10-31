import { IconColor } from "sap/ui/core/library";

export enum Threshold {
    Warm = 4,
    Hot = 5
}

export function formatIconColor(temperature: number): IconColor|string {
    if (temperature < Threshold.Warm) {
        return "#0984e3";
    } else if (temperature >= Threshold.Warm && temperature < Threshold.Hot) {
        return IconColor.Critical;
    } else {
        return IconColor.Negative;
    }
}

export function formatTemperature(temperature: number, unit: string): number {
    if (unit === "°F") {
        temperature = temperature * 1.8 + 32;
    }
    return Math.round(temperature * 10) / 10;
}