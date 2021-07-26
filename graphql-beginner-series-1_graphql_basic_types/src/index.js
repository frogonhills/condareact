const { ApolloServer, gql } = require("apollo-server");

// type checking
// query vs. mutation
// objects
// arrays
// arguments

// crud

const typeDefs = gql`
  type Query {
    hello: String
    user: User!
    product(password:String!): Product!
    
    
  }
  
  type User {
    id: ID!
    username: String!
  }

  input UserInfo{
    username: String!
    password: String!
    age: Int
  }
  type Mutation {
    register(UserInfo:UserInfo!): RegisterResponse!
    login(userInfor: UserInfo): Boolean!
    
  }
  type Error {
    field: String!
    massage: String!
  }

  type RegisterResponse{
    errors:[Error]
    user:User
  }

  type Product{
    name: String!
    price: Int
  }

  

`;

const resolvers = {
  Query: {
    hello: () => null,
    user:()=>({
      id: 1,
      username:"alif"
    }),
    product:()=>({
      name:"orange juce ",
      price: 12
    })
    
  },
  Mutation:{
    
    login: ()=> false,
    register:()=>({
      errors:[{

        field:"username",
        massage:"not bad"

      },
      {
        field:"dash1",
        massage:"cool"
      }
    ],
      user:{
        id: 1,
        username:"shifat"
      }
    })
  }

}
  

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
