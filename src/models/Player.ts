export class Player {
    constructor(
        public name: string,
        public wins: number,
        public marker: string,
        public playing: boolean,
        public boxesClicked: number[],
    ) {}
}