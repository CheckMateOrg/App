const DUMMY_PROFESSORS: Professor[] = [
  {
    id: "12345",
    name: "David",
    school_id: "123",
    review_ids: ["1", "2", "3", "4", "5"],
  },
  {
    id: "12346",
    name: "Jeff",
    school_id: "123",
    review_ids: ["7", "8", "9", "10", "11"],
  },
  {
    id: "12347",
    name: "Dave",
    school_id: "123",
    review_ids: ["11", "12", "13", "14", "15"],
  },
  {
    id: "12348",
    name: "Davin",
    school_id: "123",
    review_ids: ["21", "22", "23", "24", "25"],
  },
  {
    id: "12349",
    name: "李曉明",
    school_id: "123",
    review_ids: ["31", "32", "33", "34", "35"],
  },
];

const DUMMY_REVIEWS: { [id: string]: Review } = {
  "1": {
    course: "CSE134B",
    id: "1",
    date: "2022-12-19",
    score: 9,
    user_id: "1",
    message: "Good Professor",
  },
  "2": {
    course: "CSE110",
    id: "2",
    date: "2022-12-18",
    score: 8,
    user_id: "1",
    message: "Good Professor",
  },
  "3": {
    course: "CSE101",
    id: "3",
    date: "2022-12-16",
    score: 7,
    user_id: "1",
    message: "Good Professor",
  },
  "4": {
    course: "CSE134B",
    id: "4",
    date: "2022-12-19",
    score: 9,
    user_id: "1",
    message: "Good Professor",
  },
  "5": {
    course: "COGS108",
    id: "5",
    date: "2022-12-09",
    score: 3,
    user_id: "1",
    message: "Bad Professor",
  },
};

export const getProfessorsByQuery = async (
  query: string
): Promise<Professor[]> => {
  let professors: Professor[] = [];

  for (let prof of DUMMY_PROFESSORS) {
    if (prof.name.toLowerCase().startsWith(query.toLowerCase())) {
      professors.push(prof);
    }
  }

  return professors;
};

export const getProfessorById = async (id: string): Promise<Professor> => {
  return DUMMY_PROFESSORS[0];
};

export const getReviewsByIds = async (ids: string[]) => {
  let reviews: Review[] = [];

  for (let id of ids) {
    reviews.push(DUMMY_REVIEWS[id]);
  }

  return reviews;
};
