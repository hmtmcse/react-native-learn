import { MConfig } from "./mconfig";
import MAdapter from "./madapter";


export default interface MRegistry {
    config: MConfig
    adapter: MAdapter
}