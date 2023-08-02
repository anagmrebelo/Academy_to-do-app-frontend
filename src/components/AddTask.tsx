function AddTask(): JSX.Element {
  return (
    <div>
      <p>+</p>
      <input type="text" placeholder="Type a task here..." />
      <input type="date" />
      <button>Add</button>
    </div>
  );
}

export { AddTask };
