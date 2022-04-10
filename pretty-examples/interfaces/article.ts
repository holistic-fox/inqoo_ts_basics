import { Author } from './author';
import { Category } from './category';

export interface Article{
    author: Author;
    topic: string;
    title: string;
    creationDate: Date;
    tag: string[];
    category: Category;
}
