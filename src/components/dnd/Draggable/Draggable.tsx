import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { CardDragData } from '../../../entities/card';

export type DraggableProps = React.PropsWithChildren & {
  /** Unique identifier for this draggable entity. */
  id: UniqueIdentifier;

  /**
   * Data to pass to the draggable entity. This is currently opinionated towards
   * card related data but if we need this to be more generic, this can easily
   * be changed.
   */
  data?: CardDragData;
};

const Draggable = ({ children, id, data }: DraggableProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id, data });

  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </button>
  );
};

export default Draggable;
