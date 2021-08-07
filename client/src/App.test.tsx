import { FC } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { articleQuery } from "./queries";
import { ArticleQueryResult } from "./queries";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:6969/server/graphql`,
  cache: new InMemoryCache(),
});

test("website renders", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});

test("renders not the onion", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const subTitle = screen.getByText(/Not/);
  const titleElement = screen.getByText(/The Onion/);
  expect(subTitle).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});

test("renders article image", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const imageElement = screen.getByAltText(/article content/);
  expect(imageElement).toBeInTheDocument();
});

test("article queries", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});

test("dark mode toggle", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});
test("light mode toggle", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});

test("refresh", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});
