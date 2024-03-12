import TaskCard from "./TaskCard"

function App() {

  return (
    <div className="flex">
      <div className="w-1/2 p-4 border-amber-950">
        <h1 className="text-lg font-bold mb-4">Pending</h1>
        <TaskCard title="Build the website using static conntet" dueDate="10th April" assigneeName="1" />
        <TaskCard title="Build the website using static conntet2" dueDate="22 March" assigneeName="2" />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-lg font-bold mb-4">Done</h1>
        <TaskCard title="Build the website using static conntet3" completeAtDate="10th April" assigneeName="3" />
        <TaskCard title="Build the website using static conntet4" completeAtDate="20th April" assigneeName="4" />
      </div>
    </div>
  )
}

export default App
