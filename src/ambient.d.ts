type Professor = {
  id: string;
  name: string;
  school_id: string;
  review_ids: string[];
};

type Review = {
  course: string;
  id: string;
  date: string;
  score: number;
  user_id: string;
  message: string;
};

type User = {
  id: string;
  name: string;
  school_id: string;
  review_ids: string[];
};

type School = {
  id: string;
  name: string;
};
