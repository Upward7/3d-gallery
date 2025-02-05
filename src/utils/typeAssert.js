import { Light } from "three"

export function isMesh(obj)
{
    return (typeof obj == "object" && obj != null && "isMesh" in obj);
}

export function isLight(obj) {
    return obj instanceof Light;
}