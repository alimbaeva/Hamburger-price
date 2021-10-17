// *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
// и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и 
// калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

// class Hamburger {
//     constructor(size, stuffing) { ... }
//     addTopping(topping) {    // Добавить добавку }
//     removeTopping(topping) { // Убрать добавку }
//     getToppings(topping) {   // Получить список добавок }
//     getSize() {              // Узнать размер гамбургера }
//     getStuffing() {          // Узнать начинку гамбургера }
//     calculatePrice() {       // Узнать цену }
//     calculateCalories() {    // Узнать калорийность }
//   }

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.getToppings = "";
        this.siSum = 0;
        this.sizeKall = 0;
    }

    getSize() {

        if (this.size === 'большой') {
            this.siSum = 100;
            this.sizeKall = 40;
            this.getToppings += 'Гамбургер большой';
        } else {
            this.siSum = 50;
            this.sizeKall = 20;
            this.getToppings += 'Гамбургер маленький';
        }
    }

    addTopping(topping) {
        switch (topping) {
            case 'приправой':
                this.siSum += 15;
                this.sizeKall += 0;
                this.getToppings += ' приправой';
                break;
            case 'майонезом':
                this.siSum += 20;
                this.sizeKall += 5;
                this.getToppings += ' майонезом';
                break;
        }

    }

    removeTopping(topping) {
        switch (topping) {
            case 'приправой':
                this.siSum -= 15;
                this.sizeKall -= 0;
                this.getToppings.replace(' приправой', '');
                break;
            case 'майонезом':
                this.siSum -= 20;
                this.sizeKall -= 5;
                this.getToppings = this.getToppings.replace(' майонезом', '');
                // this.getToppings.replace(' майонезом', '');
                break;
        }
    }

    getStuffing() {
        switch (this.stuffing) {
            case 'сыром':
                this.siSum += 10;
                this.sizeKall += 20;
                this.getToppings += 'сыр';
                break;
            case 'салатом':
                this.siSum += 20;
                this.sizeKall += 5;
                this.getToppings += ' салат';
                break;
            case 'картофелем':
                this.siSum += 15;
                this.sizeKall += 10;
                this.getToppings += ' картофелем';
                break;

        }
        return `У вас ${this.size} гамбургер с начинкой ${this.stuffing}\n
        Гамбургер собран из ${this.getToppings}
        каллорийность гамбургера ${this.sizeKall}
        Сумма гамбургера ${this.siSum}
        `
    }
}

let users = new Hamburger('большой', 'картофелем');
users.getSize()
users.addTopping('майонезом');
// users.removeTopping('майонезом');
console.log(users.getStuffing());