export interface IBaseUseCase<I, O> {
  execute(input: I): O;
}
