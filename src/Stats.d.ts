import type { Checker } from './Checker';
import { UiComponent } from './UiComponent';
declare class Stats extends UiComponent {
    readonly parent: Checker;
    gateways: HTMLDivElement;
    totals: HTMLDivElement;
    constructor(parent: Checker);
    update(): void;
}
export { Stats };
//# sourceMappingURL=Stats.d.ts.map