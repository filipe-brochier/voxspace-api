import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface AnswerProps {
  content: string;
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content;
  }

  get authorId(): UniqueEntityID {
    return this.props.authorId;
  }

  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID): Answer {
    const answer = new Answer({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id)

    return answer;
  }
}
