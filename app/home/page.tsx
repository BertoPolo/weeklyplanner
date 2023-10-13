"use client" // temporary
import Link from "next/link"
// import { Textarea } from "@nextui-org/react"
import InputAndLabel from "../../components/InputAndLabel"
import CustomButton from "../../components/CustomButton"
import Day from "../../components/Day"
import { createTask, wantWekends } from "../../functions/functionsAndVars"

const Home = () => {
  // use .filter to select the task

  {
    /* the week is +1( have to be fixed, this is just to know the current week, but has to be navigable to other weeks) */
  }
  function getCurrentWeekNumber() {
    const today: any = new Date()
    const yearStart: any = new Date(today.getFullYear(), 0, 1)
    const dayOfWeek = today.getDay()

    // Calculate the week number
    const weekNumber = Math.ceil(((today - yearStart) / 86400000 + 1 + (dayOfWeek - 1)) / 7)
    return weekNumber
  }

  return (
    <>
      {/* separate navbar in other component */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="mr-2">
            Todo lists
          </Link>
          <Link href="/" className="">
            Full calendar
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => !wantWekends}>
            Weekends On/Off
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div>
        <h1 className="prose-2xl">Weekly Planner</h1>
        <h4>Week nº {getCurrentWeekNumber()}</h4>
      </div>
      <Day />
      {/* task creator form */}
      <div className="mt-3 grid justify-items-center">
        <InputAndLabel type="text" title="Task title" variable="taskName" ph="enter task here" />
        <InputAndLabel type="date" title="Date" variable="date" />
        <InputAndLabel type="time" title="Start Time" variable="startTime" />
        <InputAndLabel type="time" title="End Time" variable="endTime" />
        <InputAndLabel type="textarea" title="Description" variable="description" />

        <CustomButton launchFunction={createTask} title="Create Task" />
      </div>
    </>
  )
}
export default Home
