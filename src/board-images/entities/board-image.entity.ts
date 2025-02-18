import { Board } from 'src/boards/entities/board.entity';
import { CommonEntity } from 'src/common/typeorm/common.entity';
import { Image } from 'src/images/entities/image.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class BoardImage extends CommonEntity {
  @ManyToOne(() => Image)
  @JoinColumn({ referencedColumnName: 'id' })
  image: Image;

  @ManyToOne(() => Board)
  @JoinColumn({ referencedColumnName: 'id' })
  board: Board;
}
