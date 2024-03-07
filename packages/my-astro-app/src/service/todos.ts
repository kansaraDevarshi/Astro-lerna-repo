import { gql } from "@apollo/client/core";

// Query to fetch todo list for a single user
const QUERY_TODO_LIST = gql`
  query getSingleUser($userId: String!) {
    getUserTodo(userId: $userId) {
      status
      title
    }
  }
`;

// Mutation to add a todo
const ADD_TODO = gql`
  mutation AddTodo($userId: String!, $title: String!, $status: String!) {
    addTodo(userId: $userId, title: $title, status: $status) {
      id
      status
      title
    }
  }
`;

// Mutation to update a todo
const UPDATE_TODO = gql`
  mutation UpdateTodoList($input: UpdateTodoList!) {
    updateTodoList(input: $input) {
      id
      status
      title
      userId
    }
  }
`;
export {
  QUERY_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
};