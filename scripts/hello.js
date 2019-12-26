let {graphql, buildSchema} = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: [Hello]
  }
  type Hello {
    id: ID!
    name: String!
  }
`);

let root = {
    hello: () => {
        return ([{id: 1, name: 'name1'}, {id: 2, name: 'name2'}])
    }
};
let query = `
query {
  hello {
    id
    name
  }
}`;

graphql(schema, query, root).then((response) => {
    response.data['hello'].forEach(({id, name}) => {
        console.log(id);
        console.log(name);
    });
});
