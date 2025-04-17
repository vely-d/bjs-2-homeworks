class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутсвуют обязательные аргументы");
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({ time: time, callback: callback, canCall: true });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        return `${"0".repeat(hours < 10) + hours}:${"0".repeat(minutes < 10) + minutes}`;
    }

    async start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => { this._itetateThroughAlarms(); }, 1000);
    }
    
    _itetateThroughAlarms() {
        this.alarmCollection.forEach(alarm => {
            if (alarm.canCall && alarm.time === this.getCurrentFormattedTime()) {
                alarm.canCall = false;
                alarm.callback();
            }
        });
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}