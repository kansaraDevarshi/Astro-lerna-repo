import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_D6YO-W98.mjs';
import 'kleur/colors';
import 'html-escaper';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core/index.js';
import 'clsx';
import { g as getSession } from './__WD8JyDyD.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/devarshi/workspace/astro-mono-lerna/packages/my-astro-app/src/layout/Layout.astro", void 0);

const QUERY_TODO_LIST = gql`
  query getSingleUser($userId: String!) {
    getUserTodo(userId: $userId) {
      status
      title
    }
  }
`;
const ADD_TODO = gql`
  mutation AddTodo($userId: String!, $title: String!, $status: String!) {
    addTodo(userId: $userId, title: $title, status: $status) {
      # id
      # status
      title
    }
  }
`;
gql`
  mutation UpdateTodoList($input: UpdateTodoList!) {
    updateTodoList(input: $input) {
      id
      status
      title
      userId
    }
  }
`;

const DisplayData = ({ lists, userId }) => {
  console.log("Here...");
  const [todos, setTodos] = useState(lists);
  const [input, setInput] = useState("");
  const [addTodo, { loading, error }] = useMutation(ADD_TODO);
  const handleAddTodo = async () => {
    try {
      if (!input) {
        console.warn("Please enter a todo title.");
        return;
      }
      const { data } = await addTodo({
        variables: {
          input: { title: input, userId }
        }
      });
      if (data?.addTodo) {
        setTodos([...todos, data.addTodo]);
        setInput("");
      } else {
        console.error("Failed to add todo.");
      }
    } catch (ex) {
      console.error("Error adding todo:", ex);
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Ex: Play Footboll",
        value: input,
        onChange: handleChange,
        disabled: loading
      }
    ),
    /* @__PURE__ */ jsx("button", { onClick: handleAddTodo, children: "ADD" }),
    /* @__PURE__ */ jsx("ul", { children: todos.map((t, idx) => /* @__PURE__ */ jsx("li", { children: t.title }, idx)) })
  ] });
};

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const session = await getSession(Astro2.request);
  const {
    data: { getUserTodo: todos }
  } = await client.query({
    query: QUERY_TODO_LIST,
    variables: { userId: session?.user?.email ?? "" }
  });
  const userId = session?.user?.email ?? "";
  console.log("data", todos, userId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>User's Todos list</h1> ${renderComponent($$result2, "DisplayData", DisplayData, { "lists": todos, "userId": userId })} ` })}`;
}, "/home/devarshi/workspace/astro-mono-lerna/packages/my-astro-app/src/pages/dashboard.astro", void 0);

const $$file = "/home/devarshi/workspace/astro-mono-lerna/packages/my-astro-app/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, dashboard as d };
