import { gql } from '@apollo/client';

const QUERY_ALL_TODO_LIST = gql`
  query GetTodoList {
    allTodoList {
      userId
      id
      title
      status
    }
  }
`;

const QUERY_TODO_LIST = gql`
  query getSingleUser($userId: String!) {
    getUserTodo(userId: $userId) {
      id
      title
      status
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($userId: String!, $title: String!, $status: String!) {
    addTodo(userId: $userId, title: $title, status: $status) {
      id
      title
      status
    }
  }
`;

export {
  QUERY_ALL_TODO_LIST,
  QUERY_TODO_LIST,
  ADD_TODO,
};
