export class UndoRedoStack <T> {
  undoStack: Array<T>;
  redoStack: Array<T>;
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  push(state: T) {
    this.undoStack.push(state);
    this.redoStack = [];
  }

  undo() {
    const state = this.undoStack.pop();

    if (state) {
      this.redoStack.push(state);
    }

    return state;
  }

  redo() {
    const state = this.redoStack.pop();

    if (state) {
      this.undoStack.push(state);
    }

    return state;
  }

  canUndo() {
    return this.undoStack.length > 0;
  }

  canRedo() {
    return this.redoStack.length > 0;
  }
}