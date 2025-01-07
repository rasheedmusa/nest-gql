import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Cat')
export class CatsResolver {
  @Query('cats')
  async getCats() {
    return [{ id: 1 }, { id: 2 }];
  }
}
