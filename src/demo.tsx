import React from "react";
import ReactDOM from "react-dom";
import {ApolloProvider, useQuery} from "@apollo/react-hooks";
import ApolloClient, {gql, InMemoryCache} from "apollo-boost";

const cache = new InMemoryCache();

const GET_POKEMONS = gql(`
    query getPokemons {
      user @client {
        name
      }
    }
  `);

const resolvers = {
    Query: {
        user: () => {
            console.log("user");
            return ({__typename: "User", name: "Trainer"});
        }
    }
};

const typeDefs = `
    type Query {
      user: {
        name: String
      }
    }
  `;


let App: React.FC = () => {
    let {loading, error, data} = useQuery(GET_POKEMONS);
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error...</h4>;
    console.log(data);
    return (
        <div className="App">
            <h1>Hello {data.user.name}</h1>
            <h2>These are your Pokemon</h2>
        </div>
    )
};

const client = new ApolloClient({
//    uri: "https://graphql-pokemon.now.sh/graphql",
    clientState: {
        cache: cache,
        resolvers: resolvers,
        typeDefs: typeDefs,
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root")
);
