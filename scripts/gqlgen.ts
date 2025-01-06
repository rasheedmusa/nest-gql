import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

new GraphQLDefinitionsFactory().generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.ts'),
  outputAs: 'class',
  watch: true,
});
