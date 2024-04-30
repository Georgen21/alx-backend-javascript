const getListStudentIds = (arrayOfObjects) => {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.map((studentId) => studentId.id);
};

export default getListStudentIds;
