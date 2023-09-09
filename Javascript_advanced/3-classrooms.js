function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  const students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    const seatNumber = i + 1;
    students.push(studentSeat(seatNumber));
  }

  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10

