function parseCount(value) {
    let result = Number.parseFloat(value);
    if(result){
        return(result);
    }
    else {
        throw new Error("Невалидное значение");
    }
}

function validateCount(value) {
    let count = 0;
    try {
        count = parseCount(value);
    }
    catch(error) {
        return error;
    }
    return count;
}

class Triangle {
    constructor(edge1, edge2, edge3){
        let edges = [edge1, edge2, edge3];
        if(edges.some(side => side <= 0)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        let exists = edges.every((side, index, array) => 2 * side < array.reduce((acc, el) => acc + el));
        if(!exists) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this._edges = edges;
    }

    get perimeter() {
        return this._edges.reduce((acc, el) => acc + el);
    }

    get area() {
        let p = this.perimeter / 2;
        // let diffProduct = this._edges.reduce((acc, el) => acc * (p - el));
        // let result = Math.sqrt(p * diffProduct);
        let result = Math.sqrt(p * this._edges.reduce((acc, el) => acc * (p - el), 1));
        return Math.round(result * 1000) / 1000;
    }
}

class ErrorObject {
    get perimeter() {
        return  "Ошибка! Треугольник не существует";
    }
    
    get area() {
        return "Ошибка! Треугольник не существует";
    }
}

function getTriangle(edge1, edge2, edge3) {
    let triangle = {};
    try {
        triangle = new Triangle(edge1, edge2, edge3);
    }
    catch {
        return new ErrorObject();
    }
    return triangle;
}