import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';

export type DraggableProps = React.PropsWithChildren & {
  /** Unique identifier for this draggable entity. */
  id: UniqueIdentifier;
};

const Draggable = ({ children, id }: DraggableProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
