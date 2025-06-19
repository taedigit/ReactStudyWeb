import React, { useState, useRef } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, useDroppable, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { Typography, Box, Snackbar, Button } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const stateExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

const BUTTON_WIDTH = 180;
const BUTTON_HEIGHT = 48;

const INITIAL_ITEMS = [
  { id: '1', text: 'React 공부하기' },
  { id: '2', text: 'DnD 휴지통 구현' },
  { id: '3', text: '문서 정리' },
  { id: '4', text: '점심 먹기' },
];

function getOffset(e: any, node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function TrashDroppable({ trashActive, setTrashActive, children }: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'trash' });
  React.useEffect(() => {
    setTrashActive(isOver);
  }, [isOver, setTrashActive]);
  return (
    <Box
      ref={setNodeRef}
      sx={{
        width: 80, height: 80, borderRadius: '12px',
        background: isOver || trashActive ? '#e53e3e' : '#232323',
        color: isOver || trashActive ? '#fff' : '#aaa',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32, fontWeight: 700, boxShadow: (isOver || trashActive) ? '0 0 0 4px #e53e3e55' : '0 2px 8px #23232322',
        border: (isOver || trashActive) ? '2.5px solid #fff' : '2.5px solid #484f54',
        transition: 'all 0.2s',
        mt: 2,
        position: 'relative',
        alignSelf: 'flex-end',
        marginLeft: 'auto',
      }}
    >
      🗑️
      {children}
    </Box>
  );
}

function DraggableButton({ id, text }: any) {
  const { attributes, listeners, setNodeRef, isDragging, transform } = useSortable({ id });
  return (
    <Button
      ref={setNodeRef}
      variant="contained"
      color={isDragging ? 'error' : 'primary'}
      {...attributes}
      {...listeners}
      sx={{
        fontWeight: 700,
        fontSize: 16,
        mb: 2,
        minWidth: 180,
        minHeight: 48,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        transition: 'box-shadow 0.2s, background 0.2s',
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transitionProperty: 'box-shadow, background, transform',
        transitionDuration: isDragging ? '0.2s, 0.2s, 0.25s' : '0.2s, 0.2s',
        transitionTimingFunction: isDragging ? 'cubic-bezier(.6,-0.28,.74,.05)' : undefined,
        zIndex: isDragging ? 1200 : 1,
        position: isDragging ? 'relative' : undefined,
      }}
    >
      {text}
    </Button>
  );
}

function TrashDragOverlay({ activeId, items, draggingToTrash, trashPosition, pointerPosition, pointerOffset, onAnimationEnd }: any) {
  const overlayRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (draggingToTrash && trashPosition && pointerPosition && overlayRef.current) {
      const dx = trashPosition.x - pointerPosition.x;
      const dy = trashPosition.y - pointerPosition.y;
      const el = overlayRef.current;
      el.style.transition = 'none';
      el.style.transform = 'translate(0px, 0px) scale(1)';
      setTimeout(() => {
        el.style.transition = 'transform 0.6s cubic-bezier(.6,-0.28,.74,.05), opacity 0.6s';
        el.style.transform = `translate(${dx}px, ${dy}px) scale(0.3)`;
        el.style.opacity = '0';
      }, 10);
      const handle = () => {
        onAnimationEnd && onAnimationEnd();
        el.removeEventListener('transitionend', handle);
      };
      el.addEventListener('transitionend', handle);
    }
  }, [draggingToTrash, trashPosition, pointerPosition, onAnimationEnd]);
  if (!activeId) return null;
  const item = items.find((i: any) => i.id === activeId);
  if (!item) return null;
  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        left: pointerPosition && pointerOffset ? pointerPosition.x - pointerOffset.x : 0,
        top: pointerPosition && pointerOffset ? pointerPosition.y - pointerOffset.y : 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: draggingToTrash ? 1 : 0.95,
        transition: draggingToTrash ? undefined : 'none',
      }}
    >
      <Button
        variant="contained"
        color="error"
        sx={{
          fontWeight: 700,
          fontSize: 16,
          minWidth: BUTTON_WIDTH,
          minHeight: BUTTON_HEIGHT,
          boxShadow: '0 4px 16px #e53e3e99',
          opacity: 0.95,
          pointerEvents: 'none',
          transition: 'box-shadow 0.2s, background 0.2s',
        }}
      >
        {item.text}
      </Button>
    </div>
  );
}

const TrashDnDExample: React.FC = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [trashActive, setTrashActive] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [animateId, setAnimateId] = useState<string | null>(null);
  const [trashPosition, setTrashPosition] = useState<{ x: number; y: number } | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pointerPosition, setPointerPosition] = useState<{ x: number; y: number } | null>(null);
  const [draggingToTrash, setDraggingToTrash] = useState(false);
  const [pointerOffset, setPointerOffset] = useState<{ x: number; y: number } | null>(null);
  const [animating, setAnimating] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));
  const trashRef = useRef<HTMLDivElement>(null);

  function handleDragStart(event: any) {
    if (animating) return;
    setActiveId(event.active.id);
    setDraggingToTrash(false);
    setAnimateId(null);
    setTrashPosition(null);
    setPointerPosition({ x: event.activatorEvent.clientX, y: event.activatorEvent.clientY });
    const node = event.activatorEvent.target as HTMLElement;
    setPointerOffset(getOffset(event.activatorEvent, node));
  }
  function handleDragMove(event: any) {
    if (event.activatorEvent && event.activatorEvent.clientX && event.activatorEvent.clientY) {
      setPointerPosition({ x: event.activatorEvent.clientX, y: event.activatorEvent.clientY });
    }
  }
  function handleDragEnd(event: any) {
    const { active, over } = event;
    setTrashActive(false);
    if (over && over.id === 'trash') {
      if (trashRef.current && pointerPosition) {
        const rect = trashRef.current.getBoundingClientRect();
        setTrashPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setAnimateId(active.id);
        setDraggingToTrash(true);
        setAnimating(true);
      }
    } else if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
      setActiveId(null);
      setPointerPosition(null);
      setPointerOffset(null);
    } else {
      setActiveId(null);
      setPointerPosition(null);
      setPointerOffset(null);
    }
  }
  function handleDragCancel() {
    setActiveId(null);
    setPointerPosition(null);
    setPointerOffset(null);
    setDraggingToTrash(false);
  }
  function handleAnimationEnd() {
    setItems(items => items.filter(i => i.id !== animateId));
    setAnimateId(null);
    setTrashPosition(null);
    setPointerPosition(null);
    setPointerOffset(null);
    setSnackbar(true);
    setDraggingToTrash(false);
    setAnimating(false);
  }

  const handleRefresh = () => {
    setItems(INITIAL_ITEMS);
  };

  const example = (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ mb: 2, float: 'right' }}
        onClick={handleRefresh}
      >
        Refresh 초기화
      </Button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}>
              {items.map(item => (
                (!activeId || activeId !== item.id) && (
                  <DraggableButton
                    key={item.id}
                    id={item.id}
                    text={item.text}
                  />
                )
              ))}
            </div>
          </SortableContext>
          <div ref={trashRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrashDroppable trashActive={trashActive} setTrashActive={setTrashActive} />
          </div>
        </div>
        <DragOverlay dropAnimation={null}>
          {(activeId || draggingToTrash) && (pointerPosition || trashPosition) ? (
            <TrashDragOverlay
              activeId={activeId || animateId}
              items={items}
              draggingToTrash={draggingToTrash}
              trashPosition={trashPosition}
              pointerPosition={draggingToTrash ? pointerPosition : pointerPosition}
              pointerOffset={pointerOffset}
              onAnimationEnd={handleAnimationEnd}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      <Snackbar
        open={snackbar}
        autoHideDuration={1200}
        onClose={() => setSnackbar(false)}
        message="삭제되었습니다."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>휴지통/삭제 DnD (드롭 후 빨려들기 애니메이션)</Typography>
      <ExampleTab
        example={example}
        code={''}
        desc={
          '버튼을 드래그해서 휴지통에 드롭하면 DragOverlay가 마우스 위치에서 휴지통 중심으로 빨려들어가는 애니메이션이 실행되고, 이후 삭제됩니다.\n실전에서는 삭제 확인, Undo, 서버 연동 등으로 확장할 수 있습니다.'
        }
      />
    </div>
  );
};

export default TrashDnDExample; 