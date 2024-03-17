import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';

export type DroppableProps = React.PropsWithChildren & {
  /** Unique identifier for this droppable entity. */
  id: UniqueIdentifier;
};

const Droppable: React.FC<DroppableProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    backgroundColor: isOver ? 'green' : 'red',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
