export type PhotoService = {
  loadPhoto(): Promise<string>
}

export class PhotoServiceAPI implements PhotoService {
  public async loadPhoto(): Promise<string> {
   return await func()

  }
}

const func = async () => "A photo"
