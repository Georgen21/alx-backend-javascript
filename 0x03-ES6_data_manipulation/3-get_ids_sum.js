const getStudentIdsSum = (students) => students.reduce((value, current) => value + current.id, 0);

export default getStudentIdsSum;
