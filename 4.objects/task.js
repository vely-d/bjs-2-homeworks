function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.hasOwnProperty("marks")) {
    return;
  }
  // this.marks = [...(this.marks), ...marks];
  this.marks = this.marks.concat(marks)
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty("marks") || this.marks.length === 0) {
      return 0;
    }
    let sum = this.marks.reduce((a, b) => a + b);
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  this.excluded = reason;
}
