import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import Card from "./Card";
import { delay } from "@/lib/async";

// Befote getting the user data, we need to verify that the user is signed in.
const getData = async () => {
  await delay(800);
  const user = await getUserFromCookie(cookies());
  return user;
};

const CalendarGreeting = async () => {
  const user = await getData();

  return (
    <Card className="w-full py-4 relative">
      <div className="mb-4">
        <h1 className="text-3xl text-gray-700 font-bold mb-4">
          {user?.firstName}'s Calendar
        </h1>
        <h4 className="text-xl text-gray-400">
          View your calendar below
        </h4>
      </div>
      <div>
      </div>
    </Card>
  );
};

export default CalendarGreeting;