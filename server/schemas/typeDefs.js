const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
    position: String
    team: ID
  }

  type Team {
    _id: ID
    teamId: String
    project: [Project]
    users: [User]
  }

  type Project {
    _id: ID
    projectName: String
    status: String
    description: String
    createdAt: String
    endDate: String
    teams: [Team]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Task {
    _id: ID
    taskname: String
    user: ID
    project: ID
  }

  type Query {
    users: [User]
    projects: [Project]
    teams: [Team]
    tasks: [Task]
    getUser(userId: ID!): User
    getTeam(teamId: ID!): Team
    getProject(projectId: ID!): Project
    getTask(taskId: ID!): Task
  }

  type Mutation {
    createUser(
      username: String!
      password: String!
      email: String!
      firstname: String!
      lastname: String!
      position: String!
      team: ID!
    ): User
    login(email: String!, password: String!): Auth
    createProject(
      projectName: String!
      description: String!
      teams: ID!
      endDate: String
    ): Project
    createTeam(user: String!, project: ID!): Team
    createTask(taskname: String!, userId: ID!, projectId: ID!): Task
    deleteUser(_id: ID!): User
    deleteProject(_id: ID!): Project
    deleteTeam(_id: ID!): Team
  }
`;

// createTeam(_id,teamId,users): Team
// login(email, password): User

module.exports = typeDefs;
