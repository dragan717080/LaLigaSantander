import { MouseEvent } from 'react';
import { TeamInterface, PlayerInterface } from '../interfaces';

abstract class HTMLHelpers {
    static getActiveScorer(e: MouseEvent<HTMLElement>, topPerformers: (TeamInterface | PlayerInterface)[], isManager: boolean = false): void {
        const node = e.currentTarget as HTMLElement;
        const parentNode = node.parentNode as HTMLElement | null;

        if (parentNode) {
            const activeScorers = parentNode.getElementsByClassName('active-scorer');
            if (activeScorers.length) {
                activeScorers[0].classList.remove('active-scorer');
            }

            node.classList.add('active-scorer');
            const imgElement = parentNode.getElementsByTagName('img')[0] as HTMLImageElement;
            const staffName = node.childNodes[0]?.textContent;

            if (isManager) {
                const selectedManager = topPerformers.find((item) => (item as TeamInterface).staff === staffName);
                if (selectedManager) {
                    if ((selectedManager as TeamInterface).staff) {
                        imgElement.src = (selectedManager as TeamInterface).staff_img;
                    }
                }
            }
            else {
                const selectedPlayer = topPerformers.find((item) => (item as PlayerInterface).name === staffName);
                imgElement.src = (selectedPlayer as PlayerInterface).face as string;
            }
        }
    }
}

export default HTMLHelpers;
