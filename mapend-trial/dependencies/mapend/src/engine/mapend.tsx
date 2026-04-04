import {ComponentType} from "react";
import {registerRootComponent} from "expo";

export const Mapend = {

    boot(component: ComponentType) {
        return registerRootComponent(component);
    }
}