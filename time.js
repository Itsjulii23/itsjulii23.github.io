class time {
    hour
    minute
    second
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
}

export async function generarTiempo(timeObject) {
    return new Promise((resolve, reject) => {
        try {
            let t1 = new time(
                timeObject.hour,
                timeObject.minute,
                timeObject.second
            )
            resolve(t1);
        } catch (error) {
            reject(error);
        }
    });
}