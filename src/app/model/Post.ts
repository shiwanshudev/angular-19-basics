export class PostModel {
  body: string;
  id: number;
  title: string;
  userId: number;

  constructor() {
    this.body = '';
    this.id = 500 + Math.ceil(Math.random() * 1000);
    this.title = '';
    this.userId = 500 + Math.ceil(Math.random() * 1000);
  }
}
