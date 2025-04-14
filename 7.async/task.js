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
        let alarmIndex = this.alarmCollection.findIndex(alarm => alarm.time === time);
        
        while(alarmIndex !== -1) {
            this.alarmCollection.splice(alarmIndex, 1);
            alarmIndex = this.alarmCollection.findIndex(alarm => alarm.time === time);
        }
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
        this.intervalId = setInterval(
            this.alarmCollection.forEach(alarm => {
                if (alarm.canCall && alarm.time === this.getCurrentFormattedTime()) {
                    alarm.callback();
                    alarm.canCall = false;
                }
            }),
            1000);
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