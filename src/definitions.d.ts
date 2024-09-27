type Status = "idle" | "loading" | "successfull" | "rejected";

interface dataContent<T> {
  content: T;
}

interface userAuth {
  username: string;
  password: string;
}
