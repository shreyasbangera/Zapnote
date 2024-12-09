import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "i223c4rg",
  dataset: "development",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skF4J4wialMoLBflo2Uk9arnYAqpbiZG3ZWJ9P28BTZ8pSKPFbiYsozFAQGg1RLAAP6YWTKScPC3CCr7kLS4TS9UzTx3yGmvvHfEsOTYBo4CKjf2jiRnjaW7pcQViX1ZRqIHBjsbdzk4dYL8gfKMOVuyWJ1YpY7Jikt1UWSJ5UoFxS1lemHy"
});