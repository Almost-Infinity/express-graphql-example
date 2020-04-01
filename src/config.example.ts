// tslint:disable:object-literal-sort-keys

export default {
  port: 3010,
  database: {
    type: 'mysql',
    connection: {
      database : '',
      host : '',
      password : '',
      user : '',
    },
    /*
     * You can delete this and initialize database manually.
     * If this is here, application will run migrations on start.
     */
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
  /*
   * Default "text" (query) shown to user in GraphiQL.
   */
  defaultQuery: `
  # Welcome!
  #
  # If you do not know this tool, you can read about it here: https://github.com/graphql/graphiql/
  #
  # You can try some easy query, like retrieving list of authors:
  #
  # query {
  #   authors {
  #     edges {
  #       node {
  #         id
  #         _id
  #         firstName
  #         lastName
  #       }
  #     }
  #   }
  # }
  #
  # Or you can try to get list of quotes with its author:
  #
  # query {
  #   quotes {
  #     edges {
  #       node {
  #         id
  #         _id
  #         text
  #         author {
  #           id
  #           _id
  #           fistName
  #           lastName
  #         }
  #       }
  #     }
  #   }
  # }\n\n`,
};
