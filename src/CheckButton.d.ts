import type { Checker } from './Checker';
import { UiComponent } from './UiComponent';
declare class CheckButton extends UiComponent {
    readonly parent: Checker;
    gateways: HTMLDivElement;
    totals: HTMLDivElement;
    constructor(parent: Checker);
    update(): void;
}
export { CheckButton };
//# sourceMappingURL=CheckButton.d.ts.map