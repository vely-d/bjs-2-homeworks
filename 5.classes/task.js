// task 1, 2

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(value) {
        if (value > 100) {
            this._state = 100;
            return;
        }
        if (value < 0) {
            this._state = 0;
            return;
        }
        this._state = value;
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let allBookNames = this.books.map(b => b.name);
        if (!allBookNames.includes(bookName)) {
            return null;
        }
        let bookIndex = allBookNames.indexOf(bookName);
        let book = this.books[bookIndex];
        this.books = this.books.filter((e, i) => i != bookIndex);
        return book;
    }
}

// task 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    setSubject(subjectName) {
        if (Object.keys(this.marks).includes(subjectName)) {
            return;
        }
        this.marks[subjectName] = [];
    }

    addMark(mark, subject) {
        if (this.excluded || ![2,3,4,5].includes(mark)) {
            return;
        }
        if (!Object.keys(this.marks).includes(subject)) {
            this.setSubject(subject);
        }
        
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if(!this.marks[subject]) {
            return 0;
        }

        let sum = this.marks[subject].reduce((a, b) => a + b);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        if (this.excluded || Object.keys(this.marks).length === 0) {
            return 0;
        }
        
        let marksCount = 0;
        let marksSum = 0;
        for (let subj in this.marks) {
            marksCount += this.marks[subj].length;
            marksSum += this.marks[subj].reduce((a, b) => a + b);
        }
        // let sum = this.marks.reduce((a, b) => a + b);
        return marksSum / marksCount;
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}

// function Student(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.marks = [];
// }

// Student.prototype.setSubject = function (subjectName) {
//     this.subject = subjectName;
// }

// Student.prototype.addMarks = function (...marks) {
//     if (!this.hasOwnProperty("marks")) {
//         return;
//     }
//     // this.marks = [...(this.marks), ...marks];
//     this.marks = this.marks.concat(marks)
// }

// Student.prototype.getAverage = function () {
//     if (!this.hasOwnProperty("marks") || this.marks.length === 0) {
//         return 0;
//     }
//     let sum = this.marks.reduce((a, b) => a + b);
//     return sum / this.marks.length;
// }

// Student.prototype.exclude = function (reason) {
//     delete this.marks;
//     this.excluded = reason;
// }
