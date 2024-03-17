import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import { CardDropData } from '../../../entities/card';

export type DroppableProps = React.PropsWithChildren & {
  /** Unique identifier for this droppable entity. */
  id: UniqueIdentifier;
  className?: string;
  data?: CardDropData;
};

const Droppable: React.FC<DroppableProps> = ({
  children,
  id,
  className,
  data,
}) => {
  const { isOver, setNodeRef } = useDroppable({ id, data });
  const style = {
    backgroundColor: isOver ? 'green' : 'red',
  };

  return (
    <div ref={setNodeRef} style={style} className={className}>
      {children}
    </div>
  );
};

export default Droppable;
