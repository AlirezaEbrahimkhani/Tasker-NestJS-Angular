export class Response<T = any> {
  Message: string = '';
  Success: boolean = true;
  Data: T | undefined[];
  constructor(Data?: T, Success?: boolean, Message?: string) {
    this.Message = Message ?? '';
    this.Success = Success ?? true;
    this.Data = Data ?? [];
  }
}
