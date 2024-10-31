export const timer = {
  getDate() {
    const nextYear = new Date().getFullYear() + 1;
    const nextNewYear = new Date(nextYear, 0, 1, 0, 0, 0).getTime();
    const currentTime = new Date().getTime();
    const remains = Math.trunc((nextNewYear - currentTime) / 1000);
    const days = Math.trunc(remains / 86400);
    const hours = Math.trunc((remains - days * 86400) / 3600);
    const minutes = Math.trunc((remains - days * 86400 - hours * 3600) / 60);
    const seconds = remains - days * 86400 - hours * 3600 - minutes * 60;
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
  },
  startTimer() {
    setInterval(() => {
      Object.entries(this.getDate()).forEach((e) => {
        document.querySelector(`.${e[0]}-count`).textContent = e[1];
      });
    }, 1000);
  },
};
